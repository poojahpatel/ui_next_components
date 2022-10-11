// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMicCircular = (props: SvgIconProps) => {
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
      <circle cx={40} cy={40} r={40} opacity={0.1} fill="#018270" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="#018270"
        stroke="#018270"
        d="M40.1267 22.5C38.8006 22.5 37.5289 23.0028 36.5912 23.8979C35.6535 24.7929 35.1267 26.0069 35.1267 27.2727V39.9999C35.1267 41.2657 35.6535 42.4797 36.5912 43.3747C37.5289 44.2698 38.8006 44.7726 40.1267 44.7726C41.4528 44.7726 42.7246 44.2698 43.6622 43.3747C44.5999 42.4797 45.1267 41.2657 45.1267 39.9999V27.2727C45.1267 26.0069 44.5999 24.7929 43.6622 23.8979C42.7246 23.0028 41.4528 22.5 40.1267 22.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M51.7928 36.8184V40.0002C51.7928 42.9537 50.5636 45.7863 48.3757 47.8747C46.1878 49.9632 43.2203 51.1365 40.1261 51.1365C37.0319 51.1365 34.0645 49.9632 31.8766 47.8747C29.6886 45.7863 28.4595 42.9537 28.4595 40.0002V36.8184"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M40.1267 51.1367V57.5003"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="#018270"
        d="M33.4595 57.5H46.7928"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMicCircular);
const Memo = memo(ForwardRef);
export default Memo;
