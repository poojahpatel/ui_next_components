// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiToggleOn = (props: SvgIconProps) => {
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
        d="M20 1H8C3.58172 1 0 4.58172 0 9C0 13.4183 3.58172 17 8 17H20C24.4183 17 28 13.4183 28 9C28 4.58172 24.4183 1 20 1Z"
        fill="#018370"
      />
      <g filter="url(#filter0_d_6656_6208)">
        <circle cx={20} cy={9} r={6} fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_6656_6208"
          width={20}
          height={20}
          x={10}
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
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6656_6208" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_6656_6208" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiToggleOn);
const Memo = memo(ForwardRef);
export default Memo;
