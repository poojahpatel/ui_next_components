// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRateTrackerOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={70}
      height={51}
      fill="none"
      viewBox="0 0 70 51"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M2.11719 26.5502C2.11719 25.3139 3.11937 24.3118 4.35562 24.3118H9.7359C10.9721 24.3118 11.9743 25.3139 11.9743 26.5502V45.372C11.9743 46.6083 10.9721 47.6105 9.7359 47.6105H4.35562C3.11937 47.6105 2.11719 46.6083 2.11719 45.372V26.5502Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M17.3516 14.9008C17.3516 13.6645 18.3537 12.6624 19.59 12.6624H24.9703C26.2065 12.6624 27.2087 13.6645 27.2087 14.9008V45.372C27.2087 46.6082 26.2065 47.6104 24.9703 47.6104H19.59C18.3537 47.6104 17.3516 46.6082 17.3516 45.372V14.9008Z"
        clipRule="evenodd"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M43.3376 38.1204V46.2609C43.3376 47.5012 42.3457 48.5066 41.1222 48.5066H35.6959C35.3592 48.5066 33.4805 47.5012 33.4805 46.2609V4.15484C33.4805 2.9146 34.4723 1.90918 35.6959 1.90918H33.9221H41.1222C42.3457 1.90918 43.3376 2.9146 43.3376 4.15484V14.541"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M44.2317 14.1083C39.6545 16.1635 36.4668 20.7615 36.4668 26.104C36.4668 33.3626 42.3511 39.2469 49.6097 39.2469V39.2469C56.8683 39.2469 62.7525 33.3626 62.7525 26.104C62.7525 18.8454 56.8683 12.9612 49.6097 12.9612"
      />
      <circle
        cx={49.6098}
        cy={26.1039}
        r={3.58442}
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
      />
      <path fillRule="evenodd" d="M62.752 26.1041H67.5312H62.752Z" clipRule="evenodd" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M62.752 26.1041H67.5312"
      />
      <path fillRule="evenodd" d="M49.6109 39.3264V44.026V39.3264Z" clipRule="evenodd" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M49.6109 39.3264V44.026"
      />
      <path fillRule="evenodd" d="M31.6875 26.1041H36.4667H31.6875Z" clipRule="evenodd" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M31.6875 26.1041H36.4667"
      />
      <path fillRule="evenodd" d="M49.6109 8.18188V12.9611V8.18188Z" clipRule="evenodd" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M49.6109 8.18188V12.9611"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRateTrackerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
