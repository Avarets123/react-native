import { Image, StyleSheet, View, Text } from "react-native";
import ProfileIcon from "../../../../assets/icons/profileIcon";
import { IUserModel } from "../../model/user.model";

export default function UserProfile({ user }: { user: IUserModel | null }) {
  if (!user) return;

  const { photo, name, surname } = user;

  return (
    <View style={styles.content}>
      {photo ? (
        <Image
          resizeMode="contain"
          style={styles.photo}
          source={{
            uri: photo,
          }}
        />
      ) : (
        <ProfileIcon style={styles.photo} />
      )}
      <Text style={styles.text}>{name} {surname}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    gap: 15,
    top: 0,
    marginTop: 30,
  },
  photo: {
    borderRadius: 30,
    height: 73,
    width: 73,
  },
  text: {
    fontSize: 16,
    fontFamily: "FiraSans",
    color: "white",
  },
});
