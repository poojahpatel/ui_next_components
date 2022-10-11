// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMapMarkerOutlined = (props: SvgIconProps) => {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 2.5C5.9619 2.5 3.5 4.69333 3.5 7.4C3.5 8.45778 3.88413 9.67111 4.53016 10.48L8.0633 15.2385C8.44742 15.7558 9.17817 15.8638 9.69549 15.4797C9.78728 15.4115 9.86855 15.3302 9.9367 15.2385L13.4698 10.48C14.1159 9.67111 14.5 8.47333 14.5 7.4C14.5 4.69333 12.0381 2.5 9 2.5Z"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.97542 9.03345C7.96709 9.03345 7.14209 8.24595 7.14209 7.28345C7.14209 6.32095 7.96709 5.53345 8.97542 5.53345C9.98376 5.53345 10.8088 6.32095 10.8088 7.28345C10.8088 8.24595 9.98376 9.03345 8.97542 9.03345Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMapMarkerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
