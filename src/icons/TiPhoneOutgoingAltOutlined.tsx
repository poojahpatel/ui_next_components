// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneOutgoingAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_13509_82178)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M11.8199 16.1805C10.4549 14.8155 9.42594 13.2872 8.74227 11.7367C8.59877 11.4088 8.68277 11.025 8.93594 10.7718L9.89144 9.81634C10.6743 9.0335 10.6743 7.92634 9.9906 7.24267L8.6221 5.87417C7.71094 4.963 6.23394 4.963 5.32277 5.87417L4.5621 6.63367C3.6976 7.49817 3.3371 8.74534 3.57044 9.982C4.14677 13.0305 5.91777 16.3683 8.77494 19.2255C11.6321 22.0827 14.9699 23.8537 18.0184 24.43C19.2551 24.6633 20.5023 24.3028 21.3668 23.4383L22.1263 22.6788C23.0374 21.7677 23.0374 20.2907 22.1263 19.3795L20.7578 18.011C20.0741 17.3273 18.9658 17.3273 18.2833 18.011L17.2298 19.0657C16.9766 19.3188 16.5928 19.404 16.2649 19.2593C14.7144 18.5745 13.1849 17.5443 11.8199 16.1805Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M21.001 11.9498L25.9507 7.00004M25.9507 7.00004L21.001 2.05029M25.9507 7.00004H16.0512"
        />
      </g>
      <defs>
        <clipPath id="clip0_13509_82178">
          <rect width={28} height={28} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneOutgoingAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
