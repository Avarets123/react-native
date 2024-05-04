import { Image, StyleSheet, View } from "react-native";
import ProfileIcon from "../../../../assets/icons/profileIcon";

export default function ProfilePhoto({ photoUrl }: { photoUrl?: string }) {
  return (
    <View style={styles.profileIcon}>
      {photoUrl && (
        <Image
          resizeMode="contain"
          source={{
            uri: photoUrl,
            height: 70,
            width: 70
          }}
        />
      )}
      {!photoUrl && <ProfileIcon />}
    </View>
  );
}

export const styles = StyleSheet.create({
  profileIcon: {
    position: "absolute",
    top: "10%",
    left: "34%",
    width: 72,
    height: 72,
  },
});
