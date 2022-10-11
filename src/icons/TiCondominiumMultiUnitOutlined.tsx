// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCondominiumMultiUnitOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M4.72786 2.61275C5.10263 2.26441 5.6799 2.25515 6.06565 2.59129L8.31393 4.55045C8.74981 4.93028 9 5.48014 9 6.05829V16H4C2.89543 16 2 15.1046 2 14V6.01984C2 5.46405 2.23128 4.93332 2.63837 4.55493L4.72786 2.61275Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 7.5H6.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 9.95459H6.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 12.4092H6.5" />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.0001 7C15.1046 7 16 7.8954 16.0001 8.99995L16.0002 13.9998C16.0002 15.1044 15.1048 15.9999 14.0002 15.9999H9.00024L9.00005 9.00005C9.00002 7.89546 9.89546 7 11.0001 7H14.0001Z"
        clipRule="evenodd"
      />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.2} d="M11.5 9.95459H13.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11.5 12.4092H13.5" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCondominiumMultiUnitOutlined);
const Memo = memo(ForwardRef);
export default Memo;
