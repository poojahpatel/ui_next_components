// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCertificateOutlined = (props: SvgIconProps) => {
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
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M8 8C8 6.34315 9.34315 5 11 5H37C38.6569 5 40 6.34315 40 8V42C40 43.6569 38.6569 45 37 45H11C9.34315 45 8 43.6569 8 42V8Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M13.6484 17.381L33.7792 17.2727"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M13.334 12.2727H18.6673"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M13.6484 23.0952H33.6176"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M13.6484 28.8096H30.8267"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M13.7129 35.3367H26.8912"
      />
      <path fillRule="evenodd" d="M32 41.5L28 49L32.5 48.5L34 52.5L38 45" clipRule="evenodd" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M32 41.5L28 49L32.5 48.5L34 52.5L38 45"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M44 41.5L48 49L43.5 48.5L42 52.5L38 45"
      />
      <circle
        cx={38}
        cy={38.5}
        r={6.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCertificateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
