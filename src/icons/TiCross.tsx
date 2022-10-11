// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCross = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={54}
      height={54}
      fill="none"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={27} cy={27.0001} r={22.5} fill="currentColor" />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="white" d="M19.501 19.4998L34.501 34.4998" />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="white" d="M19.501 34.4998L34.501 19.4998" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCross);
const Memo = memo(ForwardRef);
export default Memo;
