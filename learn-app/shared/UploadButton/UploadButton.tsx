import { Pressable, StyleSheet, Text, View } from "react-native";
import UploadIcon from "../../assets/icons/uploadIcon";
import { Colors } from "../../constants/colors";
import {
  ImagePickerResult,
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { MediaType, verifyMediaPerms } from "../../hooks/useMedia/useMedia";
import FormData from "form-data";
import { axiosBaseReq } from "../../utils/axiosBaseReq.util";
import { API } from "../../constants/api";

export interface IUploadRespose {
  urls: {
    original: string;
    webP: string;
  };
}

export default function UploadButton({
  imageSetter,
}: {
  imageSetter: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const baseMediaOptions = {
    allowsEditing: true,
    quality: 0.5,
    mediaTypes: MediaTypeOptions.Images,
  };

  const [mediaPerms, setMediaPerms] = useMediaLibraryPermissions();
  const [cameraPerms, setCameraPerms] = useCameraPermissions();

  const loadImage = async (type: MediaType) => {
    let res: ImagePickerResult;
    if (type === "camera") {
      const isGranted = await verifyMediaPerms(cameraPerms, setCameraPerms);
      if (!isGranted) return;
      res = await launchCameraAsync(baseMediaOptions);
    } else {
      const isGranted = await verifyMediaPerms(mediaPerms, setMediaPerms);
      if (!isGranted) return;
      res = await launchImageLibraryAsync(baseMediaOptions);
    }

    if (!res.assets) return;

    const imgUrl = await uploadImage(
      res.assets[0].uri,
      res.assets[0].fileName ?? ""
    );
    imageSetter(imgUrl);
  };

  const uploadImage = async (uri: string, name: string) => {
    const formData = new FormData();

    formData.append("files", {
      uri,
      name,
      type: "image/jpeg",
    });

    const res = await axiosBaseReq<FormData, IUploadRespose>(
      "post",
      API.uploadFile,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res.error);
    return res.data?.urls.original;
  };

  return (
    <Pressable onPress={() => loadImage("library")}>
      <View style={styles.container}>
        <UploadIcon
          style={{
            marginTop: 7,
          }}
        />
        <Text style={styles.text}>Загрузить изображение</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    padding: 18,
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: Colors.violetDark,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 10,
  },
  text: {
    color: "white",
    fontFamily: "FiraSans",
    fontSize: 14,
  },
});
