// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMonitor = (props: SvgIconProps) => {
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
      <path d="M13 48H81V59C81 60.6569 79.6569 62 78 62H16C14.3431 62 13 60.6569 13 59V48Z" fill="#FFADAD" />
      <mask
        id="mask0_2554_789"
        width={68}
        height={14}
        x={13}
        y={48}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path d="M13 48H81V59C81 60.6569 79.6569 62 78 62H16C14.3431 62 13 60.6569 13 59V48Z" fill="#FFADAD" />
      </mask>
      <g mask="url(#mask0_2554_789)">
        <path
          fillRule="evenodd"
          d="M13 48C13 48 81 48 81 62C47 62 13 62 13 62V48Z"
          clipRule="evenodd"
          fill="url(#paint0_linear_2554_789)"
        />
      </g>
      <rect width={69.0411} height={47.6712} x={17} y={10} strokeWidth={2.5} fill="none" stroke="#11275E" rx={6} />
      <path
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M42.8356 57.6713V63.0137L39.0005 66.4482C37.77 67.5502 38.5495 69.5891 40.2013 69.5891H62.1936C63.8738 69.5891 64.6378 67.4909 63.351 66.4105L59.7945 63.4247V57.6713"
      />
      <path strokeWidth={2.5} fill="none" stroke="#11275E" d="M17 43.2877H86.0411" />
      <path strokeLinecap="round" strokeWidth={2.5} fill="none" stroke="#11275E" d="M45.356 50.274H57.2738" />
      <defs>
        <linearGradient
          id="paint0_linear_2554_789"
          x1={70.613}
          x2={65.6872}
          y1={47.3924}
          y2={67.6547}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFADAD" />
          <stop offset={1} stopColor="#FE7474" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMonitor);
const Memo = memo(ForwardRef);
export default Memo;
