// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMouseClickOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13641_81102)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.29522 8.92641V5.38161C9.29522 4.72881 8.76642 4.20001 8.11362 4.20001C7.46082 4.20001 6.93202 4.72881 6.93202 5.38161V8.13841V12.2L4.81522 11.1136C4.33362 10.8664 3.74722 10.9584 3.36482 11.3408C2.85842 11.8472 2.88242 12.6752 3.41682 13.152L7.27682 16.5944C7.57042 16.8552 7.94882 17 8.34162 17H12.048C12.7976 17 13.4472 16.4792 13.6096 15.7472L14.468 11.8832C14.7184 10.7552 13.964 9.64961 12.8224 9.47281L9.29522 8.92641Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.18848 5C4.18848 2.7912 5.97968 1 8.18848 1C10.3973 1 12.1885 2.7912 12.1885 5"
        />
      </g>
      <defs>
        <clipPath id="clip0_13641_81102">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMouseClickOutlined);
const Memo = memo(ForwardRef);
export default Memo;
