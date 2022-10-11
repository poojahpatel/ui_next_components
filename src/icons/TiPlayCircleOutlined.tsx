// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPlayCircleOutlined = (props: SvgIconProps) => {
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
      <circle
        cx={9}
        cy={9}
        r={8}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M6.33337 5.45767C6.33337 5.06495 6.76535 4.82553 7.09837 5.03367L12.7661 8.57599C13.0794 8.77182 13.0794 9.22815 12.7661 9.42399L7.09837 12.9663C6.76535 13.1744 6.33337 12.935 6.33337 12.5423V5.45767Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPlayCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
