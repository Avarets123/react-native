import { StyleSheet, Text, View } from "react-native";
import { CourseDirection } from "../../entities/courses/model/course.model";

export default function Tag({ direction }: { direction: CourseDirection }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{direction.direction.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: "white",
  },
  text: {
    padding: 6,
    textAlignVertical: "center",
    fontFamily: "FiraSans",
    color: "white",
    fontSize: 14,
  },
});
