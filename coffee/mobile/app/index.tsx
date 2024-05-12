import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import ButtonArrow from "../components/ButtonArrow/ButtonArrow";
import { useRouter } from "expo-router";
export default function Welcome() {
  const router = useRouter();

  const toLoginPage = () => {
    router.push("/login/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/tree.png")}
        />
        <Text style={styles.logoTitle}>Чарующий кофе</Text>
      </View>
      <Text style={styles.title}>Выбирай баристу</Text>
      <Text style={styles.opacityText}>Магический кофе на заказ</Text>

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 17,
          opacity: 0.4,
        }}
      >
        Add animation
      </Text>

      <ButtonArrow style={styles.btn} onPress={toLoginPage} />
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageWrapper: {
    alignItems: "center",
    backgroundColor: Colors.green,
    marginTop: 70,
    height: 350,
  },
  image: {
    width: 500,
    height: 500,
  },
  title: {
    marginTop: 35,
    fontSize: 29,
    textAlign: "center",
    color: Colors.black,
    fontWeight: "400",
  },
  logoTitle: {
    color: Colors.white,
    marginTop: -232,
    fontSize: 44,
    textAlign: "center",
  },
  opacityText: {
    marginTop: 30,
    color: Colors.grey,
    // fontWeight: "100",
    textAlign: "center",
    fontSize: 20,
  },
  btn: {
    marginTop: 80,
    marginRight: 40,
    alignSelf: "flex-end",
  },
});
