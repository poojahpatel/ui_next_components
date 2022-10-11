// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPouringBeaker = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M6.81903 17.8894L2.6852 13.7556C1.7716 12.842 1.7716 11.3617 2.6852 10.4481L8.90915 4.22412L16.3505 11.6655L10.1265 17.8894C9.21295 18.8019 7.73153 18.8019 6.81903 17.8894V17.8894Z"
      />
      <path d="M19.6609 14.9685C19.6609 14.9685 17.3223 17.506 17.3223 19.0615C17.3223 20.3474 18.3751 21.4001 19.6609 21.4001C20.9468 21.4001 21.9996 20.3474 21.9996 19.0604C21.9996 17.506 19.6609 14.9685 19.6609 14.9685Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M8.90873 4.22623L7.70459 3"
      />
      <path d="M15.8089 10.7329L2 11.2853L3.10471 14.047L6.41885 16.8088L8.62828 18.4659L14.7042 12.9423L15.8089 10.7329Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPouringBeaker);
const Memo = memo(ForwardRef);
export default Memo;
