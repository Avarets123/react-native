import { SplashScreen, Stack, Tabs } from "expo-router";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const safePadding = useSafeAreaInsets();

  const [loaded] = useFonts({
    FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
    FiraSansBold: require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: safePadding.top,
            paddingBottom: safePadding.bottom,
          },
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="restore" />
      </Stack>
    </SafeAreaProvider>
  );
}
