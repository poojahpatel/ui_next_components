// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiKidOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_81143)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.09677 8.74193L3.46398 5.67034C3.18958 5.35021 3.16159 4.88664 3.39547 4.53582C3.7249 4.04168 4.42406 3.97245 4.84401 4.39239L7.55764 7.10603C8.18538 7.73376 9.19464 7.7603 9.8545 7.16643L13.0065 4.32965C13.4453 3.93473 14.1323 4.02106 14.4598 4.51225C14.7024 4.87622 14.6709 5.35769 14.3828 5.6869L11.2581 9.25806L12.0199 12.6863C12.1587 13.3108 11.6835 13.9032 11.0437 13.9032H6.28432C5.65327 13.9032 5.17998 13.3259 5.30374 12.7071L6.09677 8.74193Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.09668 13.9032V16.2258C6.09668 16.6534 6.4433 17 6.87087 17V17C7.29845 17 7.64507 16.6534 7.64507 16.2258V13.9032"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.70947 13.9032V16.2258C9.70947 16.6534 10.0561 17 10.4837 17V17C10.9112 17 11.2579 16.6534 11.2579 16.2258V13.9032"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.8453 3.06452C10.8453 4.20472 9.92103 5.12903 8.78082 5.12903C7.64062 5.12903 6.71631 4.20472 6.71631 3.06452C6.71631 1.92432 7.64062 1 8.78082 1C9.92103 1 10.8453 1.92432 10.8453 3.06452Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_81143">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiKidOutlined);
const Memo = memo(ForwardRef);
export default Memo;
