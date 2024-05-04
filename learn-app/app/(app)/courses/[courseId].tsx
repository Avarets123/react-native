import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CoursePage() {
  const { courseId } = useLocalSearchParams();

  return (
    <View>
      <Text>{courseId}</Text>
    </View>
  );
}
