// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHeadphonesCircle = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={16} cy={16} r={16} fill="currentColor" />
      <g clipPath="url(#clip0_7472_1085)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.6667 19.3334H20C19.632 19.3334 19.3333 19.0347 19.3333 18.6667V15.3334C19.3333 14.9654 19.632 14.6667 20 14.6667H20.6667C21.4033 14.6667 22 15.2634 22 16.0001V18.0001C22 18.7367 21.4033 19.3334 20.6667 19.3334Z"
          stroke="white"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.3334H11.3333C10.5967 19.3334 10 18.7367 10 18.0001V16.0001C10 15.2634 10.5967 14.6667 11.3333 14.6667H12C12.368 14.6667 12.6667 14.9654 12.6667 15.3334V18.6667C12.6667 19.0347 12.368 19.3334 12 19.3334Z"
          stroke="white"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.3333 14.6667V14.3333C20.3333 11.94 18.3933 10 16 10C13.6067 10 11.6667 11.94 11.6667 14.3333V14.6667"
          stroke="white"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.4167 22.1667H15.5833C15.1233 22.1667 14.75 21.7933 14.75 21.3333C14.75 20.8733 15.1233 20.5 15.5833 20.5H16.4167C16.8767 20.5 17.25 20.8733 17.25 21.3333C17.25 21.7933 16.8767 22.1667 16.4167 22.1667Z"
          stroke="white"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 21.3333H18.6667C19.4033 21.3333 20 20.7366 20 19.9999V19.3333"
          stroke="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_7472_1085">
          <rect width={16} height={16} transform="translate(8 8)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHeadphonesCircle);
const Memo = memo(ForwardRef);
export default Memo;
