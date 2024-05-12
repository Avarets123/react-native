import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LockIcon = (props: SvgProps) => (
  <Svg
    fill="none"
    {...props}
    style={{
      width: 20,
      height: 20,
    }}
  >
    <Path
      fill="#001833"
      fillRule="evenodd"
      d="M11.717 7.434a.68.68 0 0 1-.68-.68V4.808A3.45 3.45 0 0 0 7.59 1.36h-.015c-.918 0-1.779.354-2.429.999a3.416 3.416 0 0 0-1.02 2.432v1.962a.68.68 0 0 1-1.36 0V4.808A4.785 4.785 0 0 1 4.19 1.394C5.101.49 6.305-.033 7.593.001a4.811 4.811 0 0 1 4.804 4.807v1.946a.68.68 0 0 1-.68.68Z"
      clipRule="evenodd"
    />
    <Path
      fill="#001833"
      fillRule="evenodd"
      d="M4.118 7.37a2.76 2.76 0 0 0-2.758 2.758v3.889a2.76 2.76 0 0 0 2.758 2.758h6.928a2.761 2.761 0 0 0 2.758-2.758v-3.89a2.761 2.761 0 0 0-2.758-2.757H4.118Zm6.928 10.764H4.118A4.122 4.122 0 0 1 0 14.016v-3.888A4.122 4.122 0 0 1 4.118 6.01h6.928a4.122 4.122 0 0 1 4.118 4.118v3.888a4.122 4.122 0 0 1-4.118 4.118Z"
      clipRule="evenodd"
    />
    <Path
      fill="#001833"
      fillRule="evenodd"
      d="M7.581 13.759a.68.68 0 0 1-.68-.68v-2.014a.68.68 0 0 1 1.36 0v2.014a.68.68 0 0 1-.68.68Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default LockIcon;
