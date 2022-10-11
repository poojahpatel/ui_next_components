// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiApplyOnlineOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={71}
      height={48}
      fill="none"
      viewBox="0 0 71 48"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path strokeLinecap="round" strokeWidth={3} fill="none" stroke="#0FA290" d="M17.7402 45.8507H40.6478" />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M56.8704 26.1364V32.4091C56.8704 35.8735 54.0823 38.6819 50.6431 38.6819H7.96754C4.52829 38.6819 1.74023 35.8735 1.74023 32.4091V8.66238C1.74023 5.19804 4.52829 2.38965 7.96754 2.38965H50.6431C54.0823 2.38965 56.8704 5.19804 56.8704 8.66238V14.9351V26.1364Z"
        clipRule="evenodd"
      />
      <path strokeWidth={3} fill="none" stroke="#0FA290" d="M29.3044 38.6819V45.8507" />
      <path strokeWidth={3} fill="none" stroke="#0FA290" d="M1.74023 31.7371H57.7665" />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M48.7187 12.4335C48.3901 12.3497 48.0924 12.6497 48.1786 12.9777L52.2875 28.5923C52.4952 29.3816 53.5674 29.498 53.9395 28.7716L56.4377 23.8962L64.6221 31.9571C65.6209 32.9408 67.2347 32.9057 68.1898 31.8796C69.0848 30.9179 69.0781 29.4262 68.1744 28.4726L60.4409 20.3118L64.9875 17.7675C65.5135 17.4731 65.4105 16.6875 64.8265 16.5387L48.7187 12.4335Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiApplyOnlineOutlined);
const Memo = memo(ForwardRef);
export default Memo;
