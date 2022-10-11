// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDocumentsOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_12744_69158)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M10.5 15.75H4.5C3.67125 15.75 3 15.0788 3 14.25V6.75C3 5.92125 3.67125 5.25 4.5 5.25H10.5C11.3288 5.25 12 5.92125 12 6.75V14.25C12 15.0788 11.3288 15.75 10.5 15.75Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M12 12.75H13.5C14.3288 12.75 15 12.0788 15 11.25V3.75C15 2.92125 14.3288 2.25 13.5 2.25H7.5C6.67125 2.25 6 2.92125 6 3.75V5.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M6 9H9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M6 12H9"
        />
      </g>
      <defs>
        <clipPath id="clip0_12744_69158">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDocumentsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
