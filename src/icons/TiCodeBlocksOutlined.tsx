// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCodeBlocksOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_80895)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.958 12.5003L13.5833 10.875L11.958 9.24976"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.79224 9.24976L8.16699 10.875L9.79224 12.5003"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.87525 12C2.9775 12 2.25 11.2725 2.25 10.3748V3.87525C2.25 2.9775 2.9775 2.25 3.87525 2.25H10.3755C11.2725 2.25 12 2.9775 12 3.87525"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.1248 15.75H7.6245C6.7275 15.75 6 15.0225 6 14.1248V7.6245C6 6.7275 6.7275 6 7.62525 6H14.1255C15.0225 6 15.75 6.7275 15.75 7.62525V14.1255C15.75 15.0225 15.0225 15.75 14.1248 15.75V15.75Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_80895">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCodeBlocksOutlined);
const Memo = memo(ForwardRef);
export default Memo;
