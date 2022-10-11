// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAdsPaidOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_81052)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.0003 12.8889H3.99967C2.89522 12.8889 2 11.9937 2 10.8892V3.99967C2 2.89522 2.89522 2 3.99967 2H13.9996C15.1048 2 16 2.89522 16 3.99967V10.8884C16 11.9937 15.1048 12.8889 14.0003 12.8889V12.8889Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.5557 12.8889L10.9446 16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.44455 12.8889L7.05566 16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.99805 16H12.0025"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9 5.11111V4.33333"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9 9.77777V10.5555"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.64967 9.22245C7.85111 9.55223 8.19489 9.78089 8.611 9.78089H8.99989H9.46345C10.067 9.78089 10.5554 9.29167 10.5554 8.68889C10.5554 8.188 10.2148 7.75167 9.72867 7.62956L8.27034 7.264C7.785 7.14111 7.44434 6.704 7.44434 6.20311C7.44434 5.60034 7.93356 5.11111 8.53634 5.11111H8.99989H9.38878C9.80334 5.11111 10.1463 5.33823 10.3486 5.66645"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_81052">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAdsPaidOutlined);
const Memo = memo(ForwardRef);
export default Memo;
