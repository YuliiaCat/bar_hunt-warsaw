import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const MapIcon: React.FC<IIcon> = ({ width = 20, height = 20}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M12.5 17.5l-5-1.75-3.875 1.5a.753.753 0 01-.77-.093.823.823 0 01-.355-.699V4.792c0-.18.052-.34.157-.48A.944.944 0 013.083 4L7.5 2.5l5 1.75 3.875-1.5a.752.752 0 01.77.094.823.823 0 01.355.698v11.666c0 .18-.052.34-.156.48a.938.938 0 01-.427.312L12.5 17.5zm-.833-2.042v-9.75L8.333 4.542v9.75l3.334 1.166z"
        fill="#fff"
      />
    </Svg>
  );
};


export default MapIcon;
