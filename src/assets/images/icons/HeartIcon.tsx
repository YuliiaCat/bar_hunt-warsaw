import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../constants/colors';

const HeartIcon: React.FC<IIcon> = ({
  width = 20,
  height = 20,
  fill = colors.white,
  stroke = colors.white,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.25 3.333a4.583 4.583 0 00-4.583 4.584c0 4.583 5.416 8.75 8.333 9.719 2.917-.97 8.333-5.136 8.333-9.72A4.583 4.583 0 0010 5.282a4.58 4.58 0 00-3.75-1.948z"
        fill={fill}
        stroke={stroke}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export default HeartIcon;
