import { Redirect, SplashScreen } from "expo-router";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "../../constants/colors";
import MenuButton from "../../features/layout/ui/MenuButton/MenuButton";
import CustomDrawer from "../../entities/layout/ui/Drawer/CustomDrawer";
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const { access_token } = useAtomValue(authAtom);

  if (!access_token) {
    return <Redirect href={"/login"} />;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerStatusBarHeight: 10,
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowOpacity: 0,
            shadowColor: Colors.blackLight,
          },

          headerLeft: () => {
            return <MenuButton navigation={navigation} />;
          },
          headerTitleStyle: {
            color: "white",
            fontFamily: "FiraSans",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          sceneContainerStyle: {
            backgroundColor: Colors.black,
          },
          drawerContentStyle: {
            backgroundColor: Colors.black,
          },
        })}
      >
        <Drawer.Screen name="index" options={{ title: "Мои курсы" }} />
        <Drawer.Screen name="profile" options={{ title: "Профиль" }} />
        <Drawer.Screen name="club" options={{ title: "Клуб" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// <Stack>
//   <Stack.Screen name="index" />
// </Stack>
