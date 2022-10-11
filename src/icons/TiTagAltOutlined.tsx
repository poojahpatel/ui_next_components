// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTagAltOutlined = (props: SvgIconProps) => {
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
      <path d="M2.57195 9.21241L2.16498 9.65329L2.57195 9.21241ZM9.4478 13.2367L9.87206 13.6609L9.4478 13.2367ZM3.33333 3.04446H7.02362V1.84446H3.33333V3.04446ZM7.85643 3.38942L12.3187 7.85164L13.1672 7.00312L8.70496 2.54089L7.85643 3.38942ZM12.3187 9.51727L9.02354 12.8124L9.87206 13.6609L13.1672 10.3658L12.3187 9.51727ZM7.39186 12.845L2.97891 8.77153L2.16498 9.65329L6.57792 13.7268L7.39186 12.845ZM2.6 7.90609V3.77779H1.4V7.90609H2.6ZM2.97891 8.77153C2.73737 8.54856 2.6 8.23481 2.6 7.90609H1.4C1.4 8.56972 1.67734 9.20316 2.16498 9.65329L2.97891 8.77153ZM9.02354 12.8124C8.57653 13.2594 7.85637 13.2738 7.39186 12.845L6.57792 13.7268C7.51571 14.5924 8.96963 14.5634 9.87206 13.6609L9.02354 12.8124ZM12.3187 7.85164C12.7786 8.31159 12.7786 9.05732 12.3187 9.51727L13.1672 10.3658C14.0958 9.43722 14.0958 7.9317 13.1672 7.00312L12.3187 7.85164ZM7.02362 3.04446C7.33599 3.04446 7.63556 3.16855 7.85643 3.38942L8.70496 2.54089C8.25904 2.09497 7.65425 1.84446 7.02362 1.84446V3.04446ZM3.33333 1.84446C2.26558 1.84446 1.4 2.71004 1.4 3.77779H2.6C2.6 3.37278 2.92832 3.04446 3.33333 3.04446V1.84446Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.00446 5.44968H5.01154"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTagAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
