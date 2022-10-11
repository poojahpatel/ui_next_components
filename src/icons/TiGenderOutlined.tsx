// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiGenderOutlined = (props: SvgIconProps) => {
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
        d="M11.4062 4.99201L14.0009 2.50024"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2 7.21427C2 5.47836 3.46509 4.07141 5.27273 4.07141C7.08036 4.07141 8.54545 5.47836 8.54545 7.21427C8.54545 8.95017 7.08036 10.3571 5.27273 10.3571C3.46509 10.3571 2 8.95017 2 7.21427Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.81836 7.21427C5.81836 5.47836 7.28345 4.07141 9.09109 4.07141C10.8987 4.07141 12.3638 5.47836 12.3638 7.21427C12.3638 8.95017 10.8987 10.3571 9.09109 10.3571C7.28345 10.3571 5.81836 8.95017 5.81836 7.21427Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.27344 10.3572V13.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.8184 2.5H14.0002V4.59524"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.18164 12.4524H6.36346"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiGenderOutlined);
const Memo = memo(ForwardRef);
export default Memo;
