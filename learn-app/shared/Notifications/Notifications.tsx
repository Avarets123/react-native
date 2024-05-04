import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Linking } from "react-native";

export default function NotificationsRoot() {
  const router = useRouter();
  Notifications.setNotificationHandler({
    handleNotification: async (n) => ({
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }),
  });

  useEffect(() => {
    const subReceive = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification.request.content);
      }
    );

    const subReq = Notifications.addNotificationResponseReceivedListener(
      (not) => {
        const alias = not.notification.request.content.data?.alias;
        //   Linking.openURL("https://purpleschool.ru/course/react-native");
        console.log(alias)
        router.push(`/(app)/courses/${alias}`);
      }
    );

    return () => {
      subReceive.remove();
      subReq.remove();
    };
  }, []);

  return <></>;
}
