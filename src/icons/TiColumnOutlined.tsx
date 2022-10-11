// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiColumnOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.5 2.5H6.5C7.32843 2.5 8 3.17157 8 4V12C8 12.8284 7.32843 13.5 6.5 13.5H3.5C2.67157 13.5 2 12.8284 2 12V4C2 3.17157 2.67157 2.5 3.5 2.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.5 2.5H12.5C13.3284 2.5 14 3.17157 14 4V12C14 12.8284 13.3284 13.5 12.5 13.5H9.5C8.67157 13.5 8 12.8284 8 12V4C8 3.17157 8.67157 2.5 9.5 2.5Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4.14258 4.97803H5.85686" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M10.1426 4.97803H11.8569" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiColumnOutlined);
const Memo = memo(ForwardRef);
export default Memo;
