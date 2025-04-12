import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const PinIcon: React.FC<IIcon> = ({ width = 22, height = 30}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 30"
      fill="none"
    >
      <Path
        d="M11 0C5.195 0 .5 4.695.5 10.5.5 18.375 11 30 11 30s10.5-11.625 10.5-19.5C21.5 4.695 16.805 0 11 0zm0 14.25a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill="#FFC400"
      />
    </Svg>
  );
};


export default PinIcon;
