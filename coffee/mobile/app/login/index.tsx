import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowToBack from "../../components/ArrowToBack/ArrowToBack";
import { CustomField } from "../../components/Field/CustomField";
import MessageIcon from "../../assets/svgs/messageIcon";
import LockIcon from "../../assets/svgs/lockIcon";
import { Colors } from "../../constants/Colors";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow";
import CustomLink from "../../components/CustomLink/CustomLink";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <View>
        <Text style={styles.title}>Войти</Text>

        <View style={styles.fieldsWrapper}>
          <CustomField placeholder="Email" icon={<MessageIcon />} />
          <CustomField
            eyeShow
            secure
            placeholder="Пароль"
            icon={<LockIcon />}
          />
          <CustomLink
            href="/reset-password/"
            text="Забыли пароль?"
            style={styles.forgotPassword}
          />
        </View>
        <ButtonArrow
          style={styles.btn}
          onPress={() => router.push("/verification/")}
        />

        <View style={styles.footer}>
          <Text
            style={{
              color: Colors.grey,
            }}
          >
            Нет аккаунта?
          </Text>
          <CustomLink
            style={{
              marginTop: -4,
            }}
            href="/register/"
            text="Зарегистрируйтесь"
          />
        </View>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  footer: {
    marginLeft: 10,
    marginTop: 160,
    flexDirection: "row",
    gap: 7,
  },
  btn: {
    marginTop: 80,
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
