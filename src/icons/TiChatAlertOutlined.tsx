// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatAlertOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_6881_1041)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#081D13"
          d="M20 9.99998V14.403C20 15.968 18.732 17.236 17.167 17.236H12.445L7.723 21.014V17.236H5.833C4.268 17.236 3 15.968 3 14.403V6.84698C3 5.28198 4.268 4.01398 5.833 4.01398H14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#F74A46"
          d="M23 5.5C23 7.985 20.986 10 18.501 10C16.068 10.001 13.999 7.932 14 5.499C14.001 3.014 16.015 1 18.5 1C20.985 1 23 3.015 23 5.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
          stroke="#F74A46"
          d="M18.5498 5.5L18.5498 3.5"
        />
        <circle cx={18.5498} cy={7.25} r={0.75} fill="#F74A46" />
      </g>
      <defs>
        <clipPath id="clip0_6881_1041">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatAlertOutlined);
const Memo = memo(ForwardRef);
export default Memo;
