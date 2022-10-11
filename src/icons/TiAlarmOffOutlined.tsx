// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlarmOffOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={14}
      height={15}
      fill="none"
      viewBox="0 0 14 15"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_10192_34822)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M12.25 13.333L1.75 2.83301"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M3.70001 4.78247C2.40676 6.07747 1.94534 8.07072 2.68909 9.86622C3.67551 12.2474 6.40493 13.3779 8.78551 12.3915C9.37001 12.1494 9.87809 11.8011 10.2993 11.38"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M11.2497 9.99672C11.7601 8.86389 11.8243 7.5333 11.3109 6.29489C10.3245 3.91372 7.59509 2.78322 5.2145 3.76964C5.16959 3.7883 5.12759 3.81164 5.08325 3.83205"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M5.83325 1.6665H8.16659"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M11.6668 3.4165L10.3018 4.7815"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.05}
          fill="none"
          stroke="currentColor"
          d="M11.0833 2.83301L12.2499 3.99967"
        />
      </g>
      <defs>
        <clipPath id="clip0_10192_34822">
          <rect width={14} height={14} transform="translate(0 0.5)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlarmOffOutlined);
const Memo = memo(ForwardRef);
export default Memo;
