// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPurchaseOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13655_80344)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M1.5 5.07697H15.3462"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.55407 8.15381H4.57715"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.34615 12.7692H3.80769C2.53308 12.7692 1.5 11.7362 1.5 10.4615V4.30769C1.5 3.03308 2.53308 2 3.80769 2H13.0385C14.3131 2 15.3462 3.03308 15.3462 4.30769V7.38462"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M16.5001 12.3847L15.3462 11.2308L14.1924 12.3847"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8.03809 13.1539L9.19193 14.3077L10.3458 13.1539"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.19238 14.3076V11.2307C9.19238 10.3807 9.88084 9.69226 10.7308 9.69226H13.0385"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15.3465 11.2308V14.3078C15.3465 15.1539 14.6542 15.8462 13.808 15.8462H11.5088"
        />
      </g>
      <defs>
        <clipPath id="clip0_13655_80344">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPurchaseOutlined);
const Memo = memo(ForwardRef);
export default Memo;
