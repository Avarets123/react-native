import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import CustomLink from "../shared/CustomLink/CustomLink";

export default function Unmatched() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        alignItems: 'center',
        gap: 0
      }}>
        <Image
        style={styles.image}
          resizeMode="center"
          alt="unmatchedLogo"
          source={require("../assets/unmatched.png")}
        />
        <Text
          style={{
            marginRight: "14%",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "FiraSans",
            color: "white",
            marginLeft: "14%",
          }}
        >
          Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
          приложения
        </Text>
        <CustomLink href={"/"} text="На главный экран" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    image: {
        height: '50%'
    },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
});
