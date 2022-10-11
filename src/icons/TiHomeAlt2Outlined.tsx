// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeAlt2Outlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={46}
      height={48}
      fill="none"
      viewBox="0 0 46 48"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M26.5 5.50002C27.9293 4.13681 39.0431 16.1019 42.4864 19.88C43.1392 20.5963 43.4788 21.5414 43.4408 22.5098L42.5 46.5C42.5 46.5 8 47.4681 8 44.9995C8 44.9995 8 41.2747 8 39.4123C8 38.7873 8 29.3486 8 25.5787C8 24.5895 8.39239 23.6471 9.09107 22.9469L26.5 5.50002Z"
        clipRule="evenodd"
        fill="#E7E9E9"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#616B67"
        d="M19.8208 3.22227C21.5153 1.60616 24.1618 1.59086 25.8746 3.18726L42.5738 19.9472C43.2713 20.6473 43.6629 21.5952 43.6629 22.5834V41.9995C43.6629 44.4681 41.6786 46.4693 39.2307 46.4693H27.2637H18.8425H6.43223C3.98438 46.4693 2 44.4681 2 41.9995C2 41.9995 2 38.2747 2 36.4123C2 35.7875 2 26.3528 2 22.5812C2 21.5905 2.39358 20.6468 3.09415 19.9464L19.8208 3.22227Z"
        clipRule="evenodd"
      />
      <rect
        width={15.3243}
        height={15.3243}
        x={14.7703}
        y={21.7733}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#616B67"
        rx={1.7027}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#616B67"
        d="M22.4324 21.7733V37.0976"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#616B67"
        d="M30.0946 29.9895H14.7703"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeAlt2Outlined);
const Memo = memo(ForwardRef);
export default Memo;
