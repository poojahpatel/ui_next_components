// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlertOctagonAltOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_7925_1772)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M5.23967 1.33331H10.7597L14.6663 5.23998V10.76L10.7597 14.6666H5.23967L1.33301 10.76V5.23998L5.23967 1.33331Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M8 5.33331V7.99998"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M8 10.6667H8.00632"
        />
      </g>
      <defs>
        <clipPath id="clip0_7925_1772">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlertOctagonAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
