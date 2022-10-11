// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiActivityLog = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={19}
      height={19}
      fill="none"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        d="M16.167 -4.57764e-05H2.61C1.168 -4.57764e-05 0 1.16845 0 2.60975V16.3209C0 17.7623 1.168 18.9308 2.61 18.9308H16.167C17.608 18.9308 18.777 17.7623 18.777 16.3209V2.60975C18.777 1.16845 17.608 -4.57764e-05 16.167 -4.57764e-05Z"
        fill="currentColor"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.56591}
        fill="none"
        stroke="white"
        d="M2.60803 9.99115H5.59603L7.61103 4.73255L10.358 14.0525L12.831 9.99115H15.886"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiActivityLog);
const Memo = memo(ForwardRef);
export default Memo;
