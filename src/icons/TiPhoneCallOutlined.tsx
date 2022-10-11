// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneCallOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_13509_82139)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M22.1263 19.3783L20.7578 18.0098C20.0741 17.3261 18.9658 17.3261 18.2833 18.0098L17.2076 19.0854C16.9673 19.3258 16.6033 19.4063 16.2929 19.2698C14.7343 18.5873 13.1943 17.5524 11.8211 16.1793C10.4538 14.8119 9.42244 13.2789 8.73877 11.7261C8.59644 11.4053 8.67927 11.0284 8.92777 10.7799L9.89144 9.81628C10.6743 9.03344 10.6743 7.92628 9.9906 7.24261L8.6221 5.87411C7.71094 4.96294 6.23394 4.96294 5.32277 5.87411L4.5621 6.63361C3.6976 7.49811 3.3371 8.74528 3.57044 9.98194C4.14677 13.0304 5.91777 16.3683 8.77494 19.2254C11.6321 22.0826 14.9699 23.8536 18.0184 24.4299C19.2551 24.6633 20.5023 24.3028 21.3668 23.4383L22.1263 22.6788C23.0374 21.7676 23.0374 20.2906 22.1263 19.3783V19.3783Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M15.167 8.15613C16.3698 8.1398 17.5785 8.58547 18.4967 9.50363"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M21.796 6.20434C19.9655 4.37384 17.5657 3.45801 15.167 3.45801"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M19.8446 12.8333C19.8609 11.6305 19.4152 10.4218 18.4971 9.50366"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M21.7959 6.20435C23.6264 8.03485 24.5422 10.4347 24.5422 12.8333"
        />
      </g>
      <defs>
        <clipPath id="clip0_13509_82139">
          <rect width={28} height={28} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneCallOutlined);
const Memo = memo(ForwardRef);
export default Memo;
