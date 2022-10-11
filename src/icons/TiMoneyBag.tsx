// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyBag = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={44}
      height={52}
      fill="none"
      viewBox="0 0 44 52"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M25.1483 12.5945C25.1483 12.5945 31.0217 16.56 38.4463 27.3701C45.5689 37.7404 41.4014 43.6231 30.4649 49.5989C29.757 49.9857 28.9053 49.655 28.0682 49.655C7.90474 49.655 4.52022 36.3281 10.6934 26.2608C16.8665 16.1934 23.1579 12.8926 23.1579 12.8926C23.1579 12.8926 16.7273 6.98355 18.7456 4.71426C20.7639 2.44498 24.8317 2.1297 27.1184 2.25168C29.4051 2.37366 25.1483 12.5945 25.1483 12.5945Z"
        clipRule="evenodd"
        fill="#E7E9E9"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M24.4243 12.8927C24.4243 12.8927 30.2197 15.4508 37.6443 26.2608C45.0689 37.0708 42.7391 49.655 22.158 49.655C1.99453 49.655 -1.38999 36.3281 4.78314 26.2608C10.9563 16.1934 17.2477 12.8927 17.2477 12.8927C17.2477 12.8927 11.1729 5.90721 13.1911 3.63793C15.2094 1.36865 18.0918 4.69992 20.3785 4.8219C22.6652 4.94389 26.7738 0.48605 28.7638 3.04594C30.7537 5.60584 24.4243 12.8927 24.4243 12.8927Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M15.1676 12.805C15.1676 12.805 19.0329 13.5196 21.7089 13.5196C24.3849 13.5196 27.6556 12.805 27.6556 12.805C27.6556 12.805 31.8182 12.5608 33.6022 15.4193"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M15.1676 35.1105C15.1676 37.2683 17.4017 39.0167 20.1588 39.0167H22.1553C24.9125 39.0167 27.1465 37.2683 27.1465 35.1105C27.1465 29.6419 15.1676 32.7668 15.1676 27.2981C15.1676 25.1404 17.4017 23.392 20.1588 23.392H22.1553C24.9125 23.392 27.1465 25.1404 27.1465 27.2981"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M21.2833 21.155V22.6133"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M21.2833 40.3213V41.7796"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyBag);
const Memo = memo(ForwardRef);
export default Memo;
