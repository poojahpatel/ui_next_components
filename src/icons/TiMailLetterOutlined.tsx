// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailLetterOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6778_15297)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M14 20H6C4.343 20 3 18.657 3 17V8.5M10 20H18C19.657 20 21 18.657 21 17V9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M6.5 5L4.085 6.64837C3.418 7.00037 3 7.69237 3 8.44637V8.47937C3 9.48634 4.66088 10.3189 4.95557 10.4587C4.98551 10.4729 5.0144 10.4876 5.04316 10.5041L11.4865 14.1947C11.7944 14.371 12.1726 14.371 12.4805 14.1947L18.9239 10.5041C18.9526 10.4876 18.9814 10.473 19.0113 10.4588C19.3084 10.3179 21 9.47075 21 8.44637V8.42637C21 7.68437 20.589 7.00237 19.932 6.65637L18.415 5.85737L17 5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9 5.5H12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9 8H14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M7 9.87072V3C7 2.44771 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V9.87072"
        />
      </g>
      <defs>
        <clipPath id="clip0_6778_15297">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailLetterOutlined);
const Memo = memo(ForwardRef);
export default Memo;
