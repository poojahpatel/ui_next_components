// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRepeatOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_12803_73415)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M7.17871 1.979L3.17871 5.979L7.17871 9.979"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M21.1787 11.979V9.979C21.1787 8.91814 20.7573 7.90072 20.0071 7.15058C19.257 6.40043 18.2396 5.979 17.1787 5.979H3.17871"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M17.1787 23.979L21.1787 19.979L17.1787 15.979"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M3.17871 13.979V15.979C3.17871 17.0399 3.60014 18.0573 4.35028 18.8074C5.10043 19.5576 6.11784 19.979 7.17871 19.979H21.1787"
        />
      </g>
      <defs>
        <clipPath id="clip0_12803_73415">
          <rect width={24} height={24} transform="matrix(-1 0 0 1 24.1787 0.979004)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRepeatOutlined);
const Memo = memo(ForwardRef);
export default Memo;
