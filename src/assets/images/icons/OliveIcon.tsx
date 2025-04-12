import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const OliveIcon: React.FC<IIcon> = ({ width = 34, height = 34}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
    >
      <Path
        d="M26.846 7.144c6.163 6.163 6.747 15.555 1.307 20.995-5.44 5.44-14.832 4.856-20.995-1.306C.996 20.67.411 11.277 5.851 5.848 11.291.418 20.684.992 26.846 7.144z"
        fill="#44911B"
      />
      <Path
        d="M16.497 10.682c-2.592-.967-4.207-3.092-3.58-4.76.616-1.657 3.22-2.22 5.822-1.264 2.603.956 4.208 3.092 3.58 4.76-.626 1.668-3.218 2.231-5.822 1.264z"
        fill="#86D72F"
      />
      <Path
        d="M10.622 15.326a4.707 4.707 0 100-9.414 4.707 4.707 0 000 9.414z"
        fill="#F8312F"
      />
    </Svg>
  );
};


export default OliveIcon;
