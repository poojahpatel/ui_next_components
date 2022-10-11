// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPackageOutlined = (props: SvgIconProps) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.375 7.04997L5.625 3.15747"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.75 12V6.00005C15.7497 5.737 15.6803 5.47866 15.5487 5.25092C15.417 5.02319 15.2278 4.83407 15 4.70255L9.75 1.70255C9.52197 1.5709 9.2633 1.50159 9 1.50159C8.7367 1.50159 8.47803 1.5709 8.25 1.70255L3 4.70255C2.7722 4.83407 2.58299 5.02319 2.45135 5.25092C2.31971 5.47866 2.25027 5.737 2.25 6.00005V12C2.25027 12.2631 2.31971 12.5214 2.45135 12.7492C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4292 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4292 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7492C15.6803 12.5214 15.7497 12.2631 15.75 12Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.45264 5.21997L9.00014 9.00747L15.5476 5.21997"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 16.56V9"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPackageOutlined);
const Memo = memo(ForwardRef);
export default Memo;
