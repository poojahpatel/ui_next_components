// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalcuatorOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={36}
      height={36}
      fill="none"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_13119_85127)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M25.599 31.5H10.401C8.799 31.5 7.5 30.201 7.5 28.599V7.40246C7.5 5.80046 8.799 4.50146 10.401 4.50146H25.5975C27.201 4.50146 28.5 5.80046 28.5 7.40246V28.5975C28.5 30.201 27.201 31.5 25.599 31.5V31.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M28.5 12H7.5"
        />
        <circle cx={13} cy={17} r={1} fill="currentColor" />
        <circle cx={13} cy={22} r={1} fill="currentColor" />
        <circle cx={13} cy={27} r={1} fill="currentColor" />
        <circle cx={18} cy={17} r={1} fill="currentColor" />
        <circle cx={18} cy={22} r={1} fill="currentColor" />
        <circle cx={18} cy={27} r={1} fill="currentColor" />
        <circle cx={23} cy={17} r={1} fill="currentColor" />
        <circle cx={23} cy={22} r={1} fill="currentColor" />
        <circle cx={23} cy={27} r={1} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_13119_85127">
          <rect width={36} height={36} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalcuatorOutlined);
const Memo = memo(ForwardRef);
export default Memo;
