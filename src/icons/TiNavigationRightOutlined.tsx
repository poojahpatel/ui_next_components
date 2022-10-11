// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNavigationRightOutlined = (props: SvgIconProps) => {
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
        d="M3.17871 11.979L22.1787 2.979L13.1787 21.979L11.1787 13.979L3.17871 11.979Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNavigationRightOutlined);
const Memo = memo(ForwardRef);
export default Memo;
