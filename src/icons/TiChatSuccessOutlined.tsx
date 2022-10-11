// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSuccessOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6881_1002)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M20 10V14.403C20 15.968 18.732 17.236 17.167 17.236H12.445L7.723 21.014V17.236H5.833C4.268 17.236 3 15.968 3 14.403V6.84704C3 5.28204 4.268 4.01404 5.833 4.01404H14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M22.9902 5.49603C22.9902 7.98103 20.9762 9.99603 18.4912 9.99603C16.0582 9.99703 13.9892 7.92803 13.9902 5.49503C13.9912 3.01003 16.0052 0.996033 18.4902 0.996033C20.9752 0.996033 22.9902 3.01103 22.9902 5.49603Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          d="M16.7998 5.75L18 7L20.2998 4.25"
        />
      </g>
      <defs>
        <clipPath id="clip0_6881_1002">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSuccessOutlined);
const Memo = memo(ForwardRef);
export default Memo;
