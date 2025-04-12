import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const MusicIcon: React.FC<IIcon> = ({ width = 66, height = 66}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 66 66"
      fill="none"
    >
      <Path
        d="M57.75 8.25v34.375A9.625 9.625 0 1148.125 33c1.485 0 2.888.33 4.125.935V17.792l-27.5 5.858v24.475a9.625 9.625 0 11-9.625-9.625c1.485 0 2.887.33 4.125.935V16.5l38.5-8.25z"
        fill="#fff"
      />
    </Svg>
  );
};


export default MusicIcon;
