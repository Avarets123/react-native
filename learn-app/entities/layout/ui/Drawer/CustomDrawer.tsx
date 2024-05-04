import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../constants/colors";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import CustomLink from "../../../../shared/CustomLink/CustomLink";
import CloseDrawer from "../../../../features/layout/ui/CloseDrawer/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";
import { useEffect } from "react";
import { loadProfileAtom } from "../../../user/model/user.state";
import UserProfile from "../../../user/ui/UserProfile/UserProfile";
import MenuNavigation from "../../../../features/layout/ui/MenuNavigation/MenuNavigation";

const iconStyle = {
  paddingLeft: 40,
  width: 24,
  height: 24,
};
const MENU_NAVIGATIONS = [
  {
    text: "Профиль",
    path: "profile",
    Icon: (
      <Image
        style={iconStyle}
        resizeMode="contain"
        source={require("../../../../assets/profileMiniIcon.png")}
      />
    ),
  },
  {
    text: "Курсы",
    path: "index",
    Icon: (
      <Image
        style={iconStyle}
        resizeMode="contain"
        source={require("../../../../assets/coursesMiniIcon.png")}
      />
    ),
  },
  {
    text: "Клуб",
    path: "club",
    Icon: (
      <Image
        style={iconStyle}
        resizeMode="contain"
        source={require("../../../../assets/clubMiniIcon.png")}
      />
    ),
  },
];

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);

  const [profile, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawer} {...props}>
      <CloseDrawer {...props.navigation} />
      <UserProfile user={profile.profile} />
      <View style={styles.content}>
        {MENU_NAVIGATIONS.map((el) => (
          <MenuNavigation key={el.path} {...el} drawer={props} />
        ))}
      </View>
      <View style={styles.footer}>
        <CustomLink text="Выйти" onPress={logout} href={"/login"} />
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../../../assets/logoPurlple.png")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    marginTop: "8%",
    flex: 1,
    color: "white",
  },
  logo: {
    width: 160,
  },
  footer: {
    gap: 50,
    alignItems: "center",
    marginBottom: 40,
  },
});
