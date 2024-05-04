import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import { Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function CustomLink({
  text,
  ...props
}: LinkProps & { text: string }) {
  return (
    <Link
      style={{
        color: Colors.link,
        marginTop: 50,
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "FiraSans",
      }}
      {...props}
    >
      <Text>{text}</Text>
    </Link>
  );
}
