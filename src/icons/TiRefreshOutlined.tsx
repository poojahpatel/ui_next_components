// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRefreshOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.08444}
        fill="none"
        stroke="currentColor"
        d="M1.80225 3.09717V6.49111H5.19619"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.08444}
        fill="none"
        stroke="currentColor"
        d="M14.2465 12.1476V8.75366H10.8525"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.08444}
        fill="none"
        stroke="currentColor"
        d="M12.8269 5.92544C12.54 5.11473 12.0524 4.38991 11.4097 3.8186C10.7669 3.2473 9.98986 2.84813 9.15109 2.65835C8.31233 2.46857 7.43915 2.49436 6.61305 2.73331C5.78694 2.97226 5.03483 3.41659 4.42689 4.02483L1.80225 6.49109M14.2467 8.75372L11.622 11.22C11.0141 11.8282 10.262 12.2726 9.43589 12.5115C8.60978 12.7505 7.73661 12.7762 6.89784 12.5865C6.05908 12.3967 5.28205 11.9975 4.63928 11.4262C3.9965 10.8549 3.50893 10.1301 3.22204 9.31938"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRefreshOutlined);
const Memo = memo(ForwardRef);
export default Memo;
