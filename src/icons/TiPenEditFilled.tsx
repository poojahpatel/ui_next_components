// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPenEditFilled = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={24} height={24} rx={5} fill="#018370" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.5555 16.4445H16.6667"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.3102 7.55337C13.5684 7.29519 13.9185 7.15015 14.2837 7.15015C14.4644 7.15015 14.6435 7.18576 14.8105 7.25495C14.9775 7.32413 15.1293 7.42553 15.2571 7.55337C15.3849 7.6812 15.4863 7.83296 15.5555 7.99999C15.6247 8.16701 15.6603 8.34603 15.6603 8.52681C15.6603 8.7076 15.6247 8.88661 15.5555 9.05364C15.4863 9.22066 15.3849 9.37242 15.2571 9.50026L9.70694 15.7955L7.11108 16.4444L7.76005 13.8486L13.3102 7.55337Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPenEditFilled);
const Memo = memo(ForwardRef);
export default Memo;
