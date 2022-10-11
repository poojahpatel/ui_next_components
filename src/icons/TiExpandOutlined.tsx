// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiExpandOutlined = (props: SvgIconProps) => {
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
        d="M10.6665 2H13.9998V5.33333"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.3335 6.66667L14.0002 2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.6667 9.33337V12C12.6667 13.1046 11.7712 14 10.6667 14H4C2.89543 14 2 13.1046 2 12V5.33338C2 4.22881 2.89543 3.33337 4 3.33337H6.66667"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiExpandOutlined);
const Memo = memo(ForwardRef);
export default Memo;
