import React, { ReactNode } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "../../constants/Colors";

export default function Field({
  style,
  icon,
  ...props
}: TextInputProps & { icon?: ReactNode }) {
  return (
    <View>
    //   {/* {icon && icon} */}
    <View>
    <TextInput  placeholder="Email" style={styles.input} />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 296,
    height: 30
  },
});
