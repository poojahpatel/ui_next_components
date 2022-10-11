// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoreHorizontalOutlined = (props: SvgIconProps) => {
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
      <circle cx={9.00001} cy={9.00001} r={1.03846} fill="none" />
      <circle cx={12.4616} cy={9.00001} r={1.03846} fill="none" />
      <circle cx={5.53846} cy={9.00001} r={1.03846} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoreHorizontalOutlined);
const Memo = memo(ForwardRef);
export default Memo;
