// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailCrossOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6778_15332)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#081D13"
          d="M20 13.759V6.03302"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#081D13"
          d="M13 18H5C3.343 18 2 16.657 2 15V6.03302"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#081D13"
          d="M9.136 11.018L3.085 7.831C2.418 7.479 2 6.787 2 6.033V6C2 4.895 2.895 4 4 4H17.967C19.09 4 20 4.91 20 6.033V6.053C20 6.795 19.589 7.477 18.932 7.823L12.864 11.019C11.697 11.633 10.303 11.633 9.136 11.018Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#F74A46"
          d="M22 17.5C22 19.985 19.986 22 17.501 22C15.068 22.001 12.999 19.932 13 17.499C13.001 15.014 15.015 13 17.5 13C19.985 13 22 15.015 22 17.5Z"
        />
        <path
          fillRule="evenodd"
          d="M19.419 19.4194C19.1261 19.7123 18.6512 19.7123 18.3583 19.4194L15.5299 16.591C15.237 16.2981 15.237 15.8232 15.5299 15.5304C15.8228 15.2375 16.2977 15.2375 16.5906 15.5304L19.419 18.3588C19.7119 18.6517 19.7119 19.1265 19.419 19.4194Z"
          clipRule="evenodd"
          fill="#F74A46"
        />
        <path
          fillRule="evenodd"
          d="M15.5303 19.4194C15.2374 19.1265 15.2374 18.6517 15.5303 18.3588L18.3588 15.5303C18.6517 15.2374 19.1265 15.2374 19.4194 15.5303C19.7123 15.8232 19.7123 16.2981 19.4194 16.591L16.591 19.4194C16.2981 19.7123 15.8232 19.7123 15.5303 19.4194Z"
          clipRule="evenodd"
          fill="#F74A46"
        />
      </g>
      <defs>
        <clipPath id="clip0_6778_15332">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailCrossOutlined);
const Memo = memo(ForwardRef);
export default Memo;
