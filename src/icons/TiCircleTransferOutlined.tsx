// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleTransferOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_7988_3311)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.99856 14.5C4.40983 14.5 1.5 11.5902 1.5 8.00144V7.99856C1.5 4.40983 4.40983 1.5 7.99856 1.5H8.00144C11.5902 1.5 14.5 4.40983 14.5 7.99856C14.5 11.5894 11.5894 14.5 7.99856 14.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.964 7.63888L10.8807 6.55554L9.79736 7.63888"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.02783 8.36127L5.11117 9.4446L6.1945 8.36127"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.11133 9.4446V6.55571C5.11133 5.75766 5.75772 5.11127 6.55577 5.11127H8.72244"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.881 6.55554V9.44443C10.881 10.2389 10.231 10.8889 9.43655 10.8889H7.27783"
        />
      </g>
      <defs>
        <clipPath id="clip0_7988_3311">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleTransferOutlined);
const Memo = memo(ForwardRef);
export default Memo;
