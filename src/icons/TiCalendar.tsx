// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendar = (props: SvgIconProps) => {
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
      <rect width={24} height={24} rx={5} fill="currentColor" />
      <g clipPath="url(#clip0_9841_29244)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M14.6666 5.3335V8.00016"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M9.33337 5.3335V8.00016"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} fill="none" stroke="white" d="M6 10H18" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M16.6667 6.66699H7.33333C6.59667 6.66699 6 7.26366 6 8.00033V16.667C6 17.4037 6.59667 18.0003 7.33333 18.0003H16.6667C17.4033 18.0003 18 17.4037 18 16.667V8.00033C18 7.26366 17.4033 6.66699 16.6667 6.66699Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M8.66663 12.667H15.3333"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M8.66663 15.3335H15.3333"
        />
      </g>
      <defs>
        <clipPath id="clip0_9841_29244">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendar);
const Memo = memo(ForwardRef);
export default Memo;
