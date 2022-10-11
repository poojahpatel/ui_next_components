// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyAltOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13368_86673)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.5 6H14.25C15.0788 6 15.75 6.67125 15.75 7.5V12.75C15.75 13.5788 15.0788 14.25 14.25 14.25H6C5.17125 14.25 4.5 13.5788 4.5 12.75V12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.81225 11.5627H11.937C12.8003 11.5627 13.4993 10.863 13.4993 10.0005V5.313C13.5 4.44975 12.8002 3.75 11.9377 3.75H3.81225C2.94975 3.75 2.25 4.44975 2.25 5.31225V9.99975C2.25 10.863 2.94975 11.5627 3.81225 11.5627V11.5627Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.875 6H11.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.5 9.375H4.875"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8.74281 6.8275C9.20031 7.285 9.20031 8.0275 8.74281 8.485C8.28531 8.9425 7.54281 8.9425 7.08531 8.485C6.62781 8.0275 6.62781 7.285 7.08531 6.8275C7.54281 6.37 8.28531 6.37 8.74281 6.8275Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13368_86673">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
