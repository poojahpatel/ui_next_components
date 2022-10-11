// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeDollar = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={66}
      height={67}
      fill="none"
      viewBox="0 0 66 67"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M63.606 28.4601C64.8737 29.6316 65.5946 31.2794 65.5946 33.0055V59.8671C65.5946 63.2853 62.8237 66.0562 59.4055 66.0562H12.1891C8.77094 66.0562 6 63.2853 6 59.8671V33.0055C6 31.2794 6.72088 29.6316 7.98862 28.4601L31.5969 6.64362C33.9684 4.45209 37.6262 4.45208 39.9978 6.64362L63.606 28.4601Z"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <path
        fillRule="evenodd"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M58.8052 26.0601C60.0729 27.2316 60.7938 28.8794 60.7938 30.6055V57.4671C60.7938 60.8852 58.0229 63.6562 54.6048 63.6562H7.38829C3.97016 63.6562 1.19922 60.8852 1.19922 57.4671V30.6055C1.19922 28.8794 1.9201 27.2316 3.18784 26.0601L26.7961 4.2436C29.1676 2.05206 32.8255 2.05206 35.197 4.24359L58.8052 26.0601Z"
        clipRule="evenodd"
      />
      <mask
        id="mask0_3644_7224"
        width={62}
        height={64}
        x={0}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          fillRule="evenodd"
          strokeWidth={2}
          fill="white"
          stroke="white"
          d="M58.8052 26.0601C60.0729 27.2316 60.7938 28.8794 60.7938 30.6055V57.4671C60.7938 60.8852 58.0229 63.6562 54.6048 63.6562H7.38829C3.97016 63.6562 1.19922 60.8852 1.19922 57.4671V30.6055C1.19922 28.8794 1.9201 27.2316 3.18784 26.0601L26.7961 4.2436C29.1676 2.05206 32.8255 2.05206 35.197 4.24359L58.8052 26.0601Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#mask0_3644_7224)">
        <path
          strokeLinecap="round"
          strokeWidth={2}
          fill="none"
          stroke="#0D1C43"
          d="M35.3314 33.7521C35.3314 32.3635 35.0999 30.7435 31.1657 30.7435C27.2314 30.7435 27.2314 32.3635 27.2314 33.7521C27.2314 37.4549 29.3143 37.4549 31.3971 37.4549C34.6371 37.4549 35.5628 38.8435 35.3314 41.1577C35.0999 43.9349 33.5732 44.3977 31.3971 44.3977C27.9257 44.3977 27.2314 43.472 27 41.1577"
        />
        <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M31.1653 30.7435V27.923" />
        <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M31.1653 37.4548V33.7086" />
        <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M31.1653 47.1747V40.8828" />
        <circle cx={31.2308} cy={37.2308} r={15.2308} strokeWidth={2} fill="none" stroke="#0D1C43" />
      </g>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeDollar);
const Memo = memo(ForwardRef);
export default Memo;
