// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMobileOutlined = (props: SvgIconProps) => {
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
        d="M12 2H6C4.61929 2 3.5 3.11929 3.5 4.5V13.5C3.5 14.8807 4.61929 16 6 16H12C13.3807 16 14.5 14.8807 14.5 13.5V4.5C14.5 3.11929 13.3807 2 12 2Z"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M7 13.5H11" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMobileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
