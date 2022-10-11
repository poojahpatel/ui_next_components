// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWebOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_87696)">
        <path
          strokeWidth={0.1}
          d="M8.18298 14.3747L8.18298 14.3747C7.29387 12.8903 6.80431 11.249 6.7142 9.59181L11.2865 9.59182C11.1964 11.249 10.7069 12.8903 9.81779 14.3746L9.81779 14.3746C9.43572 15.0127 8.565 15.0127 8.18298 14.3747ZM3.05576 8.40742C3.28574 6.07203 4.86087 4.13144 6.99594 3.37122C6.11322 4.94617 5.62473 6.66882 5.53054 8.40728L3.05576 8.40742ZM8.18298 3.68658L8.18298 3.68657C8.565 3.04854 9.43521 3.04847 9.81789 3.68682C10.6957 5.15239 11.1841 6.77107 11.283 8.40696L6.71778 8.40716C6.81664 6.77115 7.30501 5.15233 8.18298 3.68658ZM11.005 3.37155C13.1396 4.132 14.7143 6.07236 14.9442 8.40742L12.4702 8.40727C12.376 6.66895 11.8876 4.94641 11.005 3.37155ZM16.05 9C16.05 5.10639 12.8936 1.95 9 1.95C5.10639 1.95 1.95 5.10639 1.95 9C1.95 12.8936 5.10639 16.05 9 16.05C12.8936 16.05 16.05 12.8936 16.05 9ZM6.95353 14.6135C4.83983 13.8427 3.28393 11.9121 3.0557 9.59193L5.52736 9.59217C5.61183 11.3233 6.08713 13.0403 6.95353 14.6135ZM11.0476 14.613C11.9136 13.0402 12.3889 11.3233 12.4734 9.59216L14.9443 9.59193C14.7161 11.9116 13.1608 13.8419 11.0476 14.613Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_87696">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWebOutlined);
const Memo = memo(ForwardRef);
export default Memo;
