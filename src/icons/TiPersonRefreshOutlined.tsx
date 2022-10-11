// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPersonRefreshOutlined = (props: SvgIconProps) => {
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
        d="M9.53976 5.16049C10.6309 5.16049 11.5151 6.04464 11.5151 7.1358C11.5151 8.22696 10.6309 9.11111 9.53976 9.11111C8.4486 9.11111 7.56445 8.22696 7.56445 7.1358C7.56445 6.04464 8.4486 5.16049 9.53976 5.16049Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.0955 12.2716C12.992 12.0117 12.8316 11.7778 12.6262 11.5874C12.2793 11.265 11.825 11.0864 11.3509 11.0864C10.5608 11.0864 8.51909 11.0864 7.72897 11.0864C7.25489 11.0864 6.80136 11.2658 6.45371 11.5874C6.24828 11.7778 6.08788 12.0117 5.98438 12.2716"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.714 10.7032C2.59627 10.1904 2.52832 9.65946 2.52832 9.11111C2.52832 5.18341 5.71173 2 9.63943 2C13.5671 2 16.7505 5.18341 16.7505 9.11111C16.7505 13.0388 13.5671 16.2222 9.63943 16.2222C7.22797 16.2222 5.10096 15.0197 3.81543 13.1842"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.30556 9.11111L2.52778 10.8889L0.75 9.11111"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPersonRefreshOutlined);
const Memo = memo(ForwardRef);
export default Memo;
