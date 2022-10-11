// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailAlertOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6778_15357)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M20 13.759V6.03302"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M13 18H5C3.343 18 2 16.657 2 15V6.03302"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#F74A46"
          d="M17.5498 17.5L17.5498 15.5"
        />
        <circle cx={17.5498} cy={19.25} r={0.75} fill="#F74A46" />
      </g>
      <defs>
        <clipPath id="clip0_6778_15357">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailAlertOutlined);
const Memo = memo(ForwardRef);
export default Memo;
