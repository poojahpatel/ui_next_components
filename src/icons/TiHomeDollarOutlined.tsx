// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeDollarOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.11325 5.92451L7.61325 2.92451C8.453 2.36468 9.547 2.36468 10.3868 2.92451L14.8868 5.92451C15.5822 6.38818 16 7.16876 16 8.00464V13.5C16 14.8807 14.8807 16 13.5 16H4.5C3.11929 16 2 14.8807 2 13.5V8.00464C2 7.16876 2.41775 6.38818 3.11325 5.92451Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 8.11109V7.33331"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 12.7778V13.5555"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.64967 12.2224C7.85111 12.5522 8.19489 12.7809 8.611 12.7809H8.99989H9.46345C10.067 12.7809 10.5554 12.2916 10.5554 11.6889C10.5554 11.188 10.2148 10.7516 9.72867 10.6295L8.27034 10.264C7.785 10.1411 7.44434 9.70397 7.44434 9.20308C7.44434 8.60031 7.93356 8.11108 8.53634 8.11108H8.99989H9.38878C9.80334 8.11108 10.1463 8.3382 10.3486 8.66642"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeDollarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
