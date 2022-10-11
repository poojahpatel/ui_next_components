// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckRateOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={74}
      height={45}
      fill="none"
      viewBox="0 0 74 45"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M36.5234 8.31835H50.5017C50.9813 8.31835 51.37 7.92588 51.37 7.44173V4.39518C51.37 3.91103 51.7588 3.51855 52.2383 3.51855C52.4557 3.51855 52.6651 3.60087 52.8253 3.74925L71.0298 20.6129C71.7365 21.2676 71.7837 22.3766 71.1353 23.0901C71.1013 23.1275 71.0657 23.1635 71.0286 23.1978L53.2588 39.6276C52.9052 39.9546 52.356 39.9302 52.0321 39.5731C51.8855 39.4115 51.8041 39.2003 51.8041 38.9811V36.3703C51.8041 35.8862 51.4154 35.4937 50.9359 35.4937H37.1218V35.4937"
      />
      <ellipse cx={22.0221} cy={22.3442} stroke="#0FA290" strokeWidth={3} fill="none" rx={19.9703} ry={20.1623} />
      <path
        strokeLinecap="round"
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M14.208 23.2209L18.2664 27.3183C18.7794 27.8363 19.6177 27.8323 20.1258 27.3095L30.4882 16.6462"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckRateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
