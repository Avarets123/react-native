import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PhoneIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#001833"
      d="M8.812 2h3.249c.449 0 .812.201.812.45s-.363.45-.812.45H8.812C8.364 2.9 8 2.699 8 2.45S8.364 2 8.812 2Z"
    />
    <Path
      fill="#001833"
      d="M6.3 0h8.4c1.158 0 2.1.808 2.1 1.8v14.4c0 .992-.942 1.8-2.1 1.8H6.3c-1.157 0-2.1-.808-2.1-1.8V1.8C4.2.808 5.144 0 6.3 0ZM5.25 16.2c0 .497.47.9 1.05.9h8.4c.58 0 1.05-.403 1.05-.9V1.8c0-.497-.47-.9-1.05-.9H6.3c-.58 0-1.05.403-1.05.9v14.4Z"
    />
    <Path
      fill="#001833"
      d="M10.5 15.5c-.58 0-1.05-.403-1.05-.9s.47-.9 1.05-.9c.58 0 1.05.403 1.05.9s-.47.9-1.05.9Z"
    />
  </Svg>
);
export default PhoneIcon;
