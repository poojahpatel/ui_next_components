// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSearchAltOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M16.0002 15.9999L12.2668 12.2666"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M7.83334 2C11.0553 2 13.6667 4.61139 13.6667 7.83334C13.6667 11.0553 11.0553 13.6667 7.83334 13.6667C4.61139 13.6667 2 11.0553 2 7.83334C2 4.61139 4.61139 2 7.83334 2Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSearchAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
