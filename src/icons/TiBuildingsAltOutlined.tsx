// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBuildingsAltOutlined = (props: SvgIconProps) => {
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
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.375 6.87505H11.375C12.4105 6.87505 13.25 7.71452 13.25 8.75005V16.6251H3.5V8.75005C3.5 7.71452 4.33947 6.87505 5.375 6.87505Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8 4.7371V3.875C8 2.83947 8.83947 2 9.875 2H13.625C14.6605 2 15.5 2.83947 15.5 3.875V16.625"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.625 13.25H9.125C9.53921 13.25 9.875 13.5858 9.875 14V16.625H6.875V14C6.875 13.5858 7.21079 13.25 7.625 13.25Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M2 16.625H17" />
      <path
        fillRule="evenodd"
        d="M5.9375 9.82148H6.3125C6.51961 9.82148 6.6875 9.98937 6.6875 10.1965V10.5715C6.6875 10.7786 6.51961 10.9465 6.3125 10.9465H5.9375C5.73039 10.9465 5.5625 10.7786 5.5625 10.5715V10.1965C5.5625 9.98937 5.73039 9.82148 5.9375 9.82148ZM8.1875 9.82148H8.5625C8.76961 9.82148 8.9375 9.98937 8.9375 10.1965V10.5715C8.9375 10.7786 8.76961 10.9465 8.5625 10.9465H8.1875C7.98039 10.9465 7.8125 10.7786 7.8125 10.5715V10.1965C7.8125 9.98937 7.98039 9.82148 8.1875 9.82148ZM10.4375 9.82148H10.8125C11.0196 9.82148 11.1875 9.98937 11.1875 10.1965V10.5715C11.1875 10.7786 11.0196 10.9465 10.8125 10.9465H10.4375C10.2304 10.9465 10.0625 10.7786 10.0625 10.5715V10.1965C10.0625 9.98937 10.2304 9.82148 10.4375 9.82148Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10.4375 3.875H10.8125C11.0196 3.875 11.1875 4.04289 11.1875 4.25V4.625C11.1875 4.83211 11.0196 5 10.8125 5H10.4375C10.2304 5 10.0625 4.83211 10.0625 4.625V4.25C10.0625 4.04289 10.2304 3.875 10.4375 3.875ZM12.6875 3.875H13.0625C13.2696 3.875 13.4375 4.04289 13.4375 4.25V4.625C13.4375 4.83211 13.2696 5 13.0625 5H12.6875C12.4804 5 12.3125 4.83211 12.3125 4.625V4.25C12.3125 4.04289 12.4804 3.875 12.6875 3.875Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBuildingsAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
