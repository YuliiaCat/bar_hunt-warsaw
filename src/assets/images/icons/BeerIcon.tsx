import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Path } from 'react-native-svg';

const BeerIcon: React.FC<IIcon> = ({ width = 66, height = 66}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 66 66"
      fill="none"
    >
      <Path
        d="M24.75 8.25a5.5 5.5 0 015.423 6.421l5.426.908a11 11 0 00-.014-3.743 5.5 5.5 0 017.68 7.414H13.75a2.75 2.75 0 111.482-5.068 2.749 2.749 0 004.161-1.689A5.5 5.5 0 0124.75 8.25zm4.169-4.683a11 11 0 00-13.767 4.801A8.25 8.25 0 008.25 22.65V55a5.5 5.5 0 005.5 5.5h27.5a5.5 5.5 0 005.5-5.5h5.5a5.5 5.5 0 005.5-5.5V30.25a5.5 5.5 0 00-5.5-5.5h-5.5v-.974A11 11 0 0033.286 6.813a11 11 0 00-4.367-3.245zM46.75 49.5V30.25h5.5V49.5h-5.5zm-27.5-19.25h5.5V49.5h-5.5V30.25zm11 0h5.5V49.5h-5.5V30.25z"
        fill="#fff"
      />
    </Svg>
  );
};


export default BeerIcon;
