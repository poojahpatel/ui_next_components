// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleStarOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_8715_13568)">
        <circle
          cx={8}
          cy={8}
          r={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          d="M7.99954 5L8.97431 6.97476L11.1541 7.29338L9.57683 8.82965L9.94907 11L7.99954 9.97476L6.05002 11L6.42226 8.82965L4.84497 7.29338L7.02478 6.97476L7.99954 5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_8715_13568">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleStarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
