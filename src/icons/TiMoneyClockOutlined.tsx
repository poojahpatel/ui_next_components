// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyClockOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13701_81559)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8.2 12.32H3.5C2.11929 12.32 1 11.2007 1 9.82V4.5C1 3.11929 2.11929 2 3.5 2H13.7C15.0807 2 16.2 3.11929 16.2 4.5V7.6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.94311 5.97684C10.6847 6.71844 10.6847 7.92164 9.94311 8.66404C9.20151 9.40564 7.99831 9.40564 7.25591 8.66404C6.51431 7.92244 6.51431 6.71924 7.25591 5.97684C7.99831 5.23444 9.20151 5.23444 9.94311 5.97684"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.1999 10H3.3999"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.8 4.40002H13"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.8001 16.4C12.0329 16.4 10.6001 14.968 10.6001 13.2008C10.6001 11.4696 12.0721 9.9992 13.8033 10C15.5689 10.0016 17.0001 11.4336 17.0001 13.2C17.0001 14.9672 15.5681 16.4 13.8001 16.4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.76 13.2H13.48V11.92"
        />
      </g>
      <defs>
        <clipPath id="clip0_13701_81559">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyClockOutlined);
const Memo = memo(ForwardRef);
export default Memo;
