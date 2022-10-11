// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRulerGridOutlined = (props: SvgIconProps) => {
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
        d="M5.51059 8.0002H4.27484M5.51051 10.1339L4.68668 10.1339M5.51006 12.0941H4.27431M5.51023 6.03913L4.69052 6.03501M5.51116 5.49521V12.9999C5.51116 13.5522 5.06345 13.9999 4.51116 13.9999H3C2.44772 13.9999 2 13.5522 2 12.9999V4C2 2.89543 2.89543 2 4 2L13 2C13.5523 2 14 2.44791 14 3.00019C14 3.52351 14 3.98765 14 4.51097C14 5.06325 13.5523 5.51116 13 5.51116H5.78648M7.9998 5.51058V4.27484M5.86613 5.51051V4.68668M9.96087 5.51023L9.96499 4.69052M12.0945 5.51028V4.27454"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 8V12C14 13.1046 13.1046 14 12 14H8"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRulerGridOutlined);
const Memo = memo(ForwardRef);
export default Memo;
