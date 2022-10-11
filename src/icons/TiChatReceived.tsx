// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatReceived = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={24} height={24} rx={5} fill="currentColor" />
      <g clipPath="url(#clip0_10489_38261)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M16.8333 11.3027V14.238C16.8333 15.2813 15.988 16.1267 14.9447 16.1267H11.7967L8.64867 18.6453V16.1267H7.38867C6.34533 16.1267 5.5 15.2813 5.5 14.238V9.20068C5.5 8.15735 6.34533 7.31201 7.38867 7.31201H12.8333"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M18.8268 8.30005C18.8268 9.95672 17.4841 11.3 15.8274 11.3C14.2054 11.3007 12.8261 9.92138 12.8268 8.29938C12.8274 6.64272 14.1701 5.30005 15.8268 5.30005C17.4834 5.30005 18.8268 6.64338 18.8268 8.30005Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.4998 8.3584H17.1665" fill="none" stroke="white" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.4999 7.13611L14.5 8.35833L15.4999 9.46944"
          fill="none"
          stroke="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_10489_38261">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatReceived);
const Memo = memo(ForwardRef);
export default Memo;
