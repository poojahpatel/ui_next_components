// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRestrictedMoney = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={51}
      height={51}
      fill="none"
      viewBox="0 0 51 51"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={27.9246} cy={27.1865} r={23.0769} fill="#FC9332" />
      <path
        strokeLinecap="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M30.2912 19.3516C30.2912 17.2477 29.9406 14.7932 23.9796 14.7932C18.0186 14.7932 18.0186 17.2477 18.0186 19.3516C18.0186 24.962 21.1744 24.962 24.3303 24.962C29.2393 24.962 30.6419 27.0658 30.2912 30.5723C29.9406 34.7801 27.6274 35.4814 24.3303 35.4814C19.0706 35.4814 18.0186 34.0788 17.668 30.5723"
      />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M23.9814 14.7933V10.5198" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M23.9814 24.962V19.2859" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M23.9814 39.6892V30.156" />
      <circle cx={24.0769} cy={24.6223} r={23.0769} strokeWidth={2} fill="none" stroke="#0D1C43" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M6.5 39.0454L39.4248 7.60156" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRestrictedMoney);
const Memo = memo(ForwardRef);
export default Memo;
