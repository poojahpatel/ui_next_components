// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlertAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={41}
      height={41}
      fill="none"
      viewBox="0 0 41 41"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g filter="url(#filter0_d_7925_1743)">
        <path
          d="M18.9598 33.9777C27.2218 33.9777 33.9195 27.2669 33.9195 18.9888C33.9195 10.7107 27.2218 4 18.9598 4C10.6977 4 4 10.7107 4 18.9888C4 27.2669 10.6977 33.9777 18.9598 33.9777Z"
          fill="black"
        />
      </g>
      <path
        d="M18.5 37C27.6127 37 35 29.6127 35 20.5C35 11.3873 27.6127 4 18.5 4C9.3873 4 2 11.3873 2 20.5C2 29.6127 9.3873 37 18.5 37Z"
        fill="currentColor"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="white"
        d="M27.5 20.5C27.5 25.47 23.472 29.5 18.502 29.5C13.636 29.502 9.498 25.364 9.5 20.498C9.502 15.528 13.53 11.5 18.5 11.5C23.47 11.5 27.5 15.53 27.5 20.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="white"
        d="M18.5996 20.5L18.5996 16.5"
      />
      <circle cx={18.5996} cy={24} r={1.5} fill="white" />
      <defs>
        <filter
          id="filter0_d_7925_1743"
          width={39.7762}
          height={39.8339}
          x={0.303903}
          y={0.303903}
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
          <feOffset dx={1.23203} dy={1.23203} />
          <feGaussianBlur stdDeviation={2.46406} />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7925_1743" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_7925_1743" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlertAlt);
const Memo = memo(ForwardRef);
export default Memo;
