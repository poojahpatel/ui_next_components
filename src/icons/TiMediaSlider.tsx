// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMediaSlider = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={227}
      height={14}
      fill="none"
      viewBox="0 0 227 14"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="#018270"
        d="M2.91667 2.66583C2.91667 2.27025 3.35429 2.03133 3.68705 2.24524L10.4291 6.57941C10.7352 6.77623 10.7352 7.22377 10.4291 7.42059L3.68705 11.7548C3.3543 11.9687 2.91667 11.7297 2.91667 11.3342V2.66583Z"
      />
      <rect width={206} height={3} x={21} y={5.5} fill="#E7E9E9" />
      <rect width={85} height={3} x={21} y={5.5} fill="#018270" />
      <path
        d="M113 7C113 9.20914 111.209 11 109 11C106.791 11 105 9.20914 105 7C105 4.79086 106.791 3 109 3C111.209 3 113 4.79086 113 7Z"
        fill="#018270"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMediaSlider);
const Memo = memo(ForwardRef);
export default Memo;
