// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPersonColorOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={61}
      height={66}
      fill="none"
      viewBox="0 0 61 66"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        d="M21.1523 34.9895L4.7575 42.6233C4.07126 42.9429 3.59701 43.5922 3.50145 44.3432L1.84234 57.3809C1.39541 60.893 4.13225 64.0002 7.67273 64.0002H53.3786C56.9191 64.0002 59.6559 60.893 59.209 57.3809L57.5532 44.3692C57.4558 43.6041 56.9656 42.9456 56.2607 42.6328L39.0346 34.9895"
      />
      <path
        fillRule="evenodd"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        d="M17.711 8.06968C16.834 8.90198 16.3374 10.058 16.3374 11.267V21.5173C16.3374 22.5139 16.6751 23.4811 17.2954 24.2611L21.1264 29.0782C21.2761 29.2664 21.3576 29.4998 21.3576 29.7403V44.0333C21.3576 44.7737 22.0952 45.2876 22.7897 45.0313L29.7347 42.4682C29.971 42.381 30.2305 42.3804 30.4672 42.4667L37.5286 45.0395C38.2224 45.2923 38.9565 44.7785 38.9565 44.04V29.7337C38.9565 29.4973 39.0353 29.2675 39.1805 29.0808L42.9359 24.25C43.5374 23.4764 43.8639 22.5245 43.8639 21.5446V11.2533C43.8639 10.0523 43.3738 8.9033 42.5071 8.07198L36.9033 2.69721C36.0825 1.91 34.9893 1.47046 33.852 1.47046H26.4232C25.294 1.47046 24.2078 1.90382 23.3888 2.68117L17.711 8.06968Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPersonColorOutlined);
const Memo = memo(ForwardRef);
export default Memo;
