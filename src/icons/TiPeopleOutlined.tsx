// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPeopleOutlined = (props: SvgIconProps) => {
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
        d="M12.6011 15.3262C12.6011 14.3253 11.405 10.8541 6.80072 10.8541C2.19643 10.8541 1 14.3253 1 15.3262"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.85778 3.72491C8.61516 3.72491 10.0398 5.2737 10.0398 7.18418C10.0398 9.09467 8.61516 10.6434 6.85778 10.6434C5.10041 10.6434 3.67578 9.09467 3.67578 7.18418C3.67578 5.2737 5.10041 3.72491 6.85778 3.72491Z"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M17.0004 14.1868C17.0004 13.2216 16.0966 9.74208 11.6567 9.74208"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.4614 3C13.156 3 14.5298 4.49347 14.5298 6.33572C14.5298 8.17798 13.3507 9.74201 11.6561 9.74201"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPeopleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
