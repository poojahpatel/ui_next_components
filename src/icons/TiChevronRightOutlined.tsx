// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChevronRightOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
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
        d="M6 12.5L10 8.5L6 4.5"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChevronRightOutlined);
const Memo = memo(ForwardRef);
export default Memo;
