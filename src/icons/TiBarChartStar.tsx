// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBarChartStar = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={82}
      height={78}
      fill="none"
      viewBox="0 0 82 78"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M11 56.742C11 53.594 13.552 51.042 16.7 51.042H66.683C69.8311 51.042 72.383 53.594 72.383 56.742V75.9999H11V56.742Z"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M41 24.5L32.1832 29.1353L33.8671 19.3176L26.7342 12.3647L36.5916 10.9324L41 2L45.4084 10.9324L55.2658 12.3647L48.1329 19.3176L49.8168 29.1353L41 24.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M11 33.5L5.70993 36.2812L6.72025 30.3906L2.44049 26.2188L8.35497 25.3594L11 20L13.645 25.3594L19.5595 26.2188L15.2798 30.3906L16.2901 36.2812L11 33.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M71 33.5L65.7099 36.2812L66.7202 30.3906L62.4405 26.2188L68.355 25.3594L71 20L73.645 25.3594L79.5595 26.2188L75.2798 30.3906L76.2901 36.2812L71 33.5Z"
        clipRule="evenodd"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M30.3369 44.6997C30.3369 42.0763 32.4636 39.9497 35.0869 39.9497H48.3713C50.9947 39.9497 53.1213 42.0764 53.1213 44.6997V75.9251H30.3369V44.6997Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBarChartStar);
const Memo = memo(ForwardRef);
export default Memo;
