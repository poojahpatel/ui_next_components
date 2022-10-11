// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPdfFileOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9070_8036)">
        <rect
          width={14}
          height={14}
          x={3}
          y={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          rx={2.28571}
        />
        <path d="M1.55 7C1.55 6.69624 1.30376 6.45 1 6.45C0.696243 6.45 0.45 6.69624 0.45 7H1.55ZM11 17.55C11.3038 17.55 11.55 17.3038 11.55 17C11.55 16.6962 11.3038 16.45 11 16.45V17.55ZM11 16.45H4.42857V17.55H11V16.45ZM1.55 13.5714V7H0.45V13.5714H1.55ZM4.42857 16.45C2.83878 16.45 1.55 15.1612 1.55 13.5714H0.45C0.45 15.7687 2.23127 17.55 4.42857 17.55V16.45Z" />
        <path d="M5.41504 10H6.31104V8.96729H6.93115C7.71973 8.96729 8.22754 8.48389 8.22754 7.72949V7.72461C8.22754 6.97021 7.71973 6.47705 6.93115 6.47705H5.41504V10ZM6.71631 7.16309C7.09717 7.16309 7.32178 7.3584 7.32178 7.72461V7.72949C7.32178 8.0957 7.09717 8.29346 6.71631 8.29346H6.31104V7.16309H6.71631ZM8.88772 10H10.3672C11.4268 10 12.0152 9.36035 12.0152 8.20557V8.20068C12.0152 7.10205 11.417 6.47705 10.3672 6.47705H8.88772V10ZM9.78371 9.27979V7.19727H10.2061C10.77 7.19727 11.1021 7.56348 11.1021 8.21777V8.22266C11.1021 8.91846 10.7871 9.27979 10.2061 9.27979H9.78371ZM12.6827 10H13.5787V8.68652H14.941V8.00049H13.5787V7.19727H15.0801V6.47705H12.6827V10Z" />
      </g>
      <defs>
        <clipPath id="clip0_9070_8036">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPdfFileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
