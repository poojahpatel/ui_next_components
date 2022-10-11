// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckboxOutlined = (props: SvgIconProps) => {
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
      <rect width={14.5} height={14.5} x={0.75} y={0.75} strokeWidth={1.5} rx={3.25} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8.28228L6.50555 11L12 5" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckboxOutlined);
const Memo = memo(ForwardRef);
export default Memo;
