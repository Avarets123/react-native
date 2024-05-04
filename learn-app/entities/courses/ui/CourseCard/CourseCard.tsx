import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { StudentCourseDescription } from "../../model/course.model";
import CustomLink from "../../../../shared/CustomLink/CustomLink";
import { Colors } from "../../../../constants/colors";
import CustomButtom from "../../../../shared/Button/Button";
import Tag from "../../../../shared/Tag/Tag";
import StatusBarCard from "../../../../shared/StatusBarCard/StatusBarCard";
import { randomNumberGenerator } from "../../../../utils/randomNumberGenerator.util";

export default function CourseCard({
  course,
}: {
  course: StudentCourseDescription;
}) {
  const { image, shortTitle, courseOnDirection, alias } = course;

  console.log(alias);

  return (
    <View style={styles.container}>
      <Image
        style={{
          borderRadius: 10,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        source={{
          uri: image,
          width: 330,
          height: 170,
        }}
      />
      <View
        style={{
          height: 140,
          backgroundColor: Colors.blackLight,
        }}
      >
        <StatusBarCard status={randomNumberGenerator(1, 100)} />
        <Text style={styles.title}>{shortTitle}</Text>
        <View style={styles.tagsContainer}>
          {courseOnDirection.map((dir) => (
            <Tag direction={dir} />
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <CustomButtom
          style={styles.btn}
          text="Купить курс"
          onPress={() =>
            Linking.openURL(`https://purpleschool.ru/courses/${alias}`)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
    marginTop: 14,
    marginBottom: 14,
  },

  title: {
    marginTop: 18,
    fontFamily: "FiraSans",
    fontSize: 21,
    color: "white",
    paddingLeft: 10,
  },
  footer: {
    paddingTop: 20,
    paddingLeft: 20,
    height: 90,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.violetDark,
  },
  btn: {
    width: 150,
  },
});
