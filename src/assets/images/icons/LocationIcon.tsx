import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const LocationIcon: React.FC<IIcon> = ({ width = 44, height = 44}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
    >
      <Path
        d="M16.042 18.333a5.958 5.958 0 1111.916 0 5.958 5.958 0 01-11.916 0z"
        fill="#131313"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.919 16.274A14.74 14.74 0 0121.604 2.75h.792a14.74 14.74 0 0114.685 13.524 15.95 15.95 0 01-3.544 11.398L24.75 38.42a3.55 3.55 0 01-5.5 0l-8.785-10.747a15.95 15.95 0 01-3.546-11.398zM22 9.625a8.708 8.708 0 100 17.417 8.708 8.708 0 000-17.417z"
        fill="#131313"
      />
    </Svg>
  );
};


export default LocationIcon;
