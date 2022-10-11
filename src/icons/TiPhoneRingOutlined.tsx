// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneRingOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.85138 6.66083L4.71631 5.45917"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.6123 5.45333V3.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.3726 6.66083L12.5076 5.45917"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.1572 13.6667H13.0201C13.629 13.6667 14.1221 13.1446 14.1221 12.5V11.9085C14.1221 11.3083 13.8312 10.75 13.3496 10.4018C12.1611 9.54367 10.4861 9 8.61209 9C6.73813 9 5.06307 9.54367 3.87456 10.4023C3.39298 10.7506 3.10205 11.3088 3.10205 11.9085V12.5C3.10205 13.1446 3.5952 13.6667 4.20406 13.6667H5.06693C5.52316 13.6667 5.89344 13.2747 5.89344 12.7917V11.9966C5.89344 11.8175 5.99317 11.6518 6.15076 11.5871C6.88139 11.2873 7.71891 11.1146 8.61209 11.1146C9.50527 11.1146 10.3428 11.2873 11.0734 11.5871C11.231 11.6518 11.3307 11.8175 11.3307 11.9966V12.7917C11.3307 13.2747 11.701 13.6667 12.1572 13.6667V13.6667Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneRingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
