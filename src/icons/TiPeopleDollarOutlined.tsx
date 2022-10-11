// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPeopleDollarOutlined = (props: SvgIconProps) => {
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
        d="M12.6014 15.3262C12.6014 14.3253 11.4054 10.8541 6.80107 10.8541C5.80087 10.8541 4.96149 11.0179 4.26025 11.2846"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.625V12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 16.375V17" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.165 15.9287C1.32687 16.1937 1.60312 16.3775 1.9375 16.3775H2.25H2.6225C3.1075 16.3775 3.5 15.9844 3.5 15.5C3.5 15.0975 3.22625 14.7469 2.83563 14.6487L1.66375 14.355C1.27375 14.2562 1 13.905 1 13.5025C1 13.0181 1.39313 12.625 1.8775 12.625H2.25H2.5625C2.89562 12.625 3.17125 12.8075 3.33375 13.0713"
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

const ForwardRef = forwardRef(SvgTiPeopleDollarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
