// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDollarOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.29545}
        fill="none"
        stroke="currentColor"
        d="M8.81738 2V16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.29545}
        fill="none"
        stroke="currentColor"
        d="M12 4.54541H7.22727C6.63656 4.54541 6.07005 4.78007 5.65235 5.19776C5.23466 5.61546 5 6.18197 5 6.77268C5 7.36339 5.23466 7.92991 5.65235 8.3476C6.07005 8.7653 6.63656 8.99996 7.22727 8.99996H10.4091C10.9998 8.99996 11.5663 9.23461 11.984 9.65231C12.4017 10.07 12.6364 10.6365 12.6364 11.2272C12.6364 11.8179 12.4017 12.3845 11.984 12.8021C11.5663 13.2198 10.9998 13.4545 10.4091 13.4545H5"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDollarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
