// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMultiDirectionalArrow = (props: SvgIconProps) => {
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
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M4.39999 7.59998L2 9.99996L4.39999 12.4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M7.59985 4.39999L9.99984 2L12.3998 4.39999"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M12.3998 15.6L9.99984 18L7.59985 15.6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M15.5999 7.59998L17.9998 9.99996L15.5999 12.4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M2 10H17.9999"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M10 2V17.9999"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMultiDirectionalArrow);
const Memo = memo(ForwardRef);
export default Memo;
