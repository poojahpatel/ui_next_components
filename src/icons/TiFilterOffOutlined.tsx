// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFilterOffOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_11619_46621)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z"
        />
        <path strokeWidth={1.5} fill="none" stroke="currentColor" d="M2 0.5L16.125 15.3366" />
        <path strokeWidth={1.3} fill="none" stroke="currentColor" d="M3 -0.5L17.625 14.8366" />
      </g>
      <defs>
        <clipPath id="clip0_11619_46621">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFilterOffOutlined);
const Memo = memo(ForwardRef);
export default Memo;
