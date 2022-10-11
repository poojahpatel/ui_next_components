// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={55}
      fill="none"
      viewBox="0 0 55 55"
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
        d="M4 15C4 12.2386 6.23858 10 9 10H46C48.7614 10 51 12.2386 51 15V42C51 44.7614 48.7614 47 46 47H9C6.23858 47 4 44.7614 4 42V15Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" stroke="#0F2DA2" d="M4 17.5H51" />
      <rect
        width={6}
        height={6}
        x={12}
        y={24}
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
        x={24}
        y={24}
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
        x={36}
        y={24}
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
        x={12}
        y={36}
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
        x={24}
        y={36}
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
        x={36}
        y={36}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        rx={1}
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" stroke="#0F2DA2" d="M15 7V12" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" stroke="#0F2DA2" d="M40 7V12" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
