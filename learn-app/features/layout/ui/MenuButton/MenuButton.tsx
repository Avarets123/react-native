import {
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  PressableProps,
} from "react-native";
import { percentCalculator } from "../../../../utils/percentCalculator.util";
import { useState } from "react";
import { Colors } from "../../../../constants/colors";
import DraweIcon from "../../../../assets/icons/drawerIcon";

const windowWidth = Dimensions.get("window").width;
export const windowWithPercent = percentCalculator(windowWidth);

const MenuButton = ({
  navigation,
  ...props
}: PressableProps & { navigation: any }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={navigation.toggleDrawer}
    >
      <View
        style={{
          ...styles.btn,
          backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
        }}
      >

        <DraweIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: windowWithPercent(10),
    height: 50,
    borderRadius: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: 'center',
    // alignSelf: 'center',
    // verticalAlign: 'top',
  
    paddingVertical: 10,
    paddingHorizontal: 8
  },
});

export default MenuButton;
