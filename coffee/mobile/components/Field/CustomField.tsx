import { ReactNode, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Image,
  Pressable,
} from "react-native";
import { Colors } from "../../constants/Colors";
import EyeIcon from "../../assets/svgs/eyeIcon";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 40,
  },
  field: {
    borderRadius: 10,
    height: 20,
    width: "100%",
    color: Colors.grey,
    verticalAlign: "middle",
    textAlignVertical: "center",
    marginLeft: 5,
    fontSize: 16,
    lineHeight: 1.2,
  },
});

export const CustomField = ({
  style = {},
  isPassword,
  icon,
  eyeShow = false,
  ...props
}: TextInputProps & {
  isPassword?: boolean;
  icon: ReactNode;
  eyeShow?: boolean;
  secure?: boolean;
}) => {
  const [secure, setSecure] = useState<boolean>(eyeShow);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          margin: 15,
        }}
      >
        {icon}
        <Image
          style={{
            height: 20,
          }}
          source={require("../../assets/icons/verticalLine.png")}
        />

        <TextInput
          secureTextEntry={secure}
          placeholderTextColor={Colors.grey}
          style={{ ...styles.field, ...(style as Object) }}
          {...props}
        ></TextInput>

        <Image
          style={{
            position: "absolute",
            marginTop: 23,
            width: 350,
          }}
          source={require("../../assets/icons/horizontalLine.png")}
        />

        {eyeShow && (
          <Pressable
            style={{
              position: "absolute",
              top: 5,
              right: -30,
            }}
            onPress={() => setSecure(!secure)}
          >
            <EyeIcon
              style={{
                width: 50,
                height: 50,
              }}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};
