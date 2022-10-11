// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiQuestionMarkCircleOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.3698 15.5555H7.85132C7.19651 15.5555 6.66614 15.0251 6.66614 14.3703V7.85181C6.66614 7.197 7.19651 6.66663 7.85132 6.66663H14.3698C15.0247 6.66663 15.555 7.197 15.555 7.85181V14.3703C15.555 15.0251 15.0247 15.5555 14.3698 15.5555Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.0911 11.7061V11.5834C11.0911 11.1817 11.3394 10.9642 11.5883 10.7971C11.8313 10.6335 12.0748 10.4202 12.0748 10.0267C12.0748 9.48328 11.6346 9.04358 11.0917 9.04358C10.5489 9.04358 10.108 9.48269 10.108 10.0261"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.0904 13.0922C11.0412 13.0922 11.0015 13.1319 11.0021 13.1811C11.0021 13.2303 11.0418 13.27 11.091 13.27C11.1402 13.27 11.1799 13.2303 11.1799 13.1811C11.1799 13.1319 11.1402 13.0922 11.0904 13.0922"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.555 8.4444H16.1475C16.8024 8.4444 17.3327 8.97477 17.3327 9.62958V16.1481C17.3327 16.8029 16.8024 17.3333 16.1475 17.3333H9.62903C8.97422 17.3333 8.44385 16.8029 8.44385 16.1481V15.5555"
      />
      <rect
        width={22.5}
        height={22.5}
        x={0.75}
        y={0.75}
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        rx={11.25}
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiQuestionMarkCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
