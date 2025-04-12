import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const WineBottleIcon: React.FC<IIcon> = ({
  width = 20,
  height = 20,
  style,
  stroke,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 82 82" fill="none" style={style}>
      <Path
        d="M28.54 25.175h0L5.65 48.066c-4.198 4.198-4.198 11.005 0 15.203l13.08 13.082c4.198 4.197 11.006 4.197 15.204 0l22.892-22.893c5.679-5.679 7.203-13.912 4.63-20.982l9.543-9.543a3.814 3.814 0 004.114-.844l3.271-3.27a3.812 3.812 0 00-.001-5.391l-9.811-9.81a3.812 3.812 0 00-5.392 0l-3.27 3.27a3.813 3.813 0 00-.845 4.115l-9.543 9.542c-7.07-2.573-15.301-1.049-20.982 4.63zm1.363 37.882l-10.96-10.96L34.46 36.58l10.96 10.96-15.517 15.517z"
        fill="#fff"
        stroke={stroke}
        strokeWidth={3}
      />
    </Svg>
  );
};


export default WineBottleIcon;
