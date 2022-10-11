// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_9963_44694)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M1.99994 5.34064V9.99997"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.33333 12.6666H3.33333C2.59667 12.6666 2 12.07 2 11.3333V5.34064"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7 12.6666H12C12.7367 12.6666 13.3334 12.07 13.3334 11.3333V5.34064"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.34067 4H11.9933C12.7333 4 13.334 4.6 13.334 5.34067C13.334 5.78533 13.1133 6.20067 12.7453 6.45L9.174 8.87067C8.264 9.48733 7.06933 9.48733 6.15933 8.87067L2.58867 6.45067C2.22067 6.20133 2 5.78533 2 5.34133V5.34067C2 4.6 2.6 4 3.34067 4V4Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_9963_44694">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
