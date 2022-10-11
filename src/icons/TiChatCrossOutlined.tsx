// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatCrossOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6881_1014)">
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
          fillRule="evenodd"
          d="M20.4195 7.41944C20.1266 7.71233 19.6517 7.71233 19.3588 7.41944L16.5304 4.59101C16.2375 4.29812 16.2375 3.82324 16.5304 3.53035C16.8233 3.23746 17.2982 3.23746 17.5911 3.53035L20.4195 6.35878C20.7124 6.65167 20.7124 7.12654 20.4195 7.41944Z"
          clipRule="evenodd"
          fill="#F74A46"
        />
        <path
          fillRule="evenodd"
          d="M16.5303 7.41943C16.2374 7.12654 16.2374 6.65166 16.5303 6.35877L19.3588 3.53034C19.6517 3.23745 20.1265 3.23745 20.4194 3.53034C20.7123 3.82324 20.7123 4.29811 20.4194 4.591L17.591 7.41943C17.2981 7.71232 16.8232 7.71232 16.5303 7.41943Z"
          clipRule="evenodd"
          fill="#F74A46"
        />
      </g>
      <defs>
        <clipPath id="clip0_6881_1014">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatCrossOutlined);
const Memo = memo(ForwardRef);
export default Memo;
