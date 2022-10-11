// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRefreshOffOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_10153_32247)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.9998 2.63477V6.45295H11.1816"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M1 12.8167V8.99854H4.81818"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M2.59727 5.81668C2.92002 4.90463 3.46854 4.08921 4.19166 3.44649C4.91478 2.80377 5.78893 2.35471 6.73255 2.1412C7.67616 1.9277 8.65848 1.95671 9.58785 2.22553C10.5172 2.49435 11.3633 2.99422 12.0473 3.67849L15 6.45304M1 8.99849L3.95273 11.773C4.63666 12.4573 5.48278 12.9572 6.41215 13.226C7.34152 13.4948 8.32384 13.5238 9.26745 13.3103C10.2111 13.0968 11.0852 12.6478 11.8083 12.005C12.5315 11.3623 13.08 10.5469 13.4027 9.63486"
        />
        <path strokeLinecap="round" strokeWidth={1.2} fill="none" d="M2.8457 1.07056L14 14.5" />
        <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M3 2.5L13 14.5" />
      </g>
      <defs>
        <clipPath id="clip0_10153_32247">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRefreshOffOutlined);
const Memo = memo(ForwardRef);
export default Memo;
