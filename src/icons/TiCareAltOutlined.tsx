// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCareAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={80}
      fill="none"
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={14.6667} height={28} x={8} y={36.0416} strokeWidth={2.5} fill="none" stroke="#11275E" rx={4} />
      <path
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M22.6665 39.375C22.6665 39.375 33.9998 39.375 40.6665 39.375C47.3332 39.375 51.9998 46.7083 51.9998 46.7083C51.9998 46.7083 61.3332 46.7083 64.6665 46.7083C70.6665 46.7083 70.6665 55.375 64.6665 55.375C69.9998 55.375 81.3332 48.0417 85.9998 46.0417C91.9998 44.7083 91.9998 51.375 89.9998 52.7083C79.9998 57.375 63.3332 66.0417 62.6665 66.7083C56.6665 71.375 47.3332 67.375 47.3332 67.375L22.6665 59.375"
      />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="#11275E" d="M45.3335 55.375H64.6668" />
      <path
        fillRule="evenodd"
        d="M64.6667 19.2337C64.6667 19.2337 70.0952 13.5589 74.9206 17.9727C79.746 22.3865 74.9206 29.3224 74.9206 29.3224L64.6667 40.0416L54.4127 29.3224C54.4127 29.3224 49.5873 22.3865 54.4127 17.9727C59.2381 13.5589 64.6667 19.2337 64.6667 19.2337Z"
        clipRule="evenodd"
        fill="#FFADAD"
      />
      <path
        fillRule="evenodd"
        d="M65.333 19.2337V40.0416L55.6187 29.3224C55.6187 29.3224 51.0473 22.3865 55.6187 17.9727C60.1902 13.5589 65.333 19.2337 65.333 19.2337Z"
        clipRule="evenodd"
        fill="#FFADAD"
      />
      <path
        fillRule="evenodd"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M64.6665 13.375C64.6665 13.375 70.6665 7.375 75.9998 12.0417C81.3332 16.7083 75.9998 24.0417 75.9998 24.0417L64.6665 35.375L53.3332 24.0417C53.3332 24.0417 47.9998 16.7083 53.3332 12.0417C58.6665 7.375 64.6665 13.375 64.6665 13.375Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2554_779"
          x1={63.5}
          x2={50.2905}
          y1={15}
          y2={20.5937}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFADAD" />
          <stop offset={1} stopColor="#FE7474" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCareAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
