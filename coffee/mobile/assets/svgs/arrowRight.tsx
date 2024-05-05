import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
const ArrowRight = (pros: SvgProps) => (
  <Svg  fill="none"
    {...pros}
  >
    <G fill="#fff">
      <Path d="M5.333 15.634a1 1 0 0 1 .865-.99l.135-.01h20a1 1 0 0 1 .136 1.991l-.136.01h-20a1 1 0 0 1-1-1Z" />
      <Path d="M17.561 8.31a1 1 0 0 1 1.3-1.513l.112.096 8.066 8.032a1 1 0 0 1 .098 1.305l-.098.112-8.066 8.034a1 1 0 0 1-1.509-1.306l.097-.111 7.355-7.326-7.355-7.323Z" />
    </G>
  </Svg>
);
export default ArrowRight;
