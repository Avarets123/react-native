import { Pressable, View } from "react-native";
import ArrowLeft from "../../assets/svgs/arrowLeft";
import { useRouter } from "expo-router";

export default function ArrowToBack() {
  const router = useRouter();

  return (
    <Pressable onPress={router.back}>
      <View style={{
        marginTop: 57,
        marginLeft: 26,
        width: 80,
        height: 80
      }}>
        <ArrowLeft />
      </View>
    </Pressable>
  );
}
