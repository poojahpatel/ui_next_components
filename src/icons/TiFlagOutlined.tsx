// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFlagOutlined = (props: SvgIconProps) => {
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
        d="M1.77783 3.98993L7.8587 14.2221"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.90584 10.9487L2.5304 5.26892C4.67643 1.59314 7.97974 4.33192 10.8466 1.77768L14.2221 7.4575C11.3319 9.97239 8.05188 7.27296 5.90584 10.9487Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFlagOutlined);
const Memo = memo(ForwardRef);
export default Memo;
