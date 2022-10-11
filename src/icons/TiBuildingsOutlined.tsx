// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBuildingsOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.70455 2.25H8.38637C9.74197 2.25 10.8409 3.34893 10.8409 4.70455V15.75H4.0909C3.0742 15.75 2.25 14.9258 2.25 13.909V4.70455C2.25 3.34893 3.34893 2.25 4.70455 2.25Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.9432 5.93164H13.2957C14.6513 5.93164 15.7502 7.03057 15.7502 8.38618V13.9089C15.7502 14.9257 14.9261 15.7498 13.9093 15.7498H10.6875"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M5.31787 5.31836H7.77242" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M13.9092 9H15.1364" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M13.9092 11.4541H15.1364" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M5.31787 7.77283H7.77242" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M5.31787 10.2272H7.77242" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBuildingsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
