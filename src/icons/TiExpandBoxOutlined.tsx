// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiExpandBoxOutlined = (props: SvgIconProps) => {
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
        d="M9.66667 3H13M13 3V6.33333M13 3L6.88896 9.11111M7.58333 4.66667H4.66667C3.74619 4.66667 3 5.41286 3 6.33333V11.3333C3 12.2538 3.74619 13 4.66667 13H9.66667C10.5871 13 11.3333 12.2538 11.3333 11.3333V8.41667"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiExpandBoxOutlined);
const Memo = memo(ForwardRef);
export default Memo;
