// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiUndoAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M8.5 4.70711C8.5 4.26165 7.96143 4.03857 7.64645 4.35355L5.35355 6.64645C5.15829 6.84171 5.15829 7.15829 5.35355 7.35355L7.64645 9.64645" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M7.64645 9.64645L5.35355 7.35355C5.15829 7.15829 5.15829 6.84171 5.35355 6.64645L7.64645 4.35355C7.96143 4.03857 8.5 4.26165 8.5 4.70711V9.29289C8.5 9.73835 7.96143 9.96143 7.64645 9.64645Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M5.5 6.87134H13.2143C16.0549 6.87134 18.3571 8.98162 18.3571 11.5856C18.3571 14.1896 16.0549 16.2999 13.2143 16.2999H6.35714"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M6.5 19H12.5"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiUndoAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
