// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarClockOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={82}
      height={76}
      fill="none"
      viewBox="0 0 82 76"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect
        width={66}
        height={57.2}
        x={1.7998}
        y={6.2998}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        rx={6.6}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M2.34961 19.5H67.7996"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M10.0498 30.4999C10.0498 29.8924 10.5423 29.3999 11.1498 29.3999H17.7498C18.3573 29.3999 18.8498 29.8924 18.8498 30.4999V35.9999C18.8498 36.6074 18.3573 37.0999 17.7498 37.0999H11.1498C10.5423 37.0999 10.0498 36.6074 10.0498 35.9999V30.4999Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M29.8496 30.4999C29.8496 29.8924 30.3421 29.3999 30.9496 29.3999H37.5496C38.1571 29.3999 38.6496 29.8924 38.6496 30.4999V35.9999C38.6496 36.6074 38.1571 37.0999 37.5496 37.0999H30.9496C30.3421 37.0999 29.8496 36.6074 29.8496 35.9999V30.4999Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M49.6498 30.4999C49.6498 29.8924 50.1423 29.3999 50.7498 29.3999H57.3498C57.9573 29.3999 58.4498 29.8924 58.4498 30.4999V35.9999C58.4498 36.6074 57.9573 37.0999 57.3498 37.0999H50.7498C50.1423 37.0999 49.6498 36.6074 49.6498 35.9999V30.4999Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M10.0498 46.9999C10.0498 46.3924 10.5423 45.8999 11.1498 45.8999H17.7498C18.3573 45.8999 18.8498 46.3924 18.8498 46.9999V52.4999C18.8498 53.1074 18.3573 53.5999 17.7498 53.5999H11.1498C10.5423 53.5999 10.0498 53.1074 10.0498 52.4999V46.9999Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M29.8496 46.9999C29.8496 46.3924 30.3421 45.8999 30.9496 45.8999H37.5496C38.1571 45.8999 38.6496 46.3924 38.6496 46.9999V52.4999C38.6496 53.1074 38.1571 53.5999 37.5496 53.5999H30.9496C30.3421 53.5999 29.8496 53.1074 29.8496 52.4999V46.9999Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M19.3996 1.8999V9.5999"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#2D5ACC"
        d="M50.1998 1.8999V9.5999"
      />
      <circle
        cx={59.9998}
        cy={54.6999}
        r={19.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF5E5E"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF5E5E"
        d="M58.8998 46.45V56.9H71.5498"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarClockOutlined);
const Memo = memo(ForwardRef);
export default Memo;
