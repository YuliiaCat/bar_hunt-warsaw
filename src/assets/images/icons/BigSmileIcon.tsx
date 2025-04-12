import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { Defs, Image, Path, Pattern, Use } from 'react-native-svg';

const BigSmileIcon: React.FC<IIcon> = ({ width = 393, height = 264 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 393 264"
      fill="none"
    >
      <Path fill="url(#pattern0_2_190)" d="M-18 0H412V264H-18z" />
      <Defs>
        <Pattern id="pattern0_2_190" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_2_190" transform="matrix(.00476 0 0 .00776 0 -.031)" />
        </Pattern>
        <Image
          id="image0_2_190"
          width={210}
          height={137}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};


export default BigSmileIcon;
