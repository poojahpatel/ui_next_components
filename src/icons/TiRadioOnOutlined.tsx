// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRadioOnOutlined = (props: SvgIconProps) => {
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
      <circle cx={9} cy={9} r={6.75} strokeWidth={1.5} />
      <circle cx={8.99967} cy={8.9987} r={4.16667} />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRadioOnOutlined);
const Memo = memo(ForwardRef);
export default Memo;
