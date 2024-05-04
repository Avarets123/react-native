import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ProfileIcon from "../../assets/icons/profileIcon";
import { useAtomValue } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";
import UploadButton from "../../shared/UploadButton/UploadButton";

export default function Profile() {
  const { profile } = useAtomValue(profileAtom);

  if (!profile) return;
  const { name, photo } = profile;

  const [imageUri, setImageUri] = useState<string | undefined>(photo);

  return (
    <View>
      <View style={styles.profile}>
        {imageUri ? (
          <Image
            resizeMode="contain"
            style={styles.photo}
            source={{
              uri: imageUri,
            }}
          />
        ) : (
          <ProfileIcon style={styles.photo} />
        )}
        <UploadButton imageSetter={setImageUri} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "FiraSans",
  },
  photo: {
    marginTop: 32,
    marginLeft: 30,
    borderRadius: 30,
    height: 73,
    width: 73,
  },
});
