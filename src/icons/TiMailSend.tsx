// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailSend = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={44}
      height={44}
      fill="none"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        d="M36 0H8C3.58172 0 0 3.58172 0 8V36C0 40.4183 3.58172 44 8 44H36C40.4183 44 44 40.4183 44 36V8C44 3.58172 40.4183 0 36 0Z"
        fill="#018270"
      />
      <g clipPath="url(#clip0_12170_56560)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="white"
          d="M30 16.0388V23.0278"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="white"
          d="M31 29.0278H25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="white"
          d="M29 27.0281L31 29.0281L29 31.0281"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="white"
          d="M21 27.0278H15C13.895 27.0278 13 26.1328 13 25.0278V16.0388"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="white"
          d="M15.011 14.0278H27.99C29.1 14.0278 30.001 14.9278 30.001 16.0388C30.001 16.7058 29.67 17.3288 29.118 17.7028L23.761 21.3338C22.396 22.2588 20.604 22.2588 19.239 21.3338L13.883 17.7038C13.331 17.3298 13 16.7058 13 16.0398V16.0388C13 14.9278 13.9 14.0278 15.011 14.0278V14.0278Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_12170_56560">
          <rect width={24} height={24} transform="translate(10 10)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailSend);
const Memo = memo(ForwardRef);
export default Memo;
