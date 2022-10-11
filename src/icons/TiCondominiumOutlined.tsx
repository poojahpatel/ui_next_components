// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCondominiumOutlined = (props: SvgIconProps) => {
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
        fill="none"
        stroke="currentColor"
        d="M4.72786 2.61275C5.10263 2.26441 5.6799 2.25515 6.06565 2.59129L8.31393 4.55045C8.74981 4.93028 9 5.48014 9 6.05829V16H4C2.89543 16 2 15.1046 2 14V6.01984C2 5.46405 2.23128 4.93332 2.63837 4.55493L4.72786 2.61275Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 7.5H6.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 9.95447H6.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.5 12.4091H6.5" />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.7279 2.61275C12.1026 2.26441 12.6799 2.25515 13.0656 2.59129L15.3139 4.55045C15.7498 4.93028 16 5.48014 16 6.05829V14C16 15.1046 15.1046 16 14 16H9V6.01984C9 5.46405 9.23128 4.93332 9.63837 4.55493L11.7279 2.61275Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11.5 7.5H13.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11.5 9.95447H13.5" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11.5 12.4091H13.5" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCondominiumOutlined);
const Memo = memo(ForwardRef);
export default Memo;
