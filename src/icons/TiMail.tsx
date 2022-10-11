// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMail = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={32} height={32} rx={8} fill="#616B67" />
      <path
        fillRule="evenodd"
        d="M12 10C10.3431 10 9 11.3431 9 13V19C9 20.6569 10.3431 22 12 22H20C21.6569 22 23 20.6569 23 19V13C23 11.3431 21.6569 10 20 10H12ZM11.8883 12.4176C11.5666 12.2031 11.132 12.29 10.9176 12.6117C10.7031 12.9334 10.79 13.368 11.1117 13.5824L15.057 16.2126C15.628 16.5933 16.372 16.5933 16.943 16.2126L20.8883 13.5824C21.21 13.368 21.2969 12.9334 21.0824 12.6117C20.868 12.29 20.4334 12.2031 20.1117 12.4176L16.1664 15.0478C16.0656 15.1149 15.9344 15.1149 15.8336 15.0478L11.8883 12.4176Z"
        clipRule="evenodd"
        fill="white"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMail);
const Memo = memo(ForwardRef);
export default Memo;
