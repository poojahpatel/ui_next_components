// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFileCopyAltOutlined = (props: SvgIconProps) => {
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
      <path d="M9.15 3.8C9.15 4.15899 9.44102 4.45 9.8 4.45C10.159 4.45 10.45 4.15899 10.45 3.8H9.15ZM3.8 10.45C4.15899 10.45 4.45 10.159 4.45 9.8C4.45 9.44102 4.15899 9.15 3.8 9.15V10.45ZM3.5 2.65H8.3V1.35H3.5V2.65ZM2.65 8.3V3.5H1.35V8.3H2.65ZM9.15 3.5V3.8H10.45V3.5H9.15ZM3.8 9.15H3.5V10.45H3.8V9.15ZM1.35 8.3C1.35 9.48741 2.31259 10.45 3.5 10.45V9.15C3.03056 9.15 2.65 8.76944 2.65 8.3H1.35ZM8.3 2.65C8.76944 2.65 9.15 3.03056 9.15 3.5H10.45C10.45 2.31259 9.48741 1.35 8.3 1.35V2.65ZM3.5 1.35C2.31259 1.35 1.35 2.31259 1.35 3.5H2.65C2.65 3.03056 3.03056 2.65 3.5 2.65V1.35ZM7.7 6.85H12.5V5.55H7.7V6.85ZM13.35 7.7V12.5H14.65V7.7H13.35ZM12.5 13.35H7.7V14.65H12.5V13.35ZM6.85 12.5V7.7H5.55V12.5H6.85ZM7.7 13.35C7.23056 13.35 6.85 12.9694 6.85 12.5H5.55C5.55 13.6874 6.51259 14.65 7.7 14.65V13.35ZM13.35 12.5C13.35 12.9694 12.9694 13.35 12.5 13.35V14.65C13.6874 14.65 14.65 13.6874 14.65 12.5H13.35ZM12.5 6.85C12.9694 6.85 13.35 7.23056 13.35 7.7H14.65C14.65 6.51259 13.6874 5.55 12.5 5.55V6.85ZM7.7 5.55C6.51259 5.55 5.55 6.51259 5.55 7.7H6.85C6.85 7.23056 7.23056 6.85 7.7 6.85V5.55Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFileCopyAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
