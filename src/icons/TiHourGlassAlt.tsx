// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHourGlassAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={66}
      height={71}
      fill="none"
      viewBox="0 0 66 71"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M53.6442 10.8677C53.6442 10.8677 54.1357 15.7941 51.6781 20.228C49.7618 23.6851 42.1679 31.0358 38.9152 34.1066C38.1051 34.8714 38.0731 36.1523 38.8542 36.9467C42.2461 40.3965 50.61 49.0219 52.1696 51.7574C54.1357 55.2059 53.6442 60.1324 53.6442 60.1324"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M12.9457 10.8677C12.9457 10.8677 12.4542 15.7941 14.9118 20.228C16.828 23.6851 24.422 31.0358 27.6746 34.1066C28.4848 34.8714 28.5167 36.1523 27.7356 36.9467C24.3437 40.3965 15.9799 49.0219 14.4203 51.7574C12.4542 55.2059 12.9457 60.1324 12.9457 60.1324"
      />
      <rect
        width={52.5932}
        height={8.86765}
        x={6.94922}
        y={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C43243"
        rx={4.43382}
      />
      <rect
        width={52.5932}
        height={8.86765}
        x={6.94922}
        y={60.1323}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C43243"
        rx={4.43382}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M7.93359 46.3381C7.93359 46.3381 4.49292 41.4117 4.49292 34.022C4.49292 26.6323 7.93359 21.7058 7.93359 21.7058"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M10.5 27L7.9322 21.7059L2 24"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M57.8984 21.3381C57.8984 21.3381 61.3391 26.2646 61.3391 33.6543C61.3391 41.044 57.8984 45.9705 57.8984 45.9705"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#FF8F27"
        d="M55.3301 40.6763L57.8979 45.9704L63.9996 43.9998"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHourGlassAlt);
const Memo = memo(ForwardRef);
export default Memo;
