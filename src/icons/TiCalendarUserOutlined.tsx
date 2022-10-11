// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarUserOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_87559)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12 2.25V3.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.25 2.25V3.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M2.25 6.75H15"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15 7.5V5.25C15 4.00725 13.9927 3 12.75 3H4.5C3.25725 3 2.25 4.00725 2.25 5.25V12C2.25 13.2427 3.25725 14.25 4.5 14.25H6.75"
        />
        <path
          strokeLinecap="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M16.5 16.5C16.5 15.8529 15.7268 13.6088 12.7501 13.6088C9.77348 13.6088 9 15.8529 9 16.5"
        />
        <path
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.7871 9C13.9232 9 14.8443 10.0013 14.8443 11.2364C14.8443 12.4715 13.9232 13.4727 12.7871 13.4727C11.651 13.4727 10.73 12.4715 10.73 11.2364C10.73 10.0013 11.651 9 12.7871 9Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_87559">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarUserOutlined);
const Memo = memo(ForwardRef);
export default Memo;
