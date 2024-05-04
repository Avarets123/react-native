import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

export default function StatusBarCard({ status = 30 }: { status: number }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Text style={styles.text}>{status}%</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={{ ...styles.status, width: `${status}%` }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.violetDark,
    height: 7,
    borderRadius: 30,
  },
  status: {
    height: 7,
    // width: "90%",
    backgroundColor: "#E47AD5",
    position: "absolute",
    borderRadius: 30,
  },
  container: {
    marginLeft: 12,
    marginRight: 12,
  },
  text: {
    color: "white",
  },
});
