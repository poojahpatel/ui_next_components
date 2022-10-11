// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTabLockOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_11753_51056)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="none"
          stroke="currentColor"
          d="M14.816 15.5H3.424C2.63724 15.5 2 14.8288 2 14V3.5C2 2.67125 2.63724 2 3.424 2H14.816C15.6028 2 16.24 2.67125 16.24 3.5V14C16.24 14.8288 15.6028 15.5 14.816 15.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="none"
          stroke="currentColor"
          d="M2 5.75H16.24"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="none"
          stroke="currentColor"
          d="M10.3375 10.2502V9.28269C10.3375 8.47194 9.54649 7.75344 8.69494 8.08194C8.20509 8.27094 7.9032 8.79594 7.9032 9.34494V10.2502"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="none"
          stroke="currentColor"
          d="M10.544 12.875H7.69601C7.30298 12.875 6.98401 12.539 6.98401 12.125V11C6.98401 10.586 7.30298 10.25 7.69601 10.25H10.544C10.937 10.25 11.256 10.586 11.256 11V12.125C11.256 12.539 10.937 12.875 10.544 12.875Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_11753_51056">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTabLockOutlined);
const Memo = memo(ForwardRef);
export default Memo;
