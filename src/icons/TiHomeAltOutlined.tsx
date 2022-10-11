// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeAltOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_83864)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          d="M6.71422 16.5V12.6429C6.71422 11.4592 7.67335 10.5001 8.85705 10.5001C10.0407 10.5001 10.9999 11.4592 10.9999 12.6429V16.5H14.7141C15.2664 16.5 15.7141 16.0523 15.7141 15.5V10.0139C15.7141 8.95304 15.2927 7.93562 14.5425 7.18548L10.2713 2.91421C9.49021 2.13317 8.22388 2.13317 7.44283 2.91421L3.17157 7.18547C2.42143 7.93562 2 8.95304 2 10.0139V15.5C2 16.0523 2.44772 16.5 3 16.5H6.71422Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_83864">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
