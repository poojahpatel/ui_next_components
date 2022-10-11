// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChevronDownBoxOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={27} height={27} x={0.5} y={0.5} rx={5.5} fill="none" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M10 12L14 15.9953L18 12"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChevronDownBoxOutlined);
const Memo = memo(ForwardRef);
export default Memo;
