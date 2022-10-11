// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAccountDetailsOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        fill="none"
        stroke="currentColor"
        d="M8.84916 6.97165C9.5521 7.67459 9.5521 8.81429 8.84916 9.51723C8.14621 10.2202 7.00652 10.2202 6.30358 9.51723C5.60063 8.81429 5.60063 7.67459 6.30358 6.97165C7.00652 6.26871 8.14621 6.26871 8.84916 6.97165Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        fill="none"
        stroke="currentColor"
        d="M12.4336 8.04445H15.1909"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        fill="none"
        stroke="currentColor"
        d="M14.3536 11.2445H12.4336"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        fill="none"
        stroke="currentColor"
        d="M10.4522 13.6445C10.3122 13.2933 10.0962 12.9781 9.8186 12.7213C9.349 12.2861 8.73299 12.0445 8.09299 12.0445H7.0594C6.4194 12.0445 5.8034 12.2861 5.3338 12.7213C5.0562 12.9781 4.8402 13.2933 4.7002 13.6445"
      />
      <rect width={17} height={16} x={1.5} y={2} strokeWidth={2} rx={3.6} fill="none" stroke="currentColor" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAccountDetailsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
