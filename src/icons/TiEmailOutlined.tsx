// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiEmailOutlined = (props: SvgIconProps) => {
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
        d="M13.5 4H4.5C3.11929 4 2 5.11929 2 6.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V6.5C16 5.11929 14.8807 4 13.5 4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.625 6.53999L7.92919 9.0962C8.55973 9.584 9.44027 9.584 10.0708 9.0962L13.375 6.53999"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiEmailOutlined);
const Memo = memo(ForwardRef);
export default Memo;
