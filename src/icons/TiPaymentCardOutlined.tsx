// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPaymentCardOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={26}
      height={19}
      fill="none"
      viewBox="0 0 26 19"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect
        width={24}
        height={17}
        x={1}
        y={1}
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        rx={1.71429}
      />
      <path strokeWidth={1.2} fill="none" stroke="currentColor" d="M1 5H25" />
      <path strokeWidth={1.2} fill="none" stroke="currentColor" d="M1 9H25" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4 15H8" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11 15H12" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPaymentCardOutlined);
const Memo = memo(ForwardRef);
export default Memo;
