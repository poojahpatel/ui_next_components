// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiQnAListOutlined = (props: SvgIconProps) => {
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
        d="M5.5581 15.8691C5.0415 15.8691 4.5522 15.755 4.1126 15.5513L2 16L2.4417 13.8832C2.2366 13.4422 2.1218 12.9508 2.1218 12.4328C2.1218 10.5372 3.6583 9 5.5546 9C7.4509 9 8.9874 10.5372 8.9874 12.4328C8.9874 14.3284 7.4502 15.8656 5.5546 15.8656"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.5 12.5V12.3994"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7 12.5V12.3994"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4 12.5V12.3994"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.22845 9.0133C4.95335 8.4148 4.80005 7.7589 4.80005 7.068C4.80005 4.2561 7.31865 2 10.4 2C13.4814 2 16 4.2561 16 7.068C16 8.7298 15.1166 10.1928 13.7607 11.1154C13.7614 11.6446 13.76 12.3579 13.76 13.1069L11.5627 12.0247C11.1868 12.0968 10.7983 12.136 10.4 12.136C9.90235 12.136 9.42145 12.0716 8.96085 11.961"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.4 7.63088C10.4 7.17098 10.6842 6.92178 10.9691 6.72998C11.2477 6.54238 11.5263 6.29808 11.5263 5.84798C11.5263 5.22568 11.0223 4.72168 10.4 4.72168C9.77768 4.72168 9.27368 5.22568 9.27368 5.84798"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.5 9.5V9.39941"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiQnAListOutlined);
const Memo = memo(ForwardRef);
export default Memo;
