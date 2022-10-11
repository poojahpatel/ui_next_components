// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLogosOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.1304 5.34783V4C11.1304 2.89543 10.235 2 9.13043 2H4C2.89543 2 2 2.89543 2 4V9.13044C2 10.235 2.89543 11.1304 4 11.1304H6.26087"
      />
      <circle cx={11.1306} cy={10.5217} r={4.86957} strokeWidth={1.2} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLogosOutlined);
const Memo = memo(ForwardRef);
export default Memo;
