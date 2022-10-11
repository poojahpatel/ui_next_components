// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoreCircleOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_7148_895)">
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
        <circle cx={5} cy={8} r={1} fill="none" />
        <circle cx={8} cy={8} r={1} fill="none" />
        <circle cx={11} cy={8} r={1} fill="none" />
      </g>
      <defs>
        <clipPath id="clip0_7148_895">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoreCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
