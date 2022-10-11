// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFilePasteOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4 10.4444H3.61133C2.23062 10.4444 1.11133 9.32516 1.11133 7.94445V3.61111C1.11133 2.2304 2.23062 1.11111 3.61133 1.11111H7.94466C9.32537 1.11111 10.4447 2.2304 10.4447 3.61111V4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.77799 13.4444H6.61133C5.23062 13.4444 4.11133 12.3252 4.11133 10.9444V6.61111C4.11133 5.2304 5.23062 4.11111 6.61133 4.11111H10.9447C12.3254 4.11111 13.4447 5.2304 13.4447 6.61111V8.77778"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4453 11.8889V15"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.8887 13.4445H14.9998"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFilePasteOutlined);
const Memo = memo(ForwardRef);
export default Memo;
