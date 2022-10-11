// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRefreshRateOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13368_86437)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.94252 10.4763L2.78452 11.6343C1.74427 9.1758 2.22127 6.2283 4.22527 4.22505C6.65977 1.79055 10.4885 1.6083 13.1368 3.6693"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.86328 14.3302C7.51303 16.3905 11.341 16.2097 13.7748 13.7745C15.778 11.7712 16.2558 8.82373 15.2155 6.36523L14.0575 7.52323"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.42383 10.5758L10.5738 7.42578"
        />
        <circle cx={10.5} cy={10.5} r={0.75} strokeWidth={0.5} fill="none" stroke="currentColor" />
        <circle cx={7.5} cy={7.5} r={0.75} strokeWidth={0.5} fill="none" stroke="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_13368_86437">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRefreshRateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
