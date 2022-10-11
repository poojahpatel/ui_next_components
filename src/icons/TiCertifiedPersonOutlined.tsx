// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCertifiedPersonOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={90}
      fill="none"
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M24.4749 27.8261C24.4749 28.7951 24.2864 29.3922 24.4749 30.2488C26.3939 38.9707 30.976 45.9966 39.5872 45.9966C48.1985 45.9966 53.5001 39.4552 55.1793 30.2488C55.3686 29.2107 55.1793 28.3106 55.1793 27.0992C55.1793 27.0992 56.6186 23.9497 56.6186 21.5269V21.5269C56.6186 13.4276 48.8937 7.54767 40.7948 7.6309L32.3909 7.71727C32.3909 7.71727 20.6855 10.3986 23.9952 25.6456C23.9952 25.6456 24.4749 26.857 24.4749 27.8261Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M47.7419 43.5739L48.7014 49.6308L42.0783 54.1505C40.7272 55.0726 38.9426 55.0471 37.6184 54.0869L30.4707 48.904L31.4302 43.5739"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M48.7007 48.9039L50.8794 51.443C51.4371 52.0928 51.5021 53.0317 51.0394 53.7522L47.7896 58.8123C46.9223 60.1627 45.0052 60.3117 43.9397 59.1114L40.8918 55.6778C40.3208 55.0346 39.3192 55.0252 38.7362 55.6576L35.433 59.241C34.3706 60.3934 32.51 60.2488 31.6385 58.9461L28.1697 53.761C27.6861 53.0381 27.7433 52.0815 28.3097 51.4214L30.47 48.9039"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M39.5869 54.9608L35.6641 67.8789L39.5009 72.5435L43.3833 67.8864L39.5869 54.9608Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M50.3809 50.8421L58.5891 55.6781"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M28.791 50.8421L20.5827 55.6781C16.6717 57.9824 14.0126 61.9319 13.349 66.4225L12.363 73.0945"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#C43243"
        d="M24.2344 26.3724C24.2344 26.3724 25.9999 19.1348 27.4392 17.6812C28.5332 16.5762 41.9652 16.2125 50.5971 20.1087C53.321 21.3382 53.4622 23.0206 55.4185 25.4033"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#FF8F27"
        d="M60.7279 65.5264L55.0004 76.5909L61.7504 75.8182L64.0004 82L69.502 71.372"
      />
      <ellipse cx={73} cy={58.5} fill="#FFCFA4" rx={11} ry={10.5} />
      <circle
        cx={70}
        cy={61}
        r={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#FF8F27"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        fill="none"
        stroke="#FF8F27"
        d="M79.2449 65.4731L84.9999 76.5909L78.2499 75.8182L75.9999 82L70.5195 71.4128"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCertifiedPersonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
