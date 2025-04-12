import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const ShareIcon: React.FC<IIcon> = ({ width = 20, height = 20}) => {
  return (
     <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M16.666 10l-5.333-5.833v2.916c-2.667 0-8 1.75-8 8.75 0-.972 1.6-2.916 8-2.916v2.916L16.666 10z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export default ShareIcon;
