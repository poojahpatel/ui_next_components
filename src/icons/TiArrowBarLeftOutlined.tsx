// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiArrowBarLeftOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={13}
      height={12}
      fill="none"
      viewBox="0 0 13 12"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M7.3313 2.6687L4.00185 6.00203L7.3313 9.33537"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M4 6L11.5 6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M1 11L1 1"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiArrowBarLeftOutlined);
const Memo = memo(ForwardRef);
export default Memo;
