import { StyleSheet, Text, View } from "react-native";
import { CustomField } from "../../components/Field/CustomField";
import MessageIcon from "../../assets/svgs/messageIcon";
import { Colors } from "../../constants/Colors";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";

export default function Verification() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Введите код, отправленный на вашу почту</Text>

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
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: Colors.black,
    textAlign: "center",
    fontWeight: "500",
  },
  fieldsWrapper: {
    rowGap: 30,
  },
});
