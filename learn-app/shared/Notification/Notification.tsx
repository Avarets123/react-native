import {
  View,
  Text,
  ViewProps,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { Colors } from "../../constants/colors";
import { percentCalculator } from "../../utils/percentCalculator.util";
import { useEffect, useState } from "react";

export const Notification = ({
  text,
  style,
  ...props
}: ViewProps & { text: string }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const animatedValue = new Animated.Value(-100);

  const onMounted = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsShow(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      onLayout={onMounted}
      style={{
        ...styles.notification,
        display: isShow ? "flex" : "none",
        ...(style as Object),
        transform: [{translateY: animatedValue}]
      }}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  notification: {
    // display: 'flex',
    position: "absolute",
    backgroundColor: Colors.darkRed,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "7%",
    top: "6%",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
