// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSendOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M13.4996 2.5L6.34961 9.65"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M13.5 2.5L9.19998 14.7858C9.11022 15.0422 8.75303 15.0568 8.64268 14.8085L6.39686 9.75544C6.3667 9.68757 6.31243 9.6333 6.24456 9.60314L1.19148 7.35733C0.943192 7.24697 0.957766 6.88978 1.21422 6.80002L13.5 2.5Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSendOutlined);
const Memo = memo(ForwardRef);
export default Memo;
