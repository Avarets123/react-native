import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowToBack from "../../components/ArrowToBack/ArrowToBack";
import { CustomField } from "../../components/Field/CustomField";
import MessageIcon from "../../assets/svgs/messageIcon";
import LockIcon from "../../assets/svgs/lockIcon";
import { Colors } from "../../constants/Colors";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";
import CustomLink from "../../components/CustomLink/CustomLink";
import ProfileIcon from "../../assets/svgs/profileIcon";
import PhoneIcon from "../../assets/svgs/phoneIcon";

export default function Register() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Регистрация</Text>

        <View style={styles.fieldsWrapper}>
          <CustomField placeholder="Логин" icon={<ProfileIcon />} />
          <CustomField placeholder="Номер телефона" icon={<PhoneIcon />} />
          <CustomField placeholder="Email" icon={<MessageIcon />} />

          <CustomField
            eyeShow
            secure
            placeholder="Пароль"
            icon={<LockIcon />}
          />
        </View>

        <Text
          style={{
            marginTop: 50,
            color: Colors.grey,
            fontSize: 16,
            textAlign: "center",
            marginRight: 10,
            marginLeft: 10

          }}
        >
          Регистрируясь, вы соглашаетесь с нашими условиями использования
        </Text>
        <ButtonArrow style={styles.btn} />

        <View style={styles.footer}>
          <Text
            style={{
              color: Colors.grey,
            }}
          >
            Имеется аккаунт?
          </Text>
          <CustomLink
            style={{
              marginTop: -4,
            }}
            href="/login/"
            text="Авторизуйтесь"
          />
        </View>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  footer: {
    marginLeft: 10,
    marginTop: 130,
    flexDirection: "row",
    gap: 7,
  },
  btn: {
    marginTop: 60,
    marginRight: 40,
    alignSelf: "flex-end",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
    color: Colors.black,
    fontWeight: "500",
    textDecorationLine: "underline",
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
