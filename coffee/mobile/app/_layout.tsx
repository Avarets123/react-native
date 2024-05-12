import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack, usePathname } from "expo-router";
import { Colors } from "../constants/Colors";
import ArrowToBack from "../components/ArrowToBack/ArrowToBack";

export default function RootLayout() {
  const safePadding = useSafeAreaInsets();
  const pathName = usePathname();

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.white }}>
      <StatusBar style="dark" />

      {pathName !== "/" && <ArrowToBack />}

      <Stack
        screenOptions={{
          headerShown: false,
          presentation: "modal",
          contentStyle: {
            backgroundColor: Colors.white,
            paddingTop: safePadding.top,
            paddingBottom: safePadding.bottom,
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" />
      </Stack>
    </SafeAreaProvider>
  );
}
