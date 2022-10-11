// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneIncomingOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13459_87097)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M11.8194 16.1799C10.4544 14.8149 9.42545 13.2866 8.74178 11.7361C8.59828 11.4082 8.68228 11.0244 8.93545 10.7712L9.89095 9.81573C10.6738 9.03289 10.6738 7.92573 9.99011 7.24206L8.62161 5.87356C7.71045 4.96239 6.23345 4.96239 5.32228 5.87356L4.56161 6.63306C3.69711 7.49756 3.33661 8.74473 3.56995 9.98139C4.14628 13.0299 5.91728 16.3677 8.77445 19.2249C11.6316 22.0821 14.9694 23.8531 18.0179 24.4294C19.2546 24.6627 20.5018 24.3022 21.3663 23.4377L22.1258 22.6782C23.0369 21.7671 23.0369 20.2901 22.1258 19.3789L20.7573 18.0104C20.0736 17.3267 18.9653 17.3267 18.2828 18.0104L17.2293 19.0651C16.9761 19.3182 16.5923 19.4034 16.2644 19.2587C14.7139 18.5739 13.1844 17.5437 11.8194 16.1799Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
          fill="none"
          stroke="currentColor"
          d="M17.5 3.5V10.5M17.5 10.5H24.5M17.5 10.5L24.5 3.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_13459_87097">
          <rect width={28} height={28} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneIncomingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
