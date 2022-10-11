// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneDeclinecircle = (props: SvgIconProps) => {
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
      <rect width={18} height={18} rx={9} fill="currentColor" />
      <path
        d="M7.45696 10.353C8.62689 11.7098 10.0327 12.7572 11.2566 12.8506C11.8113 12.893 12.3024 12.7364 12.7261 12.3503C12.9611 12.1318 13.1492 11.852 13.1713 11.5626C13.1897 11.3608 13.1205 11.1554 12.9266 10.9951L11.6947 9.97316C11.529 9.83922 11.3741 9.76371 11.2206 9.74896C11.0341 9.72866 10.845 9.82337 10.6341 10.0044L10.3008 10.2791C10.2488 10.3237 10.1932 10.3376 10.1329 10.333C10.0722 10.3344 10.0169 10.3029 9.97659 10.2756C9.74322 10.1152 9.30334 9.72082 8.83277 9.17244C8.3622 8.62406 8.02894 8.14378 7.91934 7.87161C7.89844 7.82756 7.8845 7.77192 7.88864 7.71766C7.89 7.66015 7.91177 7.61329 7.96044 7.57153L8.28955 7.27221C8.4949 7.08473 8.61121 6.91168 8.62548 6.72477C8.63745 6.56801 8.5831 6.40618 8.47308 6.21888L7.67418 4.88738C7.54002 4.65882 7.33266 4.55505 7.10679 4.53477C6.83826 4.5173 6.53872 4.62784 6.26986 4.85292C5.82948 5.21955 5.61456 5.69132 5.57637 6.23118C5.48291 7.45512 6.28703 8.99625 7.45696 10.353Z"
        fill="white"
      />
      <line
        x1={12.9417}
        x2={5.36916}
        y1={5.74404}
        y2={13.3165}
        stroke="white"
        strokeLinecap="round"
        strokeWidth={1.5}
        fill="none"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneDeclinecircle);
const Memo = memo(ForwardRef);
export default Memo;
