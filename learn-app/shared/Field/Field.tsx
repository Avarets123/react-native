import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
  Pressable,
  Animated,
} from "react-native";
import { Colors } from "../../constants/colors";
import EyeClosedIcon from "../../assets/icons/eyeClosed";
import { EyeOpenedIcon } from "../../assets/icons/eyeOpened";

const styles = StyleSheet.create({
  field: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    borderRadius: 10,
    height: 58,
    color: "white",
    fontSize: 16,
    lineHeight: 1.2,
  },
  eye: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export const Field = ({
  style = {},
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        secureTextEntry={isPassword && !isShowPassword}
        placeholderTextColor={Colors.gray}
        style={{ ...styles.field, ...(style as Object) }}
        {...props}
      ></TextInput>
      {isPassword && (
        <Pressable
          style={styles.eye}
          onPress={() => setIsShowPassword((prev) => !prev)}
        >
          {isShowPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
        </Pressable>
      )}
    </View>
  );
};
