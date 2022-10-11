// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailIconOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_8014_508)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12 9C12 10.6568 10.6568 12 9 12C7.34325 12 6 10.6568 6 9C6 7.34325 7.34325 6 9 6C10.6568 6 12 7.34325 12 9ZM12 9V10.125C12 11.1608 12.8392 12 13.875 12C14.9108 12 15.75 11.1608 15.75 10.125V9C15.75 5.27175 12.7283 2.25 9 2.25C5.27175 2.25 2.25 5.27175 2.25 9C2.25 12.7283 5.27175 15.75 9 15.75C9.86175 15.75 10.7378 15.5865 11.583 15.2362C12.039 15.0472 12.4605 14.8102 12.8497 14.5395"
        />
      </g>
      <defs>
        <clipPath id="clip0_8014_508">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailIconOutlined);
const Memo = memo(ForwardRef);
export default Memo;
