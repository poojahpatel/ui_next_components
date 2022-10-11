// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleCheck = (props: SvgIconProps) => {
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
      <g filter="url(#filter0_d_6860_4176)">
        <path
          d="M18.9598 33.9777C27.2218 33.9777 33.9195 27.2669 33.9195 18.9888C33.9195 10.7107 27.2218 4 18.9598 4C10.6977 4 4 10.7107 4 18.9888C4 27.2669 10.6977 33.9777 18.9598 33.9777Z"
          fill="none"
        />
      </g>
      <path
        d="M18.9598 33.9777C27.2218 33.9777 33.9195 27.2669 33.9195 18.9888C33.9195 10.7107 27.2218 4 18.9598 4C10.6977 4 4 10.7107 4 18.9888C4 27.2669 10.6977 33.9777 18.9598 33.9777Z"
        fill="currentColor"
      />
      <path
        d="M13.6139 19.7106C13.178 19.3716 12.5497 19.4501 12.2106 19.8861C11.8716 20.322 11.9501 20.9503 12.3861 21.2894L13.6139 19.7106ZM17.5 24L16.8861 24.7894C17.107 24.9612 17.3899 25.0326 17.6659 24.9861C17.942 24.9397 18.1859 24.7797 18.3384 24.545L17.5 24ZM24.8384 14.545C25.1394 14.0819 25.008 13.4625 24.545 13.1616C24.0819 12.8606 23.4625 12.992 23.1616 13.455L24.8384 14.545ZM12.3861 21.2894L16.8861 24.7894L18.1139 23.2106L13.6139 19.7106L12.3861 21.2894ZM18.3384 24.545L24.8384 14.545L23.1616 13.455L16.6616 23.455L18.3384 24.545Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_6860_4176"
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
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6860_4176" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_6860_4176" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleCheck);
const Memo = memo(ForwardRef);
export default Memo;
