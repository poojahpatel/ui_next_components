// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M17.9993 5.33325H5.99935C4.1584 5.33325 2.66602 6.82564 2.66602 8.66659V16.6666C2.66602 18.5075 4.1584 19.9999 5.99935 19.9999H17.9993C19.8403 19.9999 21.3327 18.5075 21.3327 16.6666V8.66659C21.3327 6.82564 19.8403 5.33325 17.9993 5.33325Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        fill="none"
        stroke="currentColor"
        d="M6.16602 8.71997L10.5716 12.1282C11.4123 12.7787 12.5864 12.7787 13.4271 12.1282L17.8327 8.71997"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailAlt);
const Memo = memo(ForwardRef);
export default Memo;
