// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiEyeOutlined = (props: SvgIconProps) => {
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
        d="M1.5 7.72727C1.5 7.72727 3.86364 3 8 3C12.1364 3 14.5 7.72727 14.5 7.72727C14.5 7.72727 12.1364 12.4545 8 12.4545C3.86364 12.4545 1.5 7.72727 1.5 7.72727Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M8.00002 9.49956C8.97907 9.49956 9.77275 8.70588 9.77275 7.72683C9.77275 6.74778 8.97907 5.9541 8.00002 5.9541C7.02097 5.9541 6.22729 6.74778 6.22729 7.72683C6.22729 8.70588 7.02097 9.49956 8.00002 9.49956Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiEyeOutlined);
const Memo = memo(ForwardRef);
export default Memo;
