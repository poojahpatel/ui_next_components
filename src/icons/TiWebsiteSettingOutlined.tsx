// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWebsiteSettingOutlined = (props: SvgIconProps) => {
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
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.7502 12.6875L15.7502 4.8125C15.7502 3.12113 14.3791 1.75 12.6877 1.75L4.81275 1.75C3.12137 1.75 1.75025 3.12113 1.75024 4.8125L1.75024 12.6875C1.75024 14.3789 3.12137 15.75 4.81274 15.75L12.6877 15.75C14.3791 15.75 15.7502 14.3789 15.7502 12.6875Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 8.26318V9.00003"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 11.9475V12.6844"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.08423 9.36841L7.71939 9.73683"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.2808 11.2104L10.9159 11.5789"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.08423 11.5789L7.71939 11.2104"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.2808 9.73683L10.9159 9.36841"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.042 9.43185C10.6175 10.0073 10.6175 10.9402 10.042 11.5156C9.46653 12.0911 8.53369 12.0911 7.95822 11.5156C7.38274 10.9402 7.38274 10.0073 7.95822 9.43185C8.53369 8.85638 9.46653 8.85638 10.042 9.43185Z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.7502 5.78491L1.75025 5.78491"
      />
      <circle cx={4.27791} cy={3.889} r={0.583333} fill="currentColor" />
      <circle cx={6.22225} cy={3.889} r={0.583333} fill="currentColor" />
      <circle cx={8.16683} cy={3.889} r={0.583333} fill="currentColor" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWebsiteSettingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
