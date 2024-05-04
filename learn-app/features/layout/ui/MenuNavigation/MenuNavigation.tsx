import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../constants/colors";
import { ReactNode, useState } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";

export default function MenuNavigation({
  Icon,
  drawer,
  path,
  text,
}: {
  Icon: ReactNode;
  drawer: DrawerContentComponentProps;
  path: string;
  text: string;
}) {
  const [clicked, setClicked] = useState<boolean>(false);

  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      onPress={() => drawer.navigation.navigate(path)}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
    >
      <View
        style={{
          ...styles.container,
          borderColor: isActive ? Colors.primary : Colors.black,
          backgroundColor:
            clicked || isActive ? Colors.violetDark : Colors.black,
        }}
      >
        {Icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignContent: 'center',
    alignItems: "center",
    height: 50,
  },
  icon: {
    paddingLeft: 40,
    width: 24,
    height: 24,
  },
  text: {
    paddingLeft: "6%",
    color: "white",
    fontSize: 16,
    fontFamily: "FiraSans",
  },
});
