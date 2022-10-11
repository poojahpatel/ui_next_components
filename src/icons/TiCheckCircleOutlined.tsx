// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckCircleOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 7.45143V8.00343C13.9993 9.29729 13.5803 10.5562 12.8056 11.5925C12.0309 12.6288 10.942 13.3869 9.70121 13.7538C8.46045 14.1206 7.13435 14.0766 5.92068 13.6282C4.70701 13.1798 3.67079 12.3511 2.96658 11.2657C2.26236 10.1803 1.92787 8.89627 2.01301 7.60522C2.09814 6.31417 2.59832 5.08523 3.43897 4.10168C4.27961 3.11813 5.41567 2.43266 6.67771 2.14752C7.93975 1.86238 9.26016 1.99284 10.442 2.51943"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.0002 3.20342L8.00019 9.20942L6.2002 7.40942"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
