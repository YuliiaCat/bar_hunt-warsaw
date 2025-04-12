import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const CupIcon: React.FC<IIcon> = ({ width = 120, height = 120}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
    >
      <Path
        d="M91.6 80H28.35l-2.2 20h67.7M15 110l10-91.15c.65-5 4.85-8.85 10-8.85h50c5 0 9.35 3.85 10 8.85L105 110H15z"
        fill="#FFC400"
      />
    </Svg>
  );
};


export default CupIcon;
