import { useAtomValue, useSetAtom } from "jotai";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import { logoutAtom } from "../../entities/auth/model/auth.state";
import CustomButtom from "../../shared/Button/Button";
import {
  coursesAtom,
  loadCoursesAtom,
} from "../../entities/courses/model/course.state";
import { useEffect } from "react";
import CourseCard from "../../entities/courses/ui/CourseCard/CourseCard";
import { StudentCourseDescription } from "../../entities/courses/model/course.model";
import * as Notifications from "expo-notifications";
import NotificationsRoot from "../../shared/Notifications/Notifications";

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  const loadCourses = useSetAtom(loadCoursesAtom);
  const { courses, error, isLoading } = useAtomValue(coursesAtom);

  useEffect(() => {
    loadCourses();
  }, []);

  const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
    return <CourseCard course={item} />;
  };

  const checkNotifyPermissions = async () => {
    const perms = await Notifications.getPermissionsAsync();

    return (
      perms.granted ||
      perms.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const notifyLocal = async () => {
    const isGranted = await checkNotifyPermissions();

    if (!isGranted) await Notifications.requestPermissionsAsync();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Курс реак-нейтив",
        body: "Нажмите сюда для перехода",
        data: { alias: "react-native" },
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  return (
    // <ScrollView>
    //   <View
    //     style={{
    //       paddingTop: 50,
    //       alignItems: "center",
    //       gap: 20,
    //     }}
    //   >
    //     {courses.length > 0 &&
    //       courses.map((c) => <CourseCard key={c.id} course={c} />)}

    //     <CustomButtom text="Выйти" onPress={logout} />
    //   </View>
    // </ScrollView>

    <View
      style={{
        paddingTop: 50,
        alignItems: "center",
        gap: 20,
      }}
    >
      <NotificationsRoot />

      <CustomButtom text="Уведомить" onPress={notifyLocal} />
      {isLoading && <ActivityIndicator size={"large"} color={"white"} />}
      {courses.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => loadCourses()}
            />
          }
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCourse}
        />
      )}
    </View>
  );
}

// const rootState = useRootNavigationState();

// useEffect(() => {
//   if (!rootState?.key) return;

//   if (!access_token) {
//     router.replace("/login");
//     return;
//   }
// }, [access_token, rootState]);
