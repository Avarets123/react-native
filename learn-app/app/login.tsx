import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Field } from "../shared/Field/Field";
import { Colors } from "../constants/colors";
import CustomButtom from "../shared/Button/Button";
import { percentCalculator } from "../utils/percentCalculator.util";
import { Notification } from "../shared/Notification/Notification";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import CustomLink from "../shared/CustomLink/CustomLink";
import { useAtom } from "jotai";
import { loginAtom } from "../entities/auth/model/auth.state";

const windowWidth = Dimensions.get("window").width;
const windowWithPercent = percentCalculator(windowWidth);

export default function Login() {
  const [errLocal, setErrLocal] = useState<string | null>(null);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [{ access_token, error, isLoading }, login] = useAtom(loginAtom);

  useEffect(() => {
    if (access_token) {
      router.replace("/");
    }
  }, [access_token]);

  useEffect(() => {
    if (error) {
      setErrLocal(error);
      setTimeout(() => setErrLocal(null), 3500);
    }
  }, [error]);

  const loginHandlerFn = async () => {
    if (!email) {
      setErrLocal("Емайл не указан!");
      setTimeout(() => setErrLocal(null), 3500);
      return;
    }

    if (!password) {
      setErrLocal("Password не указан!");
      setTimeout(() => setErrLocal(null), 3500);

      return;
    }

    login({ email, password });
  };

  return (
    <View style={styles.container}>
      {errLocal && <Notification text={errLocal} />}

      <StatusBar style="light" />
      <View>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logoPurlple.png")}
          alt="logoPng"
        />
      </View>
      <View
        style={{
          rowGap: 15,
          justifyContent: "center",
        }}
      >
        <Field
          style={{ width: windowWithPercent(80) }}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <Field
          isPassword
          style={{ width: windowWithPercent(80) }}
          placeholder="Пароль"
          onChangeText={setPassword}
        />
      </View>
      <CustomButtom
        text="Войти"
        onPress={loginHandlerFn}
        isLoading={isLoading}
      />

      <CustomLink href={"/restore"} text="Восстановить пароль" />
      {/* <Link href={"/restoreыы"}>
        <Text
          style={{
            color: Colors.link,
            marginTop: 50,
            fontSize: 18,
            textDecorationLine: "underline",
            fontWeight: "700",
          }}
        >
          Восстановить пароль
        </Text>
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 27,
  },
  container: {
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    rowGap: 10,
  },
  logo: {
    width: windowWithPercent(70),
  },
});
