// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiScissorsOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.89638 5.34552C3.03919 4.85069 2.74554 3.75358 3.24037 2.89638C3.73519 2.03919 4.8323 1.74554 5.6895 2.24037C6.54669 2.73519 6.84034 3.8323 6.34552 4.6895C5.85069 5.54669 4.75358 5.84034 3.89638 5.34552"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.34552 10.555C5.85069 9.69776 4.75358 9.40411 3.89638 9.89894C3.03919 10.3938 2.74554 11.4909 3.24037 12.3481C3.73519 13.2053 4.8323 13.4989 5.6895 13.0041C6.54669 12.5093 6.84034 11.4134 6.34552 10.555"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.0011 4.64325L3.9043 9.90388"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.0011 10.6036L3.9043 5.34302"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiScissorsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
