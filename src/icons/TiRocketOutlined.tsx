// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRocketOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.79496 7.20514L4.06445 11.9356"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.57487 8.50253L2.25779 7.95521C2.00287 7.89499 1.91321 7.57851 2.09788 7.39317L3.94057 5.55048C4.06435 5.42669 4.2323 5.35577 4.40827 5.35443L6.48581 5.33636"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4379 5.81007L13.9785 3.20863C14.1257 2.50072 13.4994 1.87445 12.7915 2.02165L10.1901 2.56228C9.42396 2.72152 8.72141 3.1009 8.16874 3.65424L6.03432 5.78799C5.22003 6.60228 4.69011 7.65812 4.52283 8.79759L4.51547 8.84643C4.40975 9.57374 4.65331 10.3077 5.17252 10.8276C5.69174 11.3468 6.42641 11.5904 7.15372 11.484L7.20256 11.4766C8.34203 11.31 9.39787 10.7795 10.2122 9.96516L12.3459 7.83141C12.8992 7.27874 13.2786 6.57619 13.4379 5.81007V5.81007Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.10254 2.95906C10.6488 4.01356 11.9863 5.35108 13.0408 6.89736"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.49707 11.4251L8.04439 13.7422C8.10461 13.9971 8.42109 14.0868 8.60643 13.9021L10.4491 12.0594C10.5729 11.9357 10.6438 11.7677 10.6452 11.5917L10.6632 9.51419"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRocketOutlined);
const Memo = memo(ForwardRef);
export default Memo;
