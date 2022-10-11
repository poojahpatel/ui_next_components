// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPageArrowsOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_11753_51033)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.5605 4.8105L12.4395 2.6895C12.1583 2.40825 11.7765 2.25 11.379 2.25H4.5C3.67125 2.25 3 2.92125 3 3.75V14.25C3 15.0788 3.67125 15.75 4.5 15.75H13.5C14.3288 15.75 15 15.0788 15 14.25V5.871C15 5.4735 14.8417 5.09175 14.5605 4.8105Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15 6H12C11.586 6 11.25 5.664 11.25 5.25V2.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.2 9L12 10.8L10.2 12.6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.8 9L6 10.8L7.8 12.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_11753_51033">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPageArrowsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
