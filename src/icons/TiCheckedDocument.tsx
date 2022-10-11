// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckedDocument = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={79}
      height={96}
      fill="none"
      viewBox="0 0 79 96"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M11.1918 19.8086C11.1918 14.838 15.2212 10.8086 20.1918 10.8086H56.4195H74.2907C75.6915 10.8086 76.8597 11.8799 76.9806 13.2754L77.7456 22.1005V85.0008C77.7456 89.9714 73.7161 94.0008 68.7456 94.0008H20.1918C15.2213 94.0008 11.1918 89.9714 11.1918 85.0008V19.8086Z"
        clipRule="evenodd"
        fill="#DCEBFA"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M36.6388 29.8939H57.1922"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M20.9791 30.3833L23.2628 32.3408L28.809 26.9578"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M36.6388 45.5536H57.1922"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M20.9791 46.0429L23.2628 48.0003L28.809 42.6173"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M36.6388 62.192H57.1922"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M20.9791 62.6814L23.2628 64.6389L28.809 59.2559"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M2.38322 12C2.38322 6.47716 6.86037 2 12.3832 2H56.2135H66.7668C72.2897 2 76.7668 6.47715 76.7668 12V22.064V84.0008C76.7668 89.5236 72.2897 94.0008 66.7668 94.0008H12.3832C6.86038 94.0008 2.38322 89.5236 2.38322 84.0008V12Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckedDocument);
const Memo = memo(ForwardRef);
export default Memo;
