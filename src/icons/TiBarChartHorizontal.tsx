// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBarChartHorizontal = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M13.5 3.09924L2.5 3.09924"
      />
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M13.5 6.29944L2.5 6.29944"
      />
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M13.5 9.49963L2.5 9.49963"
      />
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M13.5 12.6998L2.5 12.6998"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBarChartHorizontal);
const Memo = memo(ForwardRef);
export default Memo;
