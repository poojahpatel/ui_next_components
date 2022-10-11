// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAddFileOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={17}
      height={17}
      fill="none"
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M1 12.8055C1 14.4623 2.34315 15.8055 4 15.8055H9.81818C11.475 15.8055 12.8182 14.4623 12.8182 12.8055V6.98731C12.8182 5.33045 11.475 3.9873 9.81818 3.9873H4C2.34315 3.9873 1 5.33045 1 6.9873V12.8055Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.91235 7.95215L6.90592 11.5841"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.72512 9.76491L5.09316 9.77134"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.63635 3.58897V3.58897C4.63635 2.15912 5.79547 1 7.22532 1H13C14.6568 1 16 2.34315 16 4V9.81818C16 11.475 14.6568 12.8182 13 12.8182H12.8182"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAddFileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
