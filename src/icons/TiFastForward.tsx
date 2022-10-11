// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFastForward = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        d="M18.6118 22.3656C16.6147 21.0934 14 22.5279 14 24.8958V54.7239C14 57.111 16.6526 58.5419 18.6475 57.2311L41.6965 42.0852C43.5151 40.8901 43.4962 38.217 41.6608 37.0478L18.6118 22.3656Z"
        clipRule="evenodd"
        fill="#DCEBFA"
      />
      <mask
        id="mask0_2554_799"
        width={30}
        height={37}
        x={14}
        y={21}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          fillRule="evenodd"
          d="M18.6118 22.3656C16.6147 21.0934 14 22.5279 14 24.8958V54.7239C14 57.111 16.6526 58.5419 18.6475 57.2311L41.6965 42.0852C43.5151 40.8901 43.4962 38.217 41.6608 37.0478L18.6118 22.3656Z"
          clipRule="evenodd"
          fill="#DCEBFA"
        />
      </mask>
      <g mask="url(#mask0_2554_799)">
        <path
          fillRule="evenodd"
          d="M18.6385 22.4521C16.6429 21.151 14 22.5829 14 24.9651V56.44C14 57.4709 15.371 57.8275 15.8733 56.9272L30.7143 30.3253L18.6385 22.4521Z"
          clipRule="evenodd"
          fill="#DCEBFA"
        />
      </g>
      <path
        fillRule="evenodd"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M28.2526 17.839C25.7577 16.193 22.4336 17.9823 22.4336 20.9713V58.639C22.4336 61.6524 25.8062 63.4367 28.2975 61.7413L56.4018 42.6147C58.6093 41.1124 58.5858 37.8504 56.357 36.38L28.2526 17.839Z"
        clipRule="evenodd"
      />
      <path
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M52.4541 45.3608V58.6389C52.4541 60.7114 54.1342 62.3915 56.2067 62.3915C56.9597 62.3915 57.6954 62.1649 58.318 61.7412L86.4223 42.6146C88.1357 41.4486 88.5794 39.1144 87.4134 37.401C87.138 36.9964 86.7861 36.6495 86.3775 36.38L58.2732 17.8389C56.5432 16.6976 54.2156 17.1748 53.0743 18.9048C52.6698 19.518 52.4541 20.2366 52.4541 20.9713V20.9713V33.835V33.835"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2554_799"
          x1={28.1612}
          x2={8.78844}
          y1={17.6546}
          y2={24.3666}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFADAD" />
          <stop offset={1} stopColor="#FE7474" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFastForward);
const Memo = memo(ForwardRef);
export default Memo;
