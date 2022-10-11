// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDoubleArrow = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={5}
      height={8}
      fill="none"
      viewBox="0 0 5 8"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M2.42407 7.81798L0.284238 5.33043C0.172699 5.20076 0.264822 5 0.435859 5H4.58178C4.74984 5 4.84296 5.19473 4.73746 5.32555L2.73137 7.8131C2.65294 7.91035 2.50554 7.91269 2.42407 7.81798Z" />
      <path d="M2.42407 0.182023L0.284238 2.66957C0.172699 2.79924 0.264822 3 0.435859 3H4.58178C4.74984 3 4.84296 2.80527 4.73746 2.67445L2.73137 0.186899C2.65294 0.0896485 2.50554 0.0873096 2.42407 0.182023Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDoubleArrow);
const Memo = memo(ForwardRef);
export default Memo;
