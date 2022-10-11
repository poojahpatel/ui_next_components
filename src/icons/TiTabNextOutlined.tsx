// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTabNextOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_11753_51076)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M15.4017 9.34835C16.8661 10.8128 16.8661 13.1872 15.4017 14.6517C13.9372 16.1161 11.5628 16.1161 10.0983 14.6517C8.63388 13.1872 8.63388 10.8128 10.0983 9.34835C11.5628 7.88388 13.9372 7.88388 15.4017 9.34835"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M1.5 6H14.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M14.25 8.56275V3.75C14.25 2.92125 13.5788 2.25 12.75 2.25H3C2.17125 2.25 1.5 2.92125 1.5 3.75V12C1.5 12.8288 2.17125 13.5 3 13.5H9.3135"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M12.2775 13.3275L13.5975 12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M13.5975 11.9999L12.2775 10.6724"
        />
      </g>
      <defs>
        <clipPath id="clip0_11753_51076">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTabNextOutlined);
const Memo = memo(ForwardRef);
export default Memo;
