// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiUserReviewsOutlined = (props: SvgIconProps) => {
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
        d="M1 15.3634C1 13.9096 2.17818 12.7314 3.632 12.7314H6.264C7.71782 12.7314 8.896 13.9096 8.896 15.3634"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.57695 6.82598C7.47643 7.72546 7.47643 9.18381 6.57695 10.0833C5.67747 10.9828 4.21912 10.9828 3.31963 10.0833C2.42015 9.18381 2.42015 7.72546 3.31963 6.82598C4.21912 5.9265 5.67747 5.9265 6.57695 6.82598"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4335 10.1331C15.4029 10.1331 17 8.536 17 6.56655C17 4.59709 15.4037 3 13.4335 3C11.4633 3 9.86694 4.59709 9.86694 6.56655"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4372 10.1368C12.9005 10.1368 12.3921 10.0183 11.9354 9.80665L9.74048 10.2728L10.1994 8.07356C9.9863 7.61538 9.86702 7.10483 9.86702 6.56665"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
        fill="none"
        stroke="currentColor"
        d="M13.7668 5.87164L13.5713 5.28564L13.3759 5.87164C13.319 6.04222 13.185 6.17622 13.0145 6.23307L12.4285 6.4285L13.0145 6.62393C13.185 6.68079 13.319 6.81479 13.3759 6.98536L13.5713 7.57136L13.7668 6.98536C13.8236 6.81479 13.9576 6.68079 14.1282 6.62393L14.7142 6.4285L14.1282 6.23307C13.9573 6.17622 13.8236 6.0425 13.7668 5.87164Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiUserReviewsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
