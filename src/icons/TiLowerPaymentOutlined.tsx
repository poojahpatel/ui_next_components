// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLowerPaymentOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={46}
      height={47}
      fill="none"
      viewBox="0 0 46 47"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M26.6408 10.7194C26.6408 9.57099 25.7643 8.2312 23.2892 8.2312C20.814 8.2312 20.1237 9.57099 20.1237 10.7194C20.0317 13.2345 21.4761 13.7818 23.4754 13.7818C25.4746 13.7818 26.737 14.8784 26.6408 16.8441C26.5401 19.0122 25.2262 19.5237 23.4754 19.5237C20.6823 19.5237 20.0307 18.4668 19.9375 16.8441"
      />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M23.2853 8.23111V5.89844" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M23.2853 13.7814V10.6831" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M23.2853 21.8203V16.6167" />
      <path
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M34.1488 7.65496C32.0837 3.69402 28.0181 1 23.3404 1C16.5725 1 11.0859 6.6396 11.0859 13.5964C11.0859 20.5532 16.5725 26.1928 23.3404 26.1928C26.2279 26.1928 28.8821 25.1663 30.9765 23.449"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M34.2035 3.07202V19.5626H29.7505C28.9487 19.5626 28.5178 20.5048 29.0423 21.1113L35.5696 28.6595C36.1236 29.3002 37.1129 29.3131 37.6835 28.6871L44.5721 21.1296C45.12 20.5284 44.6935 19.5626 43.8802 19.5626H39.0185V11.3141"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M28.4754 38.855C28.9883 38.855 31.7097 38.6516 32.3945 38.5998C32.4981 38.5919 32.5986 38.5635 32.6912 38.5162L41.0534 34.2413C42.235 33.6372 43.6819 34.0225 44.4068 35.1341V35.1341C45.209 36.3645 44.8305 38.0149 43.5722 38.7727L32.8246 45.2455C32.0164 45.7322 31.0595 45.9101 30.1304 45.7463L8.84202 41.9936V32.7781L15.4064 31.0697C18.134 30.3598 21.0216 30.5949 23.5984 31.7366L29.4336 34.3219C30.5365 34.8105 31.091 36.0544 30.717 37.2013V37.2013C30.3206 38.4173 29.0251 39.0936 27.8008 38.7237L21.3823 36.7848"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M6.98607 29.6951C8.00988 29.6951 8.83984 30.525 8.83984 31.5488V43.0036C8.83984 44.0274 8.00988 44.8574 6.98606 44.8574H2.85426C1.83044 44.8574 1.00048 44.0274 1.00048 43.0036V31.5488C1.00048 30.525 1.83044 29.6951 2.85426 29.6951L6.98607 29.6951Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLowerPaymentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
