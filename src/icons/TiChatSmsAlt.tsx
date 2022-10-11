// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSmsAlt = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6408_31963)">
        <rect width={16} height={16} fill="currentColor" />
        <path
          fillRule="evenodd"
          d="M4 1.40002C2.34315 1.40002 1 2.74317 1 4.40002V9.40002C1 11.0569 2.34315 12.1 4 12.1H4.5V14.1C4.5 14.5272 5.00106 14.7577 5.3254 14.4797L8 12.1H12C13.6569 12.1 15 11.0569 15 9.40002V4.40002C15 2.74317 13.6569 1.40002 12 1.40002H4ZM5 7.90002C5.55228 7.90002 6 7.45231 6 6.90002C6 6.34774 5.55228 5.90002 5 5.90002C4.44772 5.90002 4 6.34774 4 6.90002C4 7.45231 4.44772 7.90002 5 7.90002ZM9 6.90002C9 7.45231 8.55228 7.90002 8 7.90002C7.44772 7.90002 7 7.45231 7 6.90002C7 6.34774 7.44772 5.90002 8 5.90002C8.55228 5.90002 9 6.34774 9 6.90002ZM11 7.90002C11.5523 7.90002 12 7.45231 12 6.90002C12 6.34774 11.5523 5.90002 11 5.90002C10.4477 5.90002 10 6.34774 10 6.90002C10 7.45231 10.4477 7.90002 11 7.90002Z"
          clipRule="evenodd"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6408_31963">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSmsAlt);
const Memo = memo(ForwardRef);
export default Memo;
