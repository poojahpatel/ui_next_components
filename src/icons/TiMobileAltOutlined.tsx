// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMobileAltOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7 12.8125H8.96"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M7 1.875H8.96"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5 1H11C12.105 1 13 1.78312 13 2.75V13.25C13 14.2169 12.105 15 11 15H5C3.895 15 3 14.2169 3 13.25V2.75C3 1.78312 3.895 1 5 1Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMobileAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
