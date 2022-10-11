// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCrossOutlined = (props: SvgIconProps) => {
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
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M2 2L14 14" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M2 14L14 2" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCrossOutlined);
const Memo = memo(ForwardRef);
export default Memo;
