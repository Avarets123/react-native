import {
  PermissionResponse,
  PermissionStatus,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { Alert } from "react-native";

export type MediaType = "camera" | "library";

export const verifyMediaPerms = async (
  perms: PermissionResponse | null,
  //TODO дотипизировать
  reqPermsFn: () => any
): Promise<boolean> => {
  if (perms?.status === PermissionStatus.DENIED) {
    const newPerms = await reqPermsFn();

    const isGranted = newPerms.granted;

    if (isGranted) return true;

    Alert.alert("Недостаточно прав!");
    return false;
  }

  if (perms?.status === PermissionStatus.UNDETERMINED) {
    const newPerms = await reqPermsFn();

    return newPerms.granted;
  }

  return true;
};

export const launchCameraOrLibraryByType = (type: MediaType) => {
  if (type === "camera") return launchCameraAsync;
  return launchImageLibraryAsync;
};

// export default function useMedia(type: MediaType) {
//   return async (option: ImagePickerOptions) => {
//     const [perms, setPerms] = getPermsByType(type);

//     const isPermsGranted = verifyMediaPerms(perms, setPerms);

//     if (!isPermsGranted) return;

//     return launchCameraOrLibraryByType(type)(option);
//   };
// }
