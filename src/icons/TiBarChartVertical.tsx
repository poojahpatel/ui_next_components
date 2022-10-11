// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBarChartVertical = (props: SvgIconProps) => {
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
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M12 9.66667V3"
      />
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M8 13.6667V3"
      />
      <path
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M4 7V3"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBarChartVertical);
const Memo = memo(ForwardRef);
export default Memo;
