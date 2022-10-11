// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFileTransferOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6764_6026)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.5045 9.00225L12.75 11.2508L10.5 13.5023"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.75 11.25H3.75C2.92125 11.25 2.25 10.5788 2.25 9.75V3.75C2.25 2.92125 2.92125 2.25 3.75 2.25H9.75C10.5788 2.25 11.25 2.92125 11.25 3.75V6.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.25 15.75H8.25C7.42125 15.75 6.75 15.0788 6.75 14.25V8.25C6.75 7.42125 7.42125 6.75 8.25 6.75H14.25C15.0788 6.75 15.75 7.42125 15.75 8.25V14.25C15.75 15.0788 15.0788 15.75 14.25 15.75Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.75 11.25H12.75"
        />
      </g>
      <defs>
        <clipPath id="clip0_6764_6026">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFileTransferOutlined);
const Memo = memo(ForwardRef);
export default Memo;
