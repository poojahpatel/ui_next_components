// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRecordOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_6965_339)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          d="M6.56066 6.93934C7.14645 7.52513 7.14645 8.47487 6.56066 9.06066C5.97487 9.64645 5.02513 9.64645 4.43934 9.06066C3.85355 8.47487 3.85355 7.52513 4.43934 6.93934C5.02513 6.35355 5.97487 6.35355 6.56066 6.93934Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          d="M11.5607 6.93934C12.1464 7.52513 12.1464 8.47487 11.5607 9.06066C10.9749 9.64645 10.0251 9.64645 9.43934 9.06066C8.85355 8.47487 8.85355 7.52513 9.43934 6.93934C10.0251 6.35355 10.9749 6.35355 11.5607 6.93934Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          d="M5.5 9.5H10.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          d="M12 14H4C2.89533 14 2 13.1047 2 12V4C2 2.89533 2.89533 2 4 2H12C13.1047 2 14 2.89533 14 4V12C14 13.1047 13.1047 14 12 14Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_6965_339">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRecordOutlined);
const Memo = memo(ForwardRef);
export default Memo;
