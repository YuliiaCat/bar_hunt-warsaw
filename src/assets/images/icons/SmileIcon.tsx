import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const SmileIcon: React.FC<IIcon> = ({ width = 64, height = 64}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 64 66"
      fill="none"
    >
      <G clipPath="url(#clip0_2_372)">
        <Path
          d="M31.97 1.031C14.31 1.031.001 15.34.001 33c0 17.66 14.309 31.969 31.969 31.969 17.66 0 31.969-14.309 31.969-31.969 0-17.66-14.309-31.969-31.969-31.969zm10.313 21.657a4.12 4.12 0 014.124 4.125 4.12 4.12 0 01-4.124 4.125 4.12 4.12 0 01-4.126-4.125 4.12 4.12 0 014.126-4.125zm-20.626 0a4.12 4.12 0 014.125 4.125 4.12 4.12 0 01-4.125 4.125 4.12 4.12 0 01-4.125-4.125 4.12 4.12 0 014.125-4.125zm25.111 21.94a19.204 19.204 0 01-14.798 6.934 19.204 19.204 0 01-14.798-6.935c-1.754-2.1 1.418-4.73 3.17-2.642a15.063 15.063 0 0011.628 5.44c4.512 0 8.74-1.985 11.627-5.44 1.728-2.088 4.912.541 3.171 2.642z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_372">
          <Path fill="#fff" d="M0 0H63.94V66H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};


export default SmileIcon;
