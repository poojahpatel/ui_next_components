// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLinkAltOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M8.83988 6.3136V6.3136C10.0399 7.51358 10.0399 9.37354 8.83988 10.5735L7.15991 12.2535C5.95993 13.4535 4.09996 13.4535 2.89998 12.2535C1.70001 11.0535 1.70001 9.19355 2.89998 7.99357L4.39996 6.55359"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M7.15975 9.83988V9.83988C5.95977 8.6399 5.95977 6.77993 7.15975 5.57995L8.83972 3.89998C10.0397 2.70001 11.8997 2.70001 13.0996 3.89998C14.2996 5.09996 14.2996 6.95993 13.0996 8.15991L11.5997 9.59988"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLinkAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
