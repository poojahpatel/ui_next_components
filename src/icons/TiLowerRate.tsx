// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLowerRate = (props: SvgIconProps) => {
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
      <path
        d="M29.8887 10.8444C29.8887 9.2735 31.1622 8 32.7331 8H58.3331C59.9041 8 61.1776 9.2735 61.1776 10.8444V19.3778H29.8887V10.8444Z"
        fill="#FFADAD"
      />
      <mask
        id="mask0_2554_819"
        width={33}
        height={12}
        x={29}
        y={8}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          d="M29.8887 10.8444C29.8887 9.2735 31.1622 8 32.7331 8H58.3331C59.9041 8 61.1776 9.2735 61.1776 10.8444V19.3778H29.8887V10.8444Z"
          fill="#FFADAD"
        />
      </mask>
      <g mask="url(#mask0_2554_819)">
        <path
          fillRule="evenodd"
          d="M29.8887 8C29.8887 8 61.1776 10.8444 61.1776 19.3778C50.8664 19.3778 29.8887 19.3778 29.8887 19.3778V8Z"
          clipRule="evenodd"
          fill="#FFADAD"
        />
      </g>
      <path
        fillRule="evenodd"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M36.6444 11.9111C35.4662 11.9111 34.5111 12.8663 34.5111 14.0445V44.6222C34.5111 45.8005 33.556 46.7556 32.3778 46.7556H26.7229C24.7476 46.7556 23.8332 49.2087 25.3265 50.5017L48.7505 70.7835C49.5558 71.4808 50.7521 71.4771 51.5532 70.775L74.6915 50.4932C76.1722 49.1953 75.2542 46.7556 73.2853 46.7556H68.2889C67.1107 46.7556 66.1556 45.8005 66.1556 44.6222V14.0445C66.1556 12.8663 65.2004 11.9111 64.0222 11.9111H36.6444Z"
        clipRule="evenodd"
      />
      <path strokeWidth={2.5} fill="none" stroke="#11275E" d="M34.5112 22.2223H66.1557" />
      <path
        strokeLinecap="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M56.5554 36.4445C56.5554 34.3112 56.1998 31.8223 50.1554 31.8223C44.1109 31.8223 44.1109 34.3112 44.1109 36.4445C44.1109 42.1334 47.3109 42.1334 50.5109 42.1334C55.4887 42.1334 56.9109 44.2667 56.5554 47.8223C56.1998 52.0889 53.8543 52.8 50.5109 52.8C45.1776 52.8 44.1109 51.3778 43.7554 47.8223"
      />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="#11275E" d="M50.1558 31.8221V27.4888" />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="#11275E" d="M50.1558 42.1332V36.3777" />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="#11275E" d="M50.1558 57.0666V47.3999" />
      <defs>
        <linearGradient
          id="paint0_linear_2554_819"
          x1={56.3982}
          x2={50.0755}
          y1={7.50619}
          y2={22.2318}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFADAD" />
          <stop offset={1} stopColor="#FE7474" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLowerRate);
const Memo = memo(ForwardRef);
export default Memo;
