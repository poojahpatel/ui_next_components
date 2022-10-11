// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiUndoOutlined = (props: SvgIconProps) => {
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
        d="M4.7 3L2.5 5.2L4.7 7.4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.5 5.20001H9.1C11.5303 5.20001 13.5 7.00548 13.5 9.23335C13.5 11.4612 11.5303 13.2667 9.1 13.2667H3.23333"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiUndoOutlined);
const Memo = memo(ForwardRef);
export default Memo;
