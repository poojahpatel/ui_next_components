// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleBraceBracketOutlined = (props: SvgIconProps) => {
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
        d="M5.83312 5.11108C5.43445 5.11108 5.11089 5.43464 5.11089 5.83331V7.27775L4.38867 7.99997L5.11089 8.7222V10.1666C5.11089 10.5653 5.43445 10.8889 5.83312 10.8889"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.166 10.8889C10.5647 10.8889 10.8882 10.5653 10.8882 10.1666V8.7222L11.6105 7.99997L10.8882 7.27775V5.83331C10.8882 5.43464 10.5647 5.11108 10.166 5.11108"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleBraceBracketOutlined);
const Memo = memo(ForwardRef);
export default Memo;
