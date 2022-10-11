// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoading = (props: SvgIconProps) => {
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
      <rect width={20} height={20} rx={5} fill="currentColor" />
      <g clipPath="url(#clip0_6411_41873)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} fill="none" stroke="white" d="M10 5V7" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M10 13V15"
          opacity={0.6}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M6.46484 6.465L7.87984 7.88"
          opacity={0.2}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M12.1201 12.12L13.5351 13.535"
          opacity={0.7}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M5 10H7"
          opacity={0.3}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M13 10H15"
          opacity={0.8}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M6.46484 13.535L7.87984 12.12"
          opacity={0.5}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M12.1201 7.88L13.5351 6.465"
          opacity={0.9}
        />
      </g>
      <defs>
        <clipPath id="clip0_6411_41873">
          <rect width={12} height={12} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoading);
const Memo = memo(ForwardRef);
export default Memo;
