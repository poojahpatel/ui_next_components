// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarCoinsOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13368_86388)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.25 1.5V3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.25 1.5V3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M2.25 6H14.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.25 7.5V4.5C14.25 3.25725 13.2427 2.25 12 2.25H4.5C3.25725 2.25 2.25 3.25725 2.25 4.5V10.5C2.25 11.7427 3.25725 12.75 4.5 12.75H6.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.875 15C12.4253 15 11.25 13.8247 11.25 12.375C11.25 10.9253 12.4253 9.75 13.875 9.75C15.3255 9.75 16.5 10.9253 16.5 12.375C16.5 13.8247 15.3255 15 13.875 15Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.4975 11.2637C10.1085 11.3312 9 12.4697 9 13.8752C9 15.3249 10.1753 16.5002 11.625 16.5002C12.6727 16.5002 13.5698 15.8822 13.9913 14.9942"
        />
      </g>
      <defs>
        <clipPath id="clip0_13368_86388">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarCoinsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
