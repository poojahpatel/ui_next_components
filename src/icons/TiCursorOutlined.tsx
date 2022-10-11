// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCursorOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_8154_1349)">
        <circle cx={4.66667} cy={5.66667} r={0.666667} fill="currentColor" />
        <circle cx={8.00016} cy={5.66667} r={0.666667} fill="currentColor" />
        <circle cx={11.3332} cy={5.66667} r={0.666667} fill="currentColor" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.71552 14.1927L8.05219 8.87935C7.87686 8.31869 8.45086 7.81669 8.98286 8.06535L13.9435 10.3807C14.5315 10.6554 14.4322 11.52 13.7975 11.654L11.7555 12.086L10.9975 14.2167C10.7802 14.8287 9.90952 14.812 9.71552 14.1927Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14 8.00667V3.32667C14 2.594 13.4033 2 12.6667 2H3.33333C2.59667 2 2 2.594 2 3.32667V8.00733C2 8.73933 2.59667 9.33333 3.33333 9.33333H6"
        />
      </g>
      <defs>
        <clipPath id="clip0_8154_1349">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCursorOutlined);
const Memo = memo(ForwardRef);
export default Memo;
