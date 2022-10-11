// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWalletCardOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={55}
      fill="none"
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect
        width={44}
        height={30.6667}
        x={6}
        y={19.946}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        rx={3.78}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M49.2278 39.6605H36.3511C33.4163 39.6605 31.0371 37.3721 31.0371 34.5493C31.0371 31.7266 33.4163 29.4382 36.3511 29.4382H49.2278"
      />
      <ellipse
        cx={36.6084}
        cy={34.4401}
        stroke="#0FA290"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        rx={1.91304}
        ry={1.84}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M9.84766 19.9461L34.1477 6.69815C35.899 5.74337 38.0908 6.31369 39.1546 8.00097L46.6858 19.9461"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M39.5013 9L18.4883 19.9461"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M42.4999 13.5L29.8301 19.9461"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWalletCardOutlined);
const Memo = memo(ForwardRef);
export default Memo;
