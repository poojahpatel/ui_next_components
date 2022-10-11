// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFileSelectOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.3097 9.0835L9.62241 11.7707L8.00977 10.1581"
      />
      <path
        fillRule="evenodd"
        d="M4.1 1C2.38792 1 1 2.38791 1 4.1V8.77437C1 10.3379 2.15759 11.6312 3.6625 11.8437V10.6238C2.82406 10.4262 2.2 9.67314 2.2 8.77437V4.1C2.2 3.05066 3.05066 2.2 4.1 2.2H8.77437C9.67254 2.2 10.4252 2.82322 10.6234 3.66081H11.8435C11.6302 2.15672 10.3374 1 8.77437 1H4.1Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.9966 12.4953C14.9966 13.876 13.8773 14.9953 12.4966 14.9953H7.82227C6.44155 14.9953 5.32227 13.876 5.32227 12.4953V7.82092C5.32227 6.44021 6.44155 5.32092 7.82227 5.32092H12.4966C13.8773 5.32092 14.9966 6.44021 14.9966 7.82092V12.4953Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFileSelectOutlined);
const Memo = memo(ForwardRef);
export default Memo;
