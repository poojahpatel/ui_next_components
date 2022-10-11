// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatAltOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9963_44682)">
        <g clipPath="url(#clip1_9963_44682)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="currentColor"
            d="M13.3333 6.6667V9.60202C13.3333 10.6454 12.488 11.4907 11.4447 11.4907H8.29667L5.14867 14.0094V11.4907H3.88867C2.84533 11.4907 2 10.6454 2 9.60202V4.56469C2 3.52136 2.84533 2.67603 3.88867 2.67603H9.33333"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="currentColor"
            d="M11.4446 11.4907C12.488 11.4907 13.3333 10.6454 13.3333 9.60203V4.56469C13.3333 3.52136 12.488 2.67603 11.4446 2.67603H5.99998"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="currentColor"
            d="M4.33331 5.33331H6.33331"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            fill="none"
            stroke="currentColor"
            d="M4.33331 7H7.66665"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_9963_44682">
          <rect width={16} height={16} fill="none" />
        </clipPath>
        <clipPath id="clip1_9963_44682">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
