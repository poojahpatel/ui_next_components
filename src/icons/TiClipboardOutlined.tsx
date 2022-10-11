// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiClipboardOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
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
        d="M16.5752 4.47388H18.5752C19.1056 4.47388 19.6143 4.68459 19.9894 5.05966C20.3645 5.43474 20.5752 5.94344 20.5752 6.47388V20.4739C20.5752 21.0043 20.3645 21.513 19.9894 21.8881C19.6143 22.2632 19.1056 22.4739 18.5752 22.4739H6.5752C6.04476 22.4739 5.53605 22.2632 5.16098 21.8881C4.78591 21.513 4.5752 21.0043 4.5752 20.4739V6.47388C4.5752 5.94344 4.78591 5.43474 5.16098 5.05966C5.53605 4.68459 6.04476 4.47388 6.5752 4.47388H8.5752"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M15.5752 2.47388H9.5752C9.02291 2.47388 8.5752 2.92159 8.5752 3.47388V5.47388C8.5752 6.02616 9.02291 6.47388 9.5752 6.47388H15.5752C16.1275 6.47388 16.5752 6.02616 16.5752 5.47388V3.47388C16.5752 2.92159 16.1275 2.47388 15.5752 2.47388Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiClipboardOutlined);
const Memo = memo(ForwardRef);
export default Memo;
