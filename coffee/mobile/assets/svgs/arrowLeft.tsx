import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowLeft = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#000"
      d="M20 12.274a.75.75 0 0 1-.648.744l-.102.006h-15a.75.75 0 0 1-.102-1.493l.102-.007h15a.75.75 0 0 1 .75.75Z"
    />
    <Path
      fill="#000"
      d="M10.829 17.767a.75.75 0 0 1-.974 1.136l-.084-.073-6.05-6.024a.75.75 0 0 1-.073-.978l.073-.085 6.05-6.025a.75.75 0 0 1 1.13.98l-.072.083-5.516 5.494 5.516 5.492Z"
    />
  </Svg>
);
export default ArrowLeft;
