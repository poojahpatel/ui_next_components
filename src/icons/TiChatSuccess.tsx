// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSuccess = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6840_12279)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M17.3333 10.6667V13.602C17.3333 14.6454 16.488 15.4907 15.4447 15.4907H12.2967L9.14867 18.0094V15.4907H7.88867C6.84533 15.4907 6 14.6454 6 13.602V8.56469C6 7.52136 6.84533 6.67603 7.88867 6.67603H13.3333"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M19.3271 7.664C19.3271 9.32067 17.9845 10.664 16.3278 10.664C14.7058 10.6647 13.3265 9.28534 13.3271 7.66334C13.3278 6.00667 14.6705 4.664 16.3271 4.664C17.9838 4.664 19.3271 6.00733 19.3271 7.664Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="white"
          d="M15.2002 7.83335L16.0003 8.66669L17.5335 6.83335"
        />
      </g>
      <defs>
        <clipPath id="clip0_6840_12279">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSuccess);
const Memo = memo(ForwardRef);
export default Memo;
