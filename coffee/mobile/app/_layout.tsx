import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const safePadding = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />

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
        <Stack.Screen name="login/index"  />
      </Stack>
    </SafeAreaProvider>
  );
}
