// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_13459_87081)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M18.667 2.33252V6.99919"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M9.33301 2.33252V6.99919"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M3.5 10.4998H24.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M22.1667 4.66528H5.83333C4.54417 4.66528 3.5 5.70945 3.5 6.99862V22.1653C3.5 23.4544 4.54417 24.4986 5.83333 24.4986H22.1667C23.4558 24.4986 24.5 23.4544 24.5 22.1653V6.99862C24.5 5.70945 23.4558 4.66528 22.1667 4.66528Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M8.16699 15.1653H19.8337"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M8.16699 19.8325H19.8337"
        />
      </g>
      <defs>
        <clipPath id="clip0_13459_87081">
          <rect width={28} height={28} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
