// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFarmOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2 7.99978L4.5 3.5L8.4453 0.8698C8.7812 0.645867 9.2188 0.645867 9.5547 0.8698L13.5 3.5L16 7.99978"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.00049 6.50003V14C3.00049 15.1045 3.89592 16 5.00049 16H13C14.1046 16 15 15.1045 15 14V6.5"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.5 16L6.5 12.5C6.5 11.8125 7.19609 11.2556 8.05551 11.2556H9.94449C10.8039 11.2556 11.5 11.8125 11.5 12.5V16"
      />
      <path strokeLinecap="round" d="M7 12L11.5 15.5" />
      <path strokeLinecap="round" d="M11 12L6.5 15.5" />
      <rect width={6} height={3} x={6} y={6} strokeLinecap="round" rx={1} />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFarmOutlined);
const Memo = memo(ForwardRef);
export default Memo;
