// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={28.7931} height={28.7931} x={0.821289} y={0.758789} rx={14.3966} fill="#018370" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.30345}
        fill="none"
        stroke="white"
        d="M21.1071 10.5747L12.0464 19.6445L9.32812 16.9263"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckAlt);
const Memo = memo(ForwardRef);
export default Memo;
