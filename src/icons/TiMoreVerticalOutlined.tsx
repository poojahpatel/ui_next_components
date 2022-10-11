// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoreVerticalOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={12} cy={12} r={1.5} transform="rotate(90 12 12)" fill="none" />
      <circle cx={12} cy={17} r={1.5} transform="rotate(90 12 17)" fill="none" />
      <circle cx={12} cy={7} r={1.5} transform="rotate(90 12 7)" fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoreVerticalOutlined);
const Memo = memo(ForwardRef);
export default Memo;
