// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSaveOutlined = (props: SvgIconProps) => {
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
      <path d="M11.047 2.34227L11.4484 1.8963V1.8963L11.047 2.34227ZM13.5586 4.60276L13.1572 5.04873V5.04873L13.5586 4.60276ZM4.06667 13.3788C4.06667 13.7102 4.3353 13.9788 4.66667 13.9788C4.99804 13.9788 5.26667 13.7102 5.26667 13.3788H4.06667ZM10.7333 13.3788C10.7333 13.7102 11.002 13.9788 11.3333 13.9788C11.6647 13.9788 11.9333 13.7102 11.9333 13.3788H10.7333ZM5.26667 2C5.26667 1.66863 4.99804 1.4 4.66667 1.4C4.3353 1.4 4.06667 1.66863 4.06667 2H5.26667ZM9.33333 5.93333C9.6647 5.93333 9.93333 5.6647 9.93333 5.33333C9.93333 5.00196 9.6647 4.73333 9.33333 4.73333V5.93333ZM12.3333 13.4H3.66667V14.6H12.3333V13.4ZM2.6 12.3333V3.66667H1.4V12.3333H2.6ZM3.66667 2.6H10.155V1.4H3.66667V2.6ZM13.4 5.59382V12.3333H14.6V5.59382H13.4ZM10.6456 2.78825L13.1572 5.04873L13.96 4.15678L11.4484 1.8963L10.6456 2.78825ZM14.6 5.59382C14.6 5.04574 14.3674 4.52342 13.96 4.15678L13.1572 5.04873C13.3118 5.18781 13.4 5.38593 13.4 5.59382H14.6ZM10.155 2.6C10.3362 2.6 10.5109 2.66706 10.6456 2.78825L11.4484 1.8963C11.0933 1.57679 10.6326 1.4 10.155 1.4V2.6ZM3.66667 13.4C3.07756 13.4 2.6 12.9224 2.6 12.3333H1.4C1.4 13.5852 2.41482 14.6 3.66667 14.6V13.4ZM12.3333 14.6C13.5852 14.6 14.6 13.5852 14.6 12.3333H13.4C13.4 12.9224 12.9224 13.4 12.3333 13.4V14.6ZM2.6 3.66667C2.6 3.07756 3.07756 2.6 3.66667 2.6V1.4C2.41482 1.4 1.4 2.41482 1.4 3.66667H2.6ZM5.66667 9.26667H10.3333V8.06667H5.66667V9.26667ZM5.26667 13.3788V9.66667H4.06667V13.3788H5.26667ZM10.7333 9.66667V13.3788H11.9333V9.66667H10.7333ZM10.3333 9.26667C10.5542 9.26667 10.7333 9.44575 10.7333 9.66667H11.9333C11.9333 8.78301 11.217 8.06667 10.3333 8.06667V9.26667ZM5.66667 8.06667C4.78301 8.06667 4.06667 8.78301 4.06667 9.66667H5.26667C5.26667 9.44575 5.44575 9.26667 5.66667 9.26667V8.06667ZM4.06667 2V4.33333H5.26667V2H4.06667ZM5.66667 5.93333H9.33333V4.73333H5.66667V5.93333ZM4.06667 4.33333C4.06667 5.21699 4.78301 5.93333 5.66667 5.93333V4.73333C5.44575 4.73333 5.26667 4.55425 5.26667 4.33333H4.06667Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSaveOutlined);
const Memo = memo(ForwardRef);
export default Memo;