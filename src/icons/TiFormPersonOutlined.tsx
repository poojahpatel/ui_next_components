// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFormPersonOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_80884)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.8105 4.81049L11.6895 2.68949C11.4083 2.40824 11.0265 2.24999 10.629 2.24999H5.25C4.42125 2.24999 3.75 2.92124 3.75 3.74999V14.25C3.75 15.0787 4.42125 15.75 5.25 15.75H12.75C13.5788 15.75 14.25 15.0787 14.25 14.25V5.87099C14.25 5.47349 14.0917 5.09174 13.8105 4.81049V4.81049Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.25 5.99999H11.25C10.836 5.99999 10.5 5.66399 10.5 5.24999V2.24999"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.3965 13.5C11.2803 13.2075 11.0995 12.9442 10.8685 12.7305C10.477 12.3682 9.964 12.1665 9.43075 12.1665H8.56975C8.0365 12.1665 7.52275 12.3682 7.132 12.7305C6.90025 12.9442 6.72025 13.2075 6.604 13.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.86179 8.30174C10.3377 8.77769 10.3377 9.54937 9.86179 10.0253C9.38584 10.5013 8.61416 10.5013 8.13821 10.0253C7.66226 9.54937 7.66226 8.77769 8.13821 8.30174C8.61417 7.82579 9.38584 7.82579 9.86179 8.30174Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_80884">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFormPersonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
