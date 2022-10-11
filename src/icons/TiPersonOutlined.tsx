// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPersonOutlined = (props: SvgIconProps) => {
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
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16 16C16 14.7921 14.5566 10.6031 9.00022 10.6031C3.44383 10.6031 2 14.7921 2 16"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.069 2C11.1898 2 12.909 3.86905 12.909 6.17459C12.909 8.48014 11.1898 10.3491 9.069 10.3491C6.94823 10.3491 5.229 8.48014 5.229 6.17459C5.229 3.86905 6.94823 2 9.069 2Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPersonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
