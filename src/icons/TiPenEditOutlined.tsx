// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPenEditOutlined = (props: SvgIconProps) => {
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
        d="M8.5 14H14.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.474 3.99754C10.7645 3.70709 11.1584 3.54392 11.5691 3.54392C11.7725 3.54392 11.9739 3.58398 12.1618 3.66181C12.3497 3.73964 12.5205 3.85372 12.6643 3.99754C12.8081 4.14135 12.9222 4.31208 13 4.49998C13.0778 4.68789 13.1179 4.88928 13.1179 5.09266C13.1179 5.29605 13.0778 5.49744 13 5.68534C12.9222 5.87324 12.8081 6.04397 12.6643 6.18779L6.42034 13.2699L3.5 14L4.23008 11.0797L10.474 3.99754Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPenEditOutlined);
const Memo = memo(ForwardRef);
export default Memo;
