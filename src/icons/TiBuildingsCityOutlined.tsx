// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBuildingsCityOutlined = (props: SvgIconProps) => {
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
        d="M10.954 13.6364V3.59091C10.954 3.26473 10.6893 3 10.3631 3H5.63583C5.30965 3 5.04492 3.26473 5.04492 3.59091V13.6364"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.04439 6.54547H2.68075C2.35457 6.54547 2.08984 6.8102 2.08984 7.13638V13.6364"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.9077 13.6364V7.13638C13.9077 6.8102 13.6429 6.54547 13.3168 6.54547H10.9531"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7 8.25903H9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.5 11.259H10.5003"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7 5.59998H9"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 13.9217H1.5" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBuildingsCityOutlined);
const Memo = memo(ForwardRef);
export default Memo;
