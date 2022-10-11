// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneRingAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_11260_55805)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.66008 5.71196L3.28674 4.33862"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8 4.33192V2.38525"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.3401 5.71196L12.7134 4.33862"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.2894 13.7186H13.3334C14.07 13.7186 14.6667 13.1219 14.6667 12.3853V11.7093C14.6667 11.0233 14.3147 10.3853 13.732 9.98725C12.294 9.00659 10.2674 8.38525 8.00004 8.38525C5.73271 8.38525 3.70604 9.00659 2.26804 9.98792C1.68537 10.3859 1.33337 11.0239 1.33337 11.7093V12.3853C1.33337 13.1219 1.93004 13.7186 2.66671 13.7186H3.71071C4.26271 13.7186 4.71071 13.2706 4.71071 12.7186V11.8099C4.71071 11.6053 4.83137 11.4159 5.02204 11.3419C5.90604 10.9993 6.91937 10.8019 8.00004 10.8019C9.08071 10.8019 10.094 10.9993 10.978 11.3419C11.1687 11.4159 11.2894 11.6053 11.2894 11.8099V12.7186C11.2894 13.2706 11.7374 13.7186 12.2894 13.7186V13.7186Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_11260_55805">
          <rect width={16} height={16} transform="translate(0 0.385254)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneRingAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
