// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMicRecording = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={80}
      height={80}
      fill="none"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={40} cy={40} r={30} opacity={0.05} fill="#018270" />
      <circle cx={40} cy={40} r={40} opacity={0.1} fill="#018270" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M40.1268 22.5C38.8008 22.5 37.529 23.0028 36.5913 23.8979C35.6536 24.7929 35.1268 26.0069 35.1268 27.2727V39.9999C35.1268 41.2657 35.6536 42.4797 36.5913 43.3747C37.529 44.2698 38.8008 44.7726 40.1268 44.7726C41.4529 44.7726 42.7247 44.2698 43.6624 43.3747C44.6001 42.4797 45.1268 41.2657 45.1268 39.9999V27.2727C45.1268 26.0069 44.6001 24.7929 43.6624 23.8979C42.7247 23.0028 41.4529 22.5 40.1268 22.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M51.7929 36.8184V40.0002C51.7929 42.9537 50.5637 45.7863 48.3758 47.8747C46.1879 49.9632 43.2204 51.1365 40.1262 51.1365C37.032 51.1365 34.0646 49.9632 31.8766 47.8747C29.6887 45.7863 28.4595 42.9537 28.4595 40.0002V36.8184"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M40.1268 51.1367V57.5003"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M33.4595 57.5H46.7929"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMicRecording);
const Memo = memo(ForwardRef);
export default Memo;
