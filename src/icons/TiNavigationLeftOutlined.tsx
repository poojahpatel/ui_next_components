// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNavigationLeftOutlined = (props: SvgIconProps) => {
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
        d="M21.1787 11.979L2.17871 2.979L11.1787 21.979L13.1787 13.979L21.1787 11.979Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNavigationLeftOutlined);
const Memo = memo(ForwardRef);
export default Memo;
