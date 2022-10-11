// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiVaLoan = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={60}
      height={74}
      fill="none"
      viewBox="0 0 60 74"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M47.2311 67.3215L10.9844 11.7548L17.6084 1L58.293 61.1099L47.2311 67.3215Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M39.2383 20.0224L52.1754 2L57.1253 12.5529L45.8179 30.1595L39.2383 20.0224Z"
        clipRule="evenodd"
        fill="#FDA784"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M36.2383 19.0224L49.1754 1L54.1253 11.5529L42.8179 29.1595L36.2383 19.0224Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M23.0711 40.1124L31.3222 52.7005L18.2165 73.7028L15.112 64.6213L4 66.7557L23.0711 40.1124Z"
        clipRule="evenodd"
        fill="#FDA784"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M20.0711 39.1124L28.3222 51.7005L15.2165 72.7028L12.112 63.6213L1 65.7557L20.0711 39.1124Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.8}
        fill="none"
        stroke="#0D1C43"
        d="M21.9776 54.1631C22.5211 53.3573 23.0209 52.3266 20.7378 50.7866C18.4546 49.2466 17.8205 50.1867 17.277 50.9925C15.8275 53.1414 17.0363 53.9567 18.245 54.772C20.1252 56.0402 20.1189 57.2084 19.0787 58.4608C17.8574 59.9819 16.7902 59.6529 15.5273 58.8011C13.5128 57.4422 13.4722 56.6333 14.2438 55.1996"
      />
      <path strokeLinecap="round" strokeWidth={1.8} fill="none" stroke="#0D1C43" d="M20.7411 50.7865L21.8451 49.1497" />
      <path strokeLinecap="round" strokeWidth={1.8} fill="none" stroke="#0D1C43" d="M18.1131 54.6814L19.5795 52.5073" />
      <path strokeLinecap="round" strokeWidth={1.8} fill="none" stroke="#0D1C43" d="M14.308 60.3221L16.7709 56.6707" />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M17.6055 1H49.1723L42.101 10.946H24.3395L17.6055 1Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiVaLoan);
const Memo = memo(ForwardRef);
export default Memo;
