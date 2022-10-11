// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlert = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M11.6235 3.94265L17.751 14.6664C18.4631 15.9129 17.563 17.4641 16.1277 17.4641H3.87271C2.43663 17.4641 1.53659 15.9129 2.24942 14.6664L8.37694 3.94265C9.09457 2.68578 10.9059 2.68578 11.6235 3.94265Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M10.0002 11.1279V8.13574"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M10.0002 13.5278V13.7358"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlert);
const Memo = memo(ForwardRef);
export default Memo;
