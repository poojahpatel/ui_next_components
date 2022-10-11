// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMp4FileOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9070_8043)">
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
        <path d="M4.6865 10H5.47507V7.75635H5.5239L6.32468 10H6.83494L7.63572 7.75635H7.68699V10H8.47312V6.47705H7.45505L6.60545 8.86719H6.55906L5.70701 6.47705H4.6865V10ZM9.30664 10H10.2026V8.96729H10.8228C11.6113 8.96729 12.1191 8.48389 12.1191 7.72949V7.72461C12.1191 6.97021 11.6113 6.47705 10.8228 6.47705H9.30664V10ZM10.6079 7.16309C10.9888 7.16309 11.2134 7.3584 11.2134 7.72461V7.72949C11.2134 8.0957 10.9888 8.29346 10.6079 8.29346H10.2026V7.16309H10.6079ZM14.1612 10H15.0083V9.39941H15.4478V8.70117H15.0083V6.47705H13.7632C13.3067 7.19482 12.8599 7.93457 12.4302 8.72314V9.39941H14.1612V10ZM13.2066 8.73291V8.68896C13.4898 8.15918 13.8242 7.60742 14.1392 7.1167H14.1831V8.73291H13.2066Z" />
      </g>
      <defs>
        <clipPath id="clip0_9070_8043">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMp4FileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
