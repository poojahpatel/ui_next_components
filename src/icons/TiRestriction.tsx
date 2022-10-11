// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRestriction = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={44}
      height={44}
      fill="none"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <ellipse cx={25} cy={23} fill="#E7E9E9" rx={17} ry={18} />
      <circle cx={22} cy={22} r={20} strokeWidth={3} fill="none" stroke="currentColor" />
      <path strokeWidth={3} fill="none" stroke="currentColor" d="M8 37L36 7" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRestriction);
const Memo = memo(ForwardRef);
export default Memo;
