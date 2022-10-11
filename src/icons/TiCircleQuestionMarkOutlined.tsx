// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCircleQuestionMarkOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_8154_1333)">
        <path
          strokeLinecap="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z"
        />
        <path
          strokeLinecap="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.06006 6.00001C6.21679 5.55446 6.52616 5.17875 6.93336 4.93944C7.34056 4.70012 7.81932 4.61264 8.28484 4.69249C8.75036 4.77234 9.1726 5.01436 9.47678 5.3757C9.78095 5.73703 9.94743 6.19436 9.94673 6.66668C9.94673 8.00001 7.94673 8.66668 7.94673 8.66668"
        />
        <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M8 11.3333H8.00583" />
      </g>
      <defs>
        <clipPath id="clip0_8154_1333">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCircleQuestionMarkOutlined);
const Memo = memo(ForwardRef);
export default Memo;
