// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHeartOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={31}
      fill="none"
      viewBox="0 0 32 31"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M22.5072 2C19.8314 2 17.5379 3.40345 16.1362 5.44483C14.7346 3.40345 12.4411 2 9.76528 2C5.56044 2 2.12012 5.44483 2.12012 9.65517C2.12012 17.3103 16.1362 28.7931 16.1362 28.7931C16.1362 28.7931 30.1524 17.3103 30.1524 9.65517C30.1524 5.44483 26.7121 2 22.5072 2V2Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHeartOutlined);
const Memo = memo(ForwardRef);
export default Memo;
