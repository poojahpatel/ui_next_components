// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13705_82023)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.75 7.5V6H5.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.75 10.5V12H5.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.75 6H14.25V7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.75 12H14.25V10.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15 14.25H3C2.17125 14.25 1.5 13.5788 1.5 12.75V5.25C1.5 4.42125 2.17125 3.75 3 3.75H15C15.8288 3.75 16.5 4.42125 16.5 5.25V12.75C16.5 13.5788 15.8288 14.25 15 14.25Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.3258 7.67417C11.0581 8.40641 11.0581 9.59359 10.3258 10.3258C9.59359 11.0581 8.40641 11.0581 7.67417 10.3258C6.94194 9.59359 6.94194 8.40641 7.67417 7.67417C8.40641 6.94194 9.59359 6.94194 10.3258 7.67417Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13705_82023">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyOutlined);
const Memo = memo(ForwardRef);
export default Memo;
