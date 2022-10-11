// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckboxOnOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={12.8} height={12.8} x={2.6} y={2.6} strokeWidth={1.2} fill="none" stroke="currentColor" rx={2.775} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.5 9.24699L7.69236 11.625L12.5 6.375"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckboxOnOutlined);
const Memo = memo(ForwardRef);
export default Memo;
