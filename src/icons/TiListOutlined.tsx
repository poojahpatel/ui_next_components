// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiListOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M5.33325 4.5H13.9999" />
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M5.33325 8.5H13.9999" />
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M5.33325 12.5H13.9999" />
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M2 4.5H2.00583" />
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M2 8.5H2.00583" />
      <path strokeLinecap="round" strokeWidth={1.48571} fill="none" stroke="currentColor" d="M2 12.5H2.00583" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiListOutlined);
const Memo = memo(ForwardRef);
export default Memo;
