// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleRefresh = (props: SvgIconProps) => {
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
      <g filter="url(#filter0_d_6860_4912)">
        <path d="M18.9598 33.9777C27.2218 33.9777 33.9195 27.2669 33.9195 18.9888C33.9195 10.7107 27.2218 4 18.9598 4C10.6977 4 4 10.7107 4 18.9888C4 27.2669 10.6977 33.9777 18.9598 33.9777Z" />
      </g>
      <path d="M18.5 37C27.6127 37 35 29.6127 35 20.5C35 11.3873 27.6127 4 18.5 4C9.3873 4 2 11.3873 2 20.5C2 29.6127 9.3873 37 18.5 37Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.58333}
        fill="none"
        stroke="white"
        d="M9.79199 14.1667V18.9167H14.542"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.58333}
        fill="none"
        stroke="white"
        d="M27.208 26.8333V22.0833H22.458"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.58333}
        fill="none"
        stroke="white"
        d="M25.2216 18.125C24.8201 16.9904 24.1377 15.976 23.2381 15.1764C22.3385 14.3768 21.251 13.8182 20.0771 13.5526C18.9032 13.2869 17.6811 13.323 16.525 13.6575C15.3688 13.9919 14.3162 14.6138 13.4653 15.465L9.79199 18.9167M27.2087 22.0834L23.5353 25.535C22.6845 26.3863 21.6319 27.0081 20.4757 27.3426C19.3195 27.677 18.0975 27.7131 16.9236 27.4475C15.7497 27.1819 14.6622 26.6232 13.7626 25.8236C12.863 25.0241 12.1806 24.0096 11.7791 22.875"
      />
      <defs>
        <filter
          id="filter0_d_6860_4912"
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
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6860_4912" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_6860_4912" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleRefresh);
const Memo = memo(ForwardRef);
export default Memo;
