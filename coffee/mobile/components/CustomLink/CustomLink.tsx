import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, ViewProps } from "react-native";
import { Colors } from "../../constants/Colors";

export default function CustomLink({
  text,
  href,
  style,
}: ViewProps & { text: string; href: Href<string> }) {
  const router = useRouter();

  const navigate = () => {
    router.push(href);
  };

  return (
    <Pressable onPress={navigate} style={styles.container}>
      <Text style={{ ...styles.text, ...(style as any) }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 150,
  },
  text: {
    fontSize: 18,
    textAlignVertical: "top",
  },
});
