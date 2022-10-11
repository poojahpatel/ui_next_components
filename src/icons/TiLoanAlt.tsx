// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoanAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={56}
      fill="none"
      viewBox="0 0 55 56"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M33.3023 46.3528C33.9422 46.3528 37.3382 46.1064 38.1905 46.0438C38.3191 46.0344 38.444 46 38.5595 45.9427L49.0978 40.7146C50.5178 40.0101 52.24 40.4671 53.124 41.7828V41.7828C54.1405 43.2957 53.6695 45.3525 52.0959 46.2722L38.6491 54.1312C37.6891 54.6923 36.5621 54.8971 35.4661 54.7096L8.819 50.151V38.9987L17.1664 36.8904C20.4685 36.0564 23.9534 36.3335 27.0823 37.6788L34.5046 40.8701C35.8686 41.4566 36.5546 42.9913 36.0818 44.3988V44.3988C35.5939 45.8511 34.0458 46.6585 32.5756 46.2275L24.457 43.8475"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M6.46317 34.8772C7.76498 34.8772 8.82031 35.9325 8.82031 37.2343L8.82031 52.6428C8.82031 53.9446 7.76498 54.9999 6.46317 54.9999H3.35845C2.05664 54.9999 1.00131 53.9446 1.00131 52.6428V37.2343C1.00131 35.9325 2.05664 34.8772 3.35845 34.8772H6.46317Z"
        clipRule="evenodd"
      />
      <ellipse
        stroke="#616B67"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        rx={0.774919}
        ry={0.773005}
        transform="matrix(-1 0 0 1 5.01805 50.6045)"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M28.9438 7.94737C28.9438 7.94737 32.6929 9.61753 37.4958 16.6753C42.2988 23.7331 40.7917 31.9492 27.4777 31.9492C14.434 31.9492 12.2445 23.2482 16.2379 16.6753C20.2313 10.1024 24.3013 7.94737 24.3013 7.94737C24.3013 7.94737 20.3714 3.38664 21.6771 1.90505C22.9827 0.423458 24.8473 2.59841 26.3266 2.67805C27.8059 2.7577 30.4637 -0.152782 31.751 1.51855C33.0383 3.18988 28.9438 7.94737 28.9438 7.94737Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M22.4531 7.70253C22.4531 7.70253 24.9716 8.08903 26.7152 8.08903C28.4587 8.08903 30.5898 7.70253 30.5898 7.70253C30.5898 7.70253 33.302 7.57048 34.4644 9.11649"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M23.2266 22.6758C23.2266 24.0682 24.6718 25.1964 26.4554 25.1964H27.7469C29.5305 25.1964 30.9758 24.0682 30.9758 22.6758C30.9758 19.1468 23.2266 21.1634 23.2266 17.6344C23.2266 16.242 24.6718 15.1138 26.4554 15.1138H27.7469C29.5305 15.1138 30.9758 16.242 30.9758 17.6344"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M27.1835 13.6704V14.6114"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M27.1835 26.0388V26.9799"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoanAlt);
const Memo = memo(ForwardRef);
export default Memo;
