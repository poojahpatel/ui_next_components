// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPencilOutlined = (props: SvgIconProps) => {
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
        d="M9.12305 3.6843L12.3125 6.87472"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2 14L2.31459 11.0361C2.35008 10.7017 2.57079 10.2386 2.80975 9.99957L10.2711 2.53585C10.9875 1.81924 12.1532 1.82349 12.8655 2.53598L13.4604 3.13107C14.1769 3.84775 14.1828 5.00375 13.4605 5.72627L5.99917 13.19C5.76119 13.428 5.28827 13.6508 4.96296 13.6853L2 14Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPencilOutlined);
const Memo = memo(ForwardRef);
export default Memo;
