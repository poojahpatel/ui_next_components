// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyTransferOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_84143)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.2145 16.5H2.35725C1.88325 16.5 1.5 16.1168 1.5 15.6428V11.3572C1.5 10.8832 1.88325 10.5 2.35725 10.5H9.2145C9.68775 10.5 10.0717 10.8832 10.0717 11.3572V15.6428C10.0717 16.1168 9.68775 16.5 9.2145 16.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15.6427 7.5H8.78547C8.31222 7.5 7.92822 7.11675 7.92822 6.64275V2.35725C7.92822 1.88325 8.31222 1.5 8.78547 1.5H15.6427C16.1167 1.5 16.5 1.88325 16.5 2.35725V6.64275C16.5 7.11675 16.1167 7.5 15.6427 7.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M1.875 6.375L3 7.5L4.125 6.375"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3 7.5V6C3 4.75725 4.00725 3.75 5.25 3.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M16.125 11.625L15 10.5L13.875 11.625"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15 10.5V12C15 13.2427 13.9927 14.25 12.75 14.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.44856 12.8371C6.81468 13.2032 6.81468 13.7968 6.44856 14.1629C6.08244 14.529 5.48885 14.529 5.12273 14.1629C4.75662 13.7968 4.75662 13.2032 5.12273 12.8371C5.48885 12.471 6.08244 12.471 6.44856 12.8371Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.92725 3.75H16.4997"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_84143">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyTransferOutlined);
const Memo = memo(ForwardRef);
export default Memo;
