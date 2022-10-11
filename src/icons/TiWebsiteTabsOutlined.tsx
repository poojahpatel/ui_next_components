// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWebsiteTabsOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_11753_51043)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M4.5 4.5H13.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M6 2.25H12"
        />
        <circle cx={8.16748} cy={8.66211} r={0.5625} fill="currentColor" />
        <circle cx={6.33746} cy={8.66211} r={0.5625} fill="currentColor" />
        <circle cx={4.3125} cy={8.66211} r={0.5625} fill="currentColor" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.125}
          fill="none"
          stroke="currentColor"
          d="M2.28455 10.5H15.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.12785}
          fill="none"
          stroke="currentColor"
          d="M14.2425 15.75H3.7575C2.925 15.75 2.25 15.0788 2.25 14.25V8.25C2.25 7.42125 2.925 6.75 3.7575 6.75H14.2425C15.075 6.75 15.75 7.42125 15.75 8.25V14.25C15.75 15.0788 15.0742 15.75 14.2425 15.75V15.75Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_11753_51043">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWebsiteTabsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
