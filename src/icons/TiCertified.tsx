// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCertified = (props: SvgIconProps) => {
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
      <ellipse
        cx={50.6968}
        cy={31.4848}
        stroke="#11275E"
        strokeWidth={2.5}
        fill="none"
        rx={24.6966}
        ry={25.4848}
        transform="rotate(6 50.6968 31.4848)"
      />
      <path
        fillRule="evenodd"
        d="M36.5093 55.9187C35.5108 56.4892 34.6191 57.9739 34.6191 59.1238V71.5132C34.6191 73.2249 36.6296 74.1457 37.9256 73.0275L46.6716 65.4819C47.4396 64.8194 48.5819 64.8366 49.3295 65.5219L57.2943 72.8229C58.5745 73.9965 60.6384 73.0954 60.6425 71.3586C60.6524 67.2 60.6604 61.2831 60.6358 58.5868C60.6324 58.2085 60.5352 57.8274 60.2584 57.5694C57.896 55.3675 51.9734 59.5969 46.7558 59.5969C41.2384 59.5969 40.4502 53.8168 36.5093 55.9187Z"
        clipRule="evenodd"
        fill="#FFADAD"
      />
      <path
        fillRule="evenodd"
        d="M34.6191 56.9636V71.4495C34.6191 73.1716 36.6508 74.0919 37.9459 72.957C41.5225 69.8231 46.8538 65.1795 48.0184 64.32C48.8576 60.9105 46.7558 59.5969 46.7558 59.5969C41.7639 59.5969 40.4502 53.8168 36.5093 55.9187C34.6702 56.9696 34.6191 56.9636 34.6191 56.9636Z"
        clipRule="evenodd"
        fill="url(#paint0_linear_2554_809)"
      />
      <path
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M37.772 52.2346V64.2672C37.772 66.9656 40.9411 68.417 42.9842 66.6543L48.3406 62.0332C49.9547 60.6406 52.3556 60.6768 53.9271 62.1173L58.4991 66.3083C60.5213 68.162 63.7822 66.7275 63.7822 63.9842V53.2855"
      />
      <circle cx={50.9083} cy={31.7415} r={18.9166} strokeWidth={2.5} fill="none" stroke="#11275E" />
      <path
        fillRule="evenodd"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M51.3854 37.364C51.0981 37.1659 50.7182 37.1659 50.4309 37.364L46.6952 39.94C46.0419 40.3905 45.1856 39.7684 45.4122 39.0079L46.7078 34.659C46.8074 34.3245 46.69 33.9632 46.4128 33.7512L42.8085 30.9944C42.1782 30.5123 42.5052 29.5057 43.2985 29.4861L47.8349 29.3744C48.1838 29.3658 48.4911 29.1426 48.6071 28.8134L50.1152 24.5336C50.3789 23.7851 51.4374 23.7851 51.7011 24.5336L53.2091 28.8134C53.3251 29.1426 53.6325 29.3658 53.9814 29.3744L58.5177 29.4861C59.311 29.5057 59.6381 30.5123 59.0078 30.9944L55.4035 33.7512C55.1262 33.9632 55.0088 34.3245 55.1085 34.659L56.4041 39.0079C56.6306 39.7684 55.7743 40.3905 55.121 39.94L51.3854 37.364Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2554_809"
          x1={46.1393}
          x2={32.7463}
          y1={54.5722}
          y2={62.1243}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE7474" />
          <stop offset={1} stopColor="#FFADAD" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCertified);
const Memo = memo(ForwardRef);
export default Memo;
