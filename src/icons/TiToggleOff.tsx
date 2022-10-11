// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiToggleOff = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={30}
      height={20}
      fill="none"
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        d="M22 1H10C5.58172 1 2 4.58172 2 9C2 13.4183 5.58172 17 10 17H22C26.4183 17 30 13.4183 30 9C30 4.58172 26.4183 1 22 1Z"
        fill="#E7E9E9"
      />
      <g filter="url(#filter0_d_6860_1107)">
        <circle cx={10} cy={9} r={6} fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_6860_1107"
          width={20}
          height={20}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.113725 0 0 0 0 0.0745098 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6860_1107" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_6860_1107" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiToggleOff);
const Memo = memo(ForwardRef);
export default Memo;
