// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNetworkOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_87705)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.19252 4.65598C2.37698 5.47348 1.7849 6.50098 1.5 7.64698"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.53516 15.51C6.989 15.606 7.45974 15.6592 7.94354 15.6592C8.62853 15.6592 9.28972 15.5572 9.91174 15.369"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M1.50098 10.7085C1.78588 11.8545 2.37795 12.882 3.19349 13.6995"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.3027 11.0257C13.9809 12.0847 13.3865 13.0274 12.604 13.7842"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.604 4.57123C13.3865 5.32798 13.9801 6.27073 14.3027 7.32973"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.53516 2.84548C6.989 2.74948 7.45974 2.69623 7.94354 2.69623C8.62853 2.69623 9.28972 2.79823 9.91174 2.98648"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15.9375 7.85185C16.6872 8.58408 16.6872 9.77126 15.9375 10.5035C15.1878 11.2357 13.9722 11.2357 13.2225 10.5035C12.4727 9.77126 12.4727 8.58408 13.2225 7.85185C13.9722 7.11962 15.1878 7.11962 15.9375 7.85185Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.17969 13.3547C6.92942 14.0869 6.92942 15.2741 6.17969 16.0063C5.42995 16.7385 4.21439 16.7385 3.46465 16.0063C2.71491 15.2741 2.71491 14.0869 3.46465 13.3547C4.21439 12.6224 5.42995 12.6224 6.17969 13.3547Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.17969 2.34916C6.92942 3.0814 6.92942 4.26858 6.17969 5.00081C5.42995 5.73304 4.21439 5.73304 3.46465 5.00081C2.71491 4.26858 2.71491 3.0814 3.46465 2.34916C4.21439 1.61693 5.42995 1.61693 6.17969 2.34916"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_87705">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNetworkOutlined);
const Memo = memo(ForwardRef);
export default Memo;
