import { StyleSheet, Text, View } from "react-native";
import { CustomField } from "../../components/Field/CustomField";
import MessageIcon from "../../assets/svgs/messageIcon";
import { Colors } from "../../constants/Colors";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";

export default function ResetPassword() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Восстановление пароля</Text>

        <View style={styles.fieldsWrapper}>
          <CustomField placeholder="Email" icon={<MessageIcon />} />
          <ButtonArrow style={styles.btn} />
        </View>        
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({

  btn: {
    marginTop: 80,
    marginRight: 40,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 22,
    color: Colors.black,
    textAlign: "left",
    marginLeft: 44,
    fontWeight: "600",
  },
  fieldsWrapper: {
    rowGap: 30,
  },
});
