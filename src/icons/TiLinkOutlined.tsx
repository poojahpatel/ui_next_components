// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLinkOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M9.41 8.59003V8.59003C10.71 9.89003 10.71 11.905 9.41 13.205L7.59 15.025C6.29 16.325 4.275 16.325 2.975 15.025C1.675 13.725 1.675 11.71 2.975 10.41L4.6 8.85003"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M7.58999 10.41V10.41C6.28999 9.11 6.28999 7.095 7.58999 5.795L9.40999 3.975C10.71 2.675 12.725 2.675 14.025 3.975C15.325 5.275 15.325 7.29 14.025 8.59L12.4 10.15"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLinkOutlined);
const Memo = memo(ForwardRef);
export default Memo;
