// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRedoOutlined = (props: SvgIconProps) => {
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
        d="M11.3 3L13.5 5.2L11.3 7.4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.5 5.20001H6.9C4.46973 5.20001 2.5 7.00548 2.5 9.23335C2.5 11.4612 4.46973 13.2667 6.9 13.2667H12.7667"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRedoOutlined);
const Memo = memo(ForwardRef);
export default Memo;
