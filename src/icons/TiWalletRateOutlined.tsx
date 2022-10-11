// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWalletRateOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13681_80400)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3 9.19955V6.0683C3 5.1323 3.57975 4.2938 4.455 3.96305L10.7198 1.59755C11.7015 1.2278 12.75 1.9523 12.75 3.00155V5.51405"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.989 15.7501H13.5C14.7375 15.7501 15.75 14.7376 15.75 13.5001V7.76331C15.75 6.52056 14.7427 5.51331 13.5 5.51331H4.5C3.67125 5.51331 3 6.18456 3 7.01331"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.3661 10.9166C13.4216 10.9721 13.4216 11.0614 13.3661 11.1161C13.3106 11.1716 13.2214 11.1716 13.1666 11.1161C13.1111 11.0606 13.1111 10.9714 13.1666 10.9166C13.2206 10.8611 13.3106 10.8611 13.3661 10.9166"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.38672 13.6125L6.86172 11.1375" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M6.97452 13.5255C7.03002 13.581 7.03002 13.6703 6.97452 13.725C6.91902 13.7805 6.82977 13.7805 6.77502 13.725C6.71952 13.6695 6.71952 13.5803 6.77502 13.5255C6.82902 13.47 6.91902 13.47 6.97452 13.5255"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.36612 10.9166C4.42162 10.9721 4.42162 11.0614 4.36612 11.1161C4.31062 11.1716 4.22137 11.1716 4.16662 11.1161C4.11113 11.0606 4.11113 10.9714 4.16662 10.9166C4.22062 10.8611 4.31062 10.8611 4.36612 10.9166"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.625 16.5C7.89375 16.5 9.75 14.6438 9.75 12.375C9.75 10.1062 7.89375 8.25 5.625 8.25C3.35625 8.25 1.5 10.1062 1.5 12.375C1.5 13.3005 1.81275 14.1547 2.3325 14.844C3.08625 15.8467 4.28175 16.5 5.625 16.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13681_80400">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWalletRateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
