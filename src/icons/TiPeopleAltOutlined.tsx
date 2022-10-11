// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPeopleAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_13912_78326)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M0.999939 16.8333C0.999939 14.8084 2.64168 13.1666 4.66659 13.1666H8.33324C10.3581 13.1666 11.9999 14.8084 11.9999 16.8333"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M8.76845 4.9397C10.0214 6.19263 10.0214 8.22402 8.76845 9.47695C7.51552 10.7299 5.48413 10.7299 4.2312 9.47695C2.97827 8.22402 2.97827 6.19263 4.2312 4.9397C5.48413 3.68677 7.51552 3.68677 8.76845 4.9397"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M13.833 12.25H16.583C18.1019 12.25 19.333 13.481 19.333 15"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="none"
          stroke="currentColor"
          d="M16.8285 5.58787C17.7235 6.48282 17.7235 7.93381 16.8285 8.82876C15.9336 9.7237 14.4826 9.7237 13.5877 8.82876C12.6927 7.93381 12.6927 6.48281 13.5877 5.58787C14.4826 4.69292 15.9336 4.69292 16.8285 5.58787"
        />
      </g>
      <defs>
        <clipPath id="clip0_13912_78326">
          <rect width={20} height={20} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPeopleAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
