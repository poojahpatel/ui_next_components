// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiImageOutlined = (props: SvgIconProps) => {
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
        d="M6.85508 5.19849C7.0364 5.3798 7.0364 5.67377 6.85508 5.85508C6.67377 6.0364 6.3798 6.0364 6.19849 5.85508C6.01717 5.67377 6.01717 5.3798 6.19849 5.19849C6.3798 5.01717 6.67377 5.01717 6.85508 5.19849Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.5 14C4.90983 14 2 11.0902 2 7.5C2 3.90983 4.90983 1 8.5 1C12.0902 1 15 3.90983 15 7.5C15 11.0902 12.0902 14 8.5 14Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.77734 10.3889L10.8778 7.28839C11.1595 7.006 11.6167 7.006 11.8991 7.28839L14.5294 9.91872"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.9193 13.5299L6.84449 9.45508C6.5621 9.17269 6.10494 9.17269 5.82327 9.45508L3.56055 11.7178"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiImageOutlined);
const Memo = memo(ForwardRef);
export default Memo;
