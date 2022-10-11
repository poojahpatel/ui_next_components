// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHourGlassOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_6760_771)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M5.16016 6.16C5.62116 5.62 6.14616 5.139 6.72216 4.722"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M16.9999 19.482C15.5699 20.44 13.8509 21 11.9999 21C11.0879 21 10.2089 20.862 9.37988 20.61"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M3.523 9C3.19 9.94 3 10.946 3 12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#018270"
          d="M13.5209 12L14.8269 13.684C14.9629 13.859 15.0369 14.075 15.0369 14.297V15.5C15.0369 15.776 14.8129 16 14.5369 16H9.46289C9.18689 16 8.96289 15.776 8.96289 15.5V14.279C8.96289 14.069 9.02889 13.863 9.15289 13.693L10.3779 12L9.15289 10.308C9.02989 10.137 8.96289 9.932 8.96289 9.722V8.5C8.96289 8.224 9.18689 8 9.46289 8H14.5369C14.8129 8 15.0369 8.224 15.0369 8.5V9.703C15.0369 9.925 14.9629 10.141 14.8269 10.316L13.5209 12Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M9.37988 3.39C10.2089 3.138 11.0879 3 11.9999 3C16.9709 3 20.9999 7.029 20.9999 12C20.9999 13.855 20.4269 15.569 19.4629 17"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M6.72239 19.279C5.26239 18.219 4.14039 16.73 3.52539 15"
        />
      </g>
      <defs>
        <clipPath id="clip0_6760_771">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHourGlassOutlined);
const Memo = memo(ForwardRef);
export default Memo;
