import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import ArrowRight from "../../assets/svgs/arrowRight";

export default function ButtonArrow({ style, children, ...props }: PressableProps) {
  return (
    <Pressable {...props}>
      <View style={{ ...styles.btn, ...(style as any) }}>
        <ArrowRight style={{
          margin: 15
        }}/>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 64,
    width: 64,
    backgroundColor: Colors.green,
    borderRadius: 100,
  },
});
