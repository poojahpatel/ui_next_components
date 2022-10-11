// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatMessage = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6840_12265)">
        <g clipPath="url(#clip1_6840_12265)">
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
            d="M15.4443 15.4907C16.4877 15.4907 17.333 14.6454 17.333 13.602V8.56469C17.333 7.52136 16.4877 6.67603 15.4443 6.67603H9.99967"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="white"
            d="M8.33301 9.33331H10.333"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="white"
            d="M8.33301 11H11.6663"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6840_12265">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
        <clipPath id="clip1_6840_12265">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatMessage);
const Memo = memo(ForwardRef);
export default Memo;
