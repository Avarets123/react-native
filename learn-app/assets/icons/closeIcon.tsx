import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CloseIcon = () => (
  <Svg fill="none">
    <Path
      stroke="#AFB2BF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 5 5 19M5 5l14 14"
    />
  </Svg>
);
export default CloseIcon;
