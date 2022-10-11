// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTargetOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={55}
      fill="none"
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle
        cx={25.4688}
        cy={30.2916}
        r={19.4688}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
      />
      <circle
        cx={25.4686}
        cy={30.2914}
        r={13.4784}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
      />
      <circle
        cx={25.4682}
        cy={30.2914}
        r={5.2416}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M25.4688 30.8946L41.668 15.0618V9.45004L45.4288 6V10.8227L50.9279 11.2713L46.7056 15.7253L41.668 15.0618"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTargetOutlined);
const Memo = memo(ForwardRef);
export default Memo;
