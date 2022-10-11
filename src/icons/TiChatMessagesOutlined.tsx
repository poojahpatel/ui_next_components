// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatMessagesOutlined = (props: SvgIconProps) => {
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
        stroke="currentColor"
        d="M5 14C5 11.7909 6.79086 10 9 10H38.1736C40.3827 10 42.1736 11.7909 42.1736 14V30.652C42.1736 32.8611 40.3827 34.652 38.1736 34.652H18.5416L11.6506 41.7573V34.652H9C6.79086 34.652 5 32.8611 5 30.652L5 14Z"
        clipRule="evenodd"
      />
      <ellipse
        cx={14.913}
        cy={22.84}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        rx={1.91304}
        ry={1.84}
      />
      <ellipse
        cx={22.913}
        cy={22.84}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        rx={1.91304}
        ry={1.84}
      />
      <ellipse
        cx={30.913}
        cy={22.84}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        rx={1.91304}
        ry={1.84}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M42.1734 16.8586H47.7312C49.3881 16.8586 50.7312 18.2018 50.7312 19.8586V37.8574C50.7312 39.5142 49.3881 40.8574 47.7312 40.8574H45.3572V48.7712L37.8698 40.8574H24.3311C22.6742 40.8574 21.3311 39.5142 21.3311 37.8574V35.0264"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatMessagesOutlined);
const Memo = memo(ForwardRef);
export default Memo;
