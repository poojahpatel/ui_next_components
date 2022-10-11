// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBarChartAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M15 16.6667V8.33337"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M10 16.6667V3.33337"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M5 16.6666V11.6666"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBarChartAlt);
const Memo = memo(ForwardRef);
export default Memo;
