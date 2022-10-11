// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFilterOutlined = (props: SvgIconProps) => {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.8041 3.07286C16.079 2.74788 15.848 2.25 15.4223 2.25H2.57765C2.15204 2.25 1.92104 2.74788 2.19587 3.07286L7.38179 9.20521C7.45812 9.29547 7.5 9.40986 7.5 9.52807V13.941C7.5 14.1304 7.607 14.3035 7.77639 14.3882L9.77639 15.3882C10.1088 15.5544 10.5 15.3127 10.5 14.941V9.52807C10.5 9.40986 10.5419 9.29547 10.6182 9.20521L15.8041 3.07286Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFilterOutlined);
const Memo = memo(ForwardRef);
export default Memo;
