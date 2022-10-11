// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckedDocumentOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={56}
      fill="none"
      viewBox="0 0 55 56"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M4 7.39279C4 5.30516 5.69236 3.61279 7.78 3.61279H40.22C42.3076 3.61279 44 5.30516 44 7.39279V43.8328C44 45.9204 42.3076 47.6128 40.22 47.6128H7.78C5.69236 47.6128 4 45.9204 4 43.8328V7.39279Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M22 14H38.2168"
      />
      <rect
        width={6}
        height={6}
        x={11}
        y={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        rx={1}
      />
      <rect
        width={6}
        height={6}
        x={11}
        y={29}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        rx={1}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M22 19H34.2168"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M22 29H38.2168"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M22 34H34.2168"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M42 37C46.971 37 51 41.029 51 46C51 50.971 46.971 55 42 55C37.029 55 33 50.971 33 46C33 41.029 37.029 37 42 37Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M38 47.1739L40.087 49.2609L46.3478 43"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckedDocumentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
