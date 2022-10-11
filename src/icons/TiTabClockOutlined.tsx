// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTabClockOutlined = (props: SvgIconProps) => {
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
        d="M14 6.66667V4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V10.8333C2 12.214 3.11929 13.3333 4.5 13.3333H6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11 14C9.3434 14 8 12.6566 8 11C8 9.3434 9.3434 8 11 8C12.6572 8 14 9.3434 14 11C14 12.6566 12.6572 14 11 14Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.9277 9.9884V11.1602L11.8493 11.7224"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTabClockOutlined);
const Memo = memo(ForwardRef);
export default Memo;
