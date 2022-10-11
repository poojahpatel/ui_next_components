// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatBotOutlined = (props: SvgIconProps) => {
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
      <path d="M4.625 2.6H11.375V1.4H4.625V2.6ZM11.375 2.6C12.4934 2.6 13.4 3.50662 13.4 4.625H14.6C14.6 2.84388 13.1561 1.4 11.375 1.4V2.6ZM13.4 4.625V9.375H14.6V4.625H13.4ZM13.4 9.375C13.4 10.4934 12.4934 11.4 11.375 11.4V12.6C13.1561 12.6 14.6 11.1561 14.6 9.375H13.4ZM2.6 9.375V4.625H1.4V9.375H2.6ZM2.6 4.625C2.6 3.50662 3.50662 2.6 4.625 2.6V1.4C2.84388 1.4 1.4 2.84388 1.4 4.625H2.6ZM11.375 11.4H8V12.6H11.375V11.4ZM8 11.4H4.99315V12.6H8V11.4ZM1.4 9.375V13.3626H2.6V9.375H1.4ZM3.19598 14.1457L4.76349 12.6902L3.94695 11.8108L2.37944 13.2664L3.19598 14.1457ZM1.4 13.3626C1.4 14.2957 2.51214 14.7807 3.19598 14.1457L2.37944 13.2664C2.46342 13.1884 2.6 13.2479 2.6 13.3626H1.4ZM4.99315 11.4C4.60506 11.4 4.23134 11.5468 3.94695 11.8108L4.76349 12.6902C4.82592 12.6322 4.90796 12.6 4.99315 12.6V11.4Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.5713 8.40439C9.15123 9.82448 6.84856 9.82448 5.42847 8.40439"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.73315 5.14285V5.79517"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.34229 5.14285V5.79517"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatBotOutlined);
const Memo = memo(ForwardRef);
export default Memo;
