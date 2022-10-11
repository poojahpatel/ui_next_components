// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChevronUpOutlined = (props: SvgIconProps) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10.5L9 7.5035L6 10.5" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChevronUpOutlined);
const Memo = memo(ForwardRef);
export default Memo;
