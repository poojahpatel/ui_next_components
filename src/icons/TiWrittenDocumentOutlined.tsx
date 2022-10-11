// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWrittenDocumentOutlined = (props: SvgIconProps) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M40 35.2204V42C40 43.6569 38.6569 45 37 45H11C9.34315 45 8 43.6569 8 42V8C8 6.34315 9.34315 5 11 5H37C38.6569 5 40 6.34315 40 8V20.221V24.4903"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M13.6475 17.381L33.7782 17.2727"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M21.7588 12.4287H27.0921"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M13.6475 23.0954H33.6166"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M13.6475 28.8096H30.8258"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M13.7129 35.3369H26.8912"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M42 23L47 28"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M33 37V32L45 20L50 25L38 37H33Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWrittenDocumentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
