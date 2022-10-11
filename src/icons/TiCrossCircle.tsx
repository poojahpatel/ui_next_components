// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCrossCircle = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={14}
      height={14}
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={7} cy={7} r={6.5625} strokeWidth={0.875} fill="currentColor" />
      <path strokeLinecap="round" strokeWidth={1.1375} fill="none" stroke="white" d="M4.75 4.75L9.25 9.25" />
      <path strokeLinecap="round" strokeWidth={1.1375} fill="none" stroke="white" d="M4.75 9.25L9.25 4.75" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCrossCircle);
const Memo = memo(ForwardRef);
export default Memo;
