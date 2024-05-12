import * as React from "react";
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg";
const EyeIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#001833"
      fillRule="evenodd"
      d="M9 5.077c-1.198 0-2.17.973-2.17 2.17a2.172 2.172 0 0 0 4.34 0c0-1.197-.974-2.17-2.17-2.17Zm0 5.69a3.523 3.523 0 0 1-3.52-3.52A3.524 3.524 0 0 1 9 3.728c1.94 0 3.52 1.58 3.52 3.52 0 1.941-1.58 3.52-3.52 3.52Z"
      clipRule="evenodd"
    />
    <Mask
      id="a"
      width={18}
      height={16}
      x={0}
      y={-1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0h18v14.494H0V0Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#001833"
        fillRule="evenodd"
        d="M1.413 7.247C3.087 10.945 5.906 13.144 9 13.145c3.093-.001 5.913-2.2 7.587-5.898C14.913 3.55 12.093 1.35 9 1.35c-3.093 0-5.913 2.2-7.587 5.897Zm7.589 7.248h-.004c-3.723-.003-7.066-2.612-8.943-6.982a.676.676 0 0 1 0-.532C1.932 2.61 5.275.003 8.997 0 9-.002 9-.002 9 0c.002-.002.002-.002.003 0 3.722.002 7.065 2.61 8.942 6.98a.669.669 0 0 1 0 .532c-1.877 4.37-5.22 6.979-8.942 6.982h-.001Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default EyeIcon;
