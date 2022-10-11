// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTabAddOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M18 14.5L18 5.5C18 3.567 16.433 2 14.5 2L5.5 2C3.567 2 2 3.567 2 5.5L2 14.5C2 16.433 3.567 18 5.5 18L14.5 18C16.433 18 18 16.433 18 14.5Z"
      />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M18 7.5L2 7.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M8 12.5H12"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M10 14.5V10.5"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTabAddOutlined);
const Memo = memo(ForwardRef);
export default Memo;
