// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNotificationBox = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={32} height={32} rx={6.66667} fill="#018370" />
      <path
        strokeWidth={1.5}
        fill="none"
        stroke="white"
        d="M18.2051 22.1528C18.2051 23.3801 17.2101 24.375 15.9828 24.375C14.7555 24.375 13.7606 23.3801 13.7606 22.1528"
      />
      <path
        fillRule="evenodd"
        d="M15.9792 9.125C13.3207 9.125 11.0918 11.1332 10.8156 13.7774L10.2357 19.3284C10.2336 19.3486 10.2325 19.3688 10.2325 19.389C10.2325 19.7112 10.4937 19.9724 10.8159 19.9724H21.1839C21.2048 19.9724 21.2258 19.9712 21.2467 19.969C21.567 19.9343 21.7985 19.6466 21.7638 19.3263L21.1632 13.778C20.8766 11.131 18.6417 9.125 15.9792 9.125ZM9.32367 13.6215C9.67967 10.2135 12.5526 7.625 15.9792 7.625C19.4077 7.625 22.2854 10.208 22.6545 13.6166L23.2551 19.1648C23.3789 20.3087 22.552 21.3364 21.4081 21.4603C21.3336 21.4683 21.2588 21.4724 21.1839 21.4724H10.8159C9.66528 21.4724 8.73254 20.5396 8.73254 19.389C8.73254 19.3167 8.73631 19.2445 8.74382 19.1726L9.32367 13.6215Z"
        clipRule="evenodd"
        fill="white"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNotificationBox);
const Memo = memo(ForwardRef);
export default Memo;
