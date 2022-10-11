// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCloudUploadOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={44}
      height={44}
      fill="none"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M22.3252 34.7256V21.8923"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M18.3519 25.5577L22.3248 21.5848L26.2976 25.5577"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M29.659 34.7247H34.3523C37.887 34.7247 40.769 31.8427 40.769 28.308C40.769 24.7733 37.887 21.8913 34.3523 21.8913H33.5548V20.058C33.5548 13.9897 28.6232 9.05801 22.5548 9.05801C17.097 9.05801 12.5723 13.051 11.7143 18.2668C7.35649 18.4887 3.88232 22.0618 3.88232 26.4747C3.88232 31.0305 7.57649 34.7247 12.1323 34.7247H14.9923"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCloudUploadOutlined);
const Memo = memo(ForwardRef);
export default Memo;
