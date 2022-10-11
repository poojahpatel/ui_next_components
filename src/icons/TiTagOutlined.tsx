// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTagOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.7364 2C10.0646 2 9.15856 2.37708 8.69346 2.84223L2.68141 8.8549C1.71181 9.8246 1.70724 11.411 2.68282 12.3867L5.61437 15.3186C6.58813 16.2924 8.17102 16.2949 9.14582 15.32L15.1579 9.30731C15.6185 8.8466 16 7.92743 16 7.2642V3.49947C16 2.66753 15.3287 2 14.5007 2H10.7364ZM12.4707 4.43C13.0784 4.43 13.5707 4.92225 13.5707 5.53C13.5707 6.13775 13.0784 6.63 12.4707 6.63C11.8629 6.63 11.3707 6.13775 11.3707 5.53C11.3707 4.92225 11.8629 4.43 12.4707 4.43Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTagOutlined);
const Memo = memo(ForwardRef);
export default Memo;
