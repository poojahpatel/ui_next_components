// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPersonArrowRightOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.8146 14.4293C14.8146 13.3138 13.4816 9.44522 8.35026 9.44522C5.60667 9.44522 3.94882 10.5512 3 11.7509"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.00022 14.3416L8.37454 14.3416M8.37454 14.3416L6.71256 15.8183M8.37454 14.3416L6.71256 12.6365"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.41393 1.5C10.3725 1.5 11.9602 3.22607 11.9602 5.35526C11.9602 7.48444 10.3725 9.21046 8.41393 9.21046C6.45539 9.21046 4.86768 7.48444 4.86768 5.35526C4.86768 3.22607 6.45539 1.5 8.41393 1.5Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPersonArrowRightOutlined);
const Memo = memo(ForwardRef);
export default Memo;
