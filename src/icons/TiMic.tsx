// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMic = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="currentColor"
        d="M20.1267 2.5C18.8006 2.5 17.5289 3.00284 16.5912 3.89789C15.6535 4.79295 15.1267 6.0069 15.1267 7.2727V19.9999C15.1267 21.2657 15.6535 22.4797 16.5912 23.3747C17.5289 24.2698 18.8006 24.7726 20.1267 24.7726C21.4528 24.7726 22.7246 24.2698 23.6622 23.3747C24.5999 22.4797 25.1267 21.2657 25.1267 19.9999V7.2727C25.1267 6.0069 24.5999 4.79295 23.6622 3.89789C22.7246 3.00284 21.4528 2.5 20.1267 2.5V2.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="currentColor"
        d="M31.7928 16.8184V20.0002C31.7928 22.9537 30.5636 25.7863 28.3757 27.8747C26.1878 29.9632 23.2203 31.1365 20.1261 31.1365C17.0319 31.1365 14.0645 29.9632 11.8766 27.8747C9.68864 25.7863 8.45947 22.9537 8.45947 20.0002V16.8184"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="currentColor"
        d="M20.1267 31.1367V37.5003"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        fill="none"
        stroke="currentColor"
        d="M13.4595 37.5H26.7928"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMic);
const Memo = memo(ForwardRef);
export default Memo;
