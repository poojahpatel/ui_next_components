// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDollarReload = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={44}
      height={38}
      fill="none"
      viewBox="0 0 44 38"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={17.5} cy={18.5} r={17.5} fill="#DCEBFA" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M39.9112 14.1665C37.8534 7.13218 31.419 2 23.8 2C14.5216 2 7 9.61116 7 19C7 28.3888 14.5216 36 23.8 36V36C31.456 36 37.9159 30.8179 39.9409 23.7309"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M19 21.9884C19 23.707 20.7584 25.0996 22.9286 25.0996H24.5C26.6701 25.0996 28.4286 23.707 28.4286 21.9884C28.4286 17.6329 19 20.1218 19 15.7662C19 14.0476 20.7584 12.655 22.9286 12.655H24.5C26.6701 12.655 28.4286 14.0476 28.4286 15.7662"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M23.8133 10.8733V12.0348"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M23.8133 26.1386V27.3001"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M42.3998 10.5L40.5998 15.9643L35.7998 12.9286"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDollarReload);
const Memo = memo(ForwardRef);
export default Memo;
