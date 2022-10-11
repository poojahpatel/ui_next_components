// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPalmOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={86}
      height={35}
      fill="none"
      viewBox="0 0 86 35"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        d="M52 19.9011C53.0027 19.9011 58.3239 19.5141 59.6596 19.4158C59.8612 19.4009 60.057 19.347 60.238 19.257L76.7372 11.0513C78.9692 9.94125 81.6783 10.6602 83.0662 12.7309V12.7309C84.657 15.1044 83.9187 18.3276 81.4534 19.7721L60.3882 32.1143C58.8778 32.9992 57.1034 33.3222 55.378 33.0263L13.6351 25.8676V8.34879L26.6915 5.04304C31.8807 3.72919 37.3585 4.16556 42.2742 6.28436L53.8831 11.2881C56.0219 12.21 57.0976 14.6171 56.3575 16.8255V16.8255C55.5921 19.1094 53.1578 20.3792 50.8468 19.7001L38.1396 15.9657"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        d="M10.0048 1.87439C12.0096 1.87439 13.6348 3.4996 13.6348 5.50439L13.6348 29.8545C13.6348 31.8592 12.0096 33.4845 10.0048 33.4845H5.01251C3.00772 33.4845 1.38251 31.8592 1.38251 29.8545V5.50439C1.38251 3.4996 3.00772 1.87439 5.01251 1.87439H10.0048Z"
        clipRule="evenodd"
      />
      <circle
        r={1.21429}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        transform="matrix(-1 0 0 1 7.67829 26.5796)"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPalmOutlined);
const Memo = memo(ForwardRef);
export default Memo;
