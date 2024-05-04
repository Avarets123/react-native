import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Restore() {
  return (
    <View>
      <Link href={"/"}>
        <Text style={{color: 'white'}}>Назад</Text>
      </Link>
    </View>
  );
}
