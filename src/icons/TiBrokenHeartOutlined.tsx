// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBrokenHeartOutlined = (props: SvgIconProps) => {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.01653 4.43931L9.72912 3.68209C10.0725 3.31706 10.4797 3.02796 10.9274 2.83131C11.3751 2.63466 11.8546 2.53432 12.3385 2.53601C12.8224 2.5377 13.3012 2.64139 13.7475 2.84116C14.1938 3.04093 14.599 3.33286 14.9398 3.70028C15.2808 4.06753 15.5507 4.5031 15.7343 4.98211C15.9178 5.46112 16.0114 5.97418 16.0096 6.49198C16.0078 7.00978 15.9107 7.52217 15.7238 7.99989C15.5369 8.4776 15.2639 8.91128 14.9203 9.27614L14.2077 10.0334L8.9776 15.591L3.78639 9.99698L3.07911 9.23481C2.39071 8.49299 2.00602 7.48879 2.00967 6.44311C2.01332 5.39743 2.40501 4.39594 3.09857 3.65895C3.79213 2.92196 4.73075 2.50983 5.70794 2.51324C6.68513 2.51666 7.62085 2.93532 8.30925 3.67714L9.01653 4.43931ZM9.01653 4.43931L7.33374 6.82005L9.61872 7.97858L8.66199 10.0498"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBrokenHeartOutlined);
const Memo = memo(ForwardRef);
export default Memo;
