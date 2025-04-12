import React from 'react';
import IIcon from '../../../types/icon';
import Svg, { ClipPath, Defs, Ellipse, G, Path, Rect } from 'react-native-svg';

const GameIcon: React.FC<IIcon> = ({ width = 70, height = 64}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 70 64"
      fill="none"
    >
      <G filter="url(#filter0_d_2_2383)">
        <Rect x={8} y={6} width={53.0196} height={52} rx={26} fill="#FFC400" />
        <Rect
          x={8.5}
          y={6.5}
          width={52.0196}
          height={51}
          rx={25.5}
          stroke="#141414"
        />
        <Ellipse cx={34} cy={41.5} rx={4} ry={2.5} fill="#141414" />
        <G clipPath="url(#clip0_2_2383)">
          <Path
            d="M32.393 38.397L27.124 24.05a1.683 1.683 0 00-1.972-1.032l-8.09 2.003c-.808.2-1.358.998-1.262 1.833L17.833 42l14.56-3.604zm-2.196-1.174L19.228 39.94 17.463 26.64l8.09-2.003 4.644 12.586z"
            fill="#141414"
          />
        </G>
        <G clipPath="url(#clip1_2_2383)">
          <Path
            d="M35.827 38.397l5.27-14.346a1.683 1.683 0 011.971-1.031l8.09 2.003c.809.2 1.358.997 1.263 1.832l-2.033 15.147-14.56-3.605zm2.197-1.173l10.968 2.716 1.765-13.3-8.089-2.002-4.644 12.586z"
            fill="#141414"
          />
        </G>
        <G clipPath="url(#clip2_2_2383)">
          <Path
            d="M41.5 40.834h.558l-.061-.555-1.667-15.192h0v-.01a2.183 2.183 0 00-2.163-1.91h-8.334a2.202 2.202 0 00-2.162 1.91h0l-.001.01-1.667 15.192-.06.554H41.5zm-3.78-15l1.371 12.333H28.91l1.372-12.334h7.438z"
            fill="#141414"
            stroke="#FFC400"
          />
          <Path
            transform="rotate(4.464 29.623 30)"
            fill="#FFC300"
            d="M29.6226 30H35.6226V38H29.6226z"
          />
          <Path
            transform="rotate(-5.602 31.815 30.453)"
            fill="#FFC300"
            d="M31.8152 30.4531H37.815200000000004V38.4531H31.8152z"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_2383">
          <Path
            fill="#fff"
            transform="rotate(166.094 15.207 21.854)"
            d="M0 0H20V20H0z"
          />
        </ClipPath>
        <ClipPath id="clip1_2_2383">
          <Path
            fill="#fff"
            transform="scale(1 -1) rotate(-13.906 -145.092 -155.003)"
            d="M0 0H20V20H0z"
          />
        </ClipPath>
        <ClipPath id="clip2_2_2383">
          <Path fill="#fff" transform="rotate(-180 22 21)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};


export default GameIcon;
