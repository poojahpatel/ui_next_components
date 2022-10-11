// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMarriedOutlined = (props: SvgIconProps) => {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.98633 2.18425V1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.23249 6.45313L6.39433 6.15313C6.53171 5.89654 6.79935 5.73706 7.08988 5.73706H10.8834C11.174 5.73706 11.4408 5.89654 11.579 6.15234L11.7408 6.45235C11.9145 6.77604 11.8427 7.1771 11.5663 7.41948L9.50811 9.22664C9.21047 9.48796 8.76441 9.48796 8.46598 9.22664L6.40775 7.41948C6.13143 7.17789 6.0588 6.77683 6.23249 6.45313V6.45313Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.7236 4.15778L14.5131 3.36829"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.24946 4.15778L3.45996 3.36829"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.21048 8.12445C5.60306 8.89184 4.55855 10.6485 4.90988 12.6167C5.19962 14.236 6.4794 15.5686 8.08919 15.9057C10.7703 16.4679 13.1309 14.4373 13.1309 11.8548C13.1309 10.204 12.159 8.79078 10.7624 8.12366"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMarriedOutlined);
const Memo = memo(ForwardRef);
export default Memo;
