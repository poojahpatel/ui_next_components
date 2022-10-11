// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSearchOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_80917)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.2005 8.60025C14.2005 11.6932 11.6932 14.2005 8.60025 14.2005C5.50725 14.2005 3 11.6932 3 8.60025C3 5.50725 5.50725 3 8.60025 3C11.6932 3 14.2005 5.50725 14.2005 8.60025V8.60025Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15 15L12.5625 12.5625"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_80917">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSearchOutlined);
const Memo = memo(ForwardRef);
export default Memo;
