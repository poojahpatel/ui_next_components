// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatCircle = (props: SvgIconProps) => {
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
      <rect width={24} height={24} rx={5} fill="currentColor" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M18 11.6667C18.0023 12.5466 17.7967 13.4146 17.4 14.2C16.9296 15.1412 16.2065 15.9328 15.3116 16.4862C14.4168 17.0396 13.3855 17.3329 12.3333 17.3334C11.4534 17.3356 10.5854 17.1301 9.8 16.7334L6 18L7.26667 14.2C6.86995 13.4146 6.66437 12.5466 6.66667 11.6667C6.66707 10.6145 6.96041 9.58325 7.51381 8.68839C8.06722 7.79352 8.85884 7.0704 9.8 6.60002C10.5854 6.20331 11.4534 5.99772 12.3333 6.00002H12.6667C14.0562 6.07668 15.3687 6.66319 16.3528 7.64726C17.3368 8.63132 17.9233 9.94379 18 11.3334V11.6667Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M9.75 10.5H14.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M9.75 12.5H12.25"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatCircle);
const Memo = memo(ForwardRef);
export default Memo;
