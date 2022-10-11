// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailSendAltOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6778_15269)">
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
          stroke="currentColor"
          d="M21.9902 17.496C21.9902 19.981 19.9762 21.996 17.4912 21.996C15.0582 21.997 12.9892 19.928 12.9902 17.495C12.9912 15.01 15.0052 12.996 17.4902 12.996C19.9752 12.996 21.9902 15.011 21.9902 17.496Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M19.5 17.5833H15.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M18 15.75L19.4998 17.5833L18 19.25"
        />
      </g>
      <defs>
        <clipPath id="clip0_6778_15269">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailSendAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
