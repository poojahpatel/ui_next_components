// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAddBox = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={22}
      height={22}
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={22} height={22} rx={5} fill="currentColor7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} fill="none" stroke="white" d="M11 6V16" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} fill="none" stroke="white" d="M16 11H6" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAddBox);
const Memo = memo(ForwardRef);
export default Memo;
