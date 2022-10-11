// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSendOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_12170_56837)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M19.25 10.954V15.357C19.25 16.922 17.982 18.19 16.417 18.19H11.695L6.973 21.968V18.19H5.083C3.518 18.19 2.25 16.922 2.25 15.357V7.80102C2.25 6.23602 3.518 4.96802 5.083 4.96802H13.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          fill="none"
          stroke="currentColor"
          d="M22.2383 6.4502C22.2383 8.9352 20.2243 10.9502 17.7393 10.9502C15.3063 10.9512 13.2373 8.8822 13.2383 6.4492C13.2393 3.9642 15.2533 1.9502 17.7383 1.9502C20.2233 1.9502 22.2383 3.9652 22.2383 6.4502Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          fill="none"
          stroke="currentColor"
          d="M19.75 6.5376H15.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          fill="none"
          stroke="currentColor"
          d="M18.25 4.70435L19.7498 6.53768L18.25 8.20435"
        />
      </g>
      <defs>
        <clipPath id="clip0_12170_56837">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSendOutlined);
const Memo = memo(ForwardRef);
export default Memo;
