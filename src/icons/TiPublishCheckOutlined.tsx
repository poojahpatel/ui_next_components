// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPublishCheckOutlined = (props: SvgIconProps) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5H14" stroke="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.90039 4H4.00039" stroke="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 4H5.6" stroke="currentColor" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.09961 4H7.19961" stroke="currentColor" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 6.66667V4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V10.8333C2 12.214 3.11929 13.3333 4.5 13.3333H6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11 8C12.6567 8 14 9.34333 14 11C14 12.6567 12.6567 14 11 14C9.34333 14 8 12.6567 8 11C8 9.34333 9.34333 8 11 8Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.166 10.4167L10.7074 11.8754L9.83203 11"
        stroke="currentColor"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPublishCheckOutlined);
const Memo = memo(ForwardRef);
export default Memo;
