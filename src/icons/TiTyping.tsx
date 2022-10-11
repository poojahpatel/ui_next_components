// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTyping = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={46}
      height={40}
      fill="none"
      viewBox="0 0 46 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M0 10C0 4.47715 4.47715 0 10 0H36C41.5228 0 46 4.47715 46 10V30C46 35.5228 41.5228 40 36 40H0V10Z" />
      <circle cx={13} cy={20} r={3} fill="none" />
      <circle cx={23} cy={20} r={3} fill="none" />
      <circle cx={33} cy={20} r={3} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTyping);
const Memo = memo(ForwardRef);
export default Memo;
