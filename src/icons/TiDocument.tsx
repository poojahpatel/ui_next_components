// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDocument = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={80}
      height={98}
      fill="none"
      viewBox="0 0 80 98"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M11 20C11 15.0294 15.0294 11 20 11H57.2105L57.5573 19.9418C57.6135 21.3912 58.8048 22.5372 60.2552 22.5372H79V87C79 91.9705 74.9706 96 70 96H20C15.0294 96 11 91.9706 11 87V20Z"
        clipRule="evenodd"
        fill="#DCEBFA"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M2 12C2 6.47715 6.47715 2 12 2H57L57.4286 19.5732C57.4683 21.201 58.7994 22.5 60.4277 22.5H78V86C78 91.5228 73.5228 96 68 96H12C6.47715 96 2 91.5228 2 86V12Z"
        clipRule="evenodd"
      />
      <path strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M57 2L78 22.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M21 28H37" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M21 50H63" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M21 59H51" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDocument);
const Memo = memo(ForwardRef);
export default Memo;
