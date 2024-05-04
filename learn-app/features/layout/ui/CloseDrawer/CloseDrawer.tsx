import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import { percentCalculator } from "../../../../utils/percentCalculator.util";
import CloseIcon from "../../../../assets/icons/closeIcon";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const windowWidth = Dimensions.get("window").width;
export const windowWithPercent = percentCalculator(windowWidth);

const CloseDrawer = (navigation: DrawerNavigationHelpers) => {
  return (
    <Pressable onPress={navigation.closeDrawer}>
      <View
        style={{
          ...styles.btn,
        }}
      >
        <CloseIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: windowWithPercent(10),
    height: 30,
    position: "absolute",
    top: 0,
    right: 20,
  },
});

export default CloseDrawer;
