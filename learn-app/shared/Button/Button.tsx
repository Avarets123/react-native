import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  Pressable,
  PressableProps,
  Animated,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../../constants/colors";
import { percentCalculator } from "../../utils/percentCalculator.util";

const windowWidth = Dimensions.get("window").width;
export const windowWithPercent = percentCalculator(windowWidth);

const CustomButtom = ({
  text,
  isLoading,
  ...props
}: PressableProps & { text: string; isLoading?: boolean }) => {
  const btnAnimation = new Animated.Value(100);

  const btnAnimColor = btnAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const btnAnimateToValue = (
    toValue: number,
    type: "onPressIn" | "onPressOut"
  ) => {
    return (e: GestureResponderEvent) => {
      Animated.timing(btnAnimation, {
        toValue,
        useNativeDriver: false,
        duration: 100,
      }).start();

      props[type] && props[type]?.(e);
    };
  };

  return (
    <Pressable
      {...props}
      onPressIn={btnAnimateToValue(0, "onPressIn")}
      onPressOut={btnAnimateToValue(100, "onPressOut")}
    >
      <Animated.View
        style={{
          ...styles.btn,
          backgroundColor: btnAnimColor,
          ...props.style as any,
        }}
      >
        {!isLoading && <Text style={styles.btnText}>{text}</Text>}
        {isLoading && (
          <ActivityIndicator size={"large"} style={{ borderColor: "green" }} />
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 18,
    color: "white",
    fontFamily: "FiraSans",
  },
  btn: {
    width: windowWithPercent(80),
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButtom;
