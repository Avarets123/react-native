import { StyleSheet, Text, View } from "react-native";
import ArrowToBack from "../../components/ArrowToBack/ArrowToBack";
import Field from "../../components/Field/Field";

export default function Login() {
  return (
    <View>
      <ArrowToBack />
      <View>
        <Text style={styles.title}>Войти</Text>
        {/* <View> */}
        <Field />
        {/* </View> */}
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: 'black',
    textAlign: 'left',
    marginLeft: 44,
    fontWeight: '600'
  },
});
