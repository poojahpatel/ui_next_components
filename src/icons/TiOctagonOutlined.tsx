// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiOctagonOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M8.03871 2.979H16.3187L22.1787 8.839V17.119L16.3187 22.979H8.03871L2.17871 17.119V8.839L8.03871 2.979Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiOctagonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
