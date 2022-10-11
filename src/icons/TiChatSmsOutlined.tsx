// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSmsOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2 5C2 3.34315 3.34315 2 5 2H13C14.6569 2 16 3.34315 16 5V10C16 11.6569 14.6569 12.7 13 12.7H9.95116C9.33847 12.7 8.74712 12.925 8.28939 13.3322L6.3254 15.0796C6.00106 15.3576 5.5 15.1272 5.5 14.7V13.2C5.5 12.9239 5.27614 12.7 5 12.7V12.7C3.34315 12.7 2 11.6569 2 10V5Z"
      />
      <circle cx={6} cy={7.5} r={1} fill="currentColor" />
      <circle cx={9} cy={7.5} r={1} fill="currentColor" />
      <circle cx={12} cy={7.5} r={1} fill="currentColor" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSmsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
