// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleClosingTagOutlined = (props: SvgIconProps) => {
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
        d="M9.22179 7.05556L7.77734 9.94445"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.3887 7.05556L12.8331 8.5L11.3887 9.94445"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.61046 9.94445L4.16602 8.5L5.61046 7.05556"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.0962 3.90381C15.6346 6.44222 15.6346 10.5578 13.0962 13.0962C10.5578 15.6346 6.44221 15.6346 3.90381 13.0962C1.3654 10.5578 1.3654 6.44221 3.90381 3.90381C6.44222 1.3654 10.5578 1.3654 13.0962 3.90381"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleClosingTagOutlined);
const Memo = memo(ForwardRef);
export default Memo;
