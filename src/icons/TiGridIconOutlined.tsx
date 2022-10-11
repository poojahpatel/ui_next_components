// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiGridIconOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.88889 7.44444H3.55556C2.69611 7.44444 2 6.74833 2 5.88889V3.55556C2 2.69611 2.69611 2 3.55556 2H5.88889C6.74833 2 7.44444 2.69611 7.44444 3.55556V5.88889C7.44444 6.74833 6.74833 7.44444 5.88889 7.44444Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.4446 7.44444H12.1112C11.2518 7.44444 10.5557 6.74833 10.5557 5.88889V3.55556C10.5557 2.69611 11.2518 2 12.1112 2H14.4446C15.304 2 16.0001 2.69611 16.0001 3.55556V5.88889C16.0001 6.74833 15.304 7.44444 14.4446 7.44444Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.88889 16H3.55556C2.69611 16 2 15.3039 2 14.4444V12.1111C2 11.2517 2.69611 10.5555 3.55556 10.5555H5.88889C6.74833 10.5555 7.44444 11.2517 7.44444 12.1111V14.4444C7.44444 15.3039 6.74833 16 5.88889 16Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.2224 11.7611H11.3335"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.3335 14.7945H15.2224"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiGridIconOutlined);
const Memo = memo(ForwardRef);
export default Memo;
