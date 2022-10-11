// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSpeedometerOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
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
        d="M15.25 14.6472C16.0398 13.4594 16.5 12.0334 16.5 10.5C16.5 6.35786 13.1421 3 9 3C4.85786 3 1.5 6.35786 1.5 10.5C1.5 12.0334 1.96019 13.4594 2.75 14.6472"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.00049 11.75C9.69084 11.75 10.2505 11.1904 10.2505 10.5C10.2505 9.80967 9.69084 9.25003 9.00049 9.25003C8.31013 9.25003 7.75049 9.80967 7.75049 10.5C7.75049 11.1904 8.31013 11.75 9.00049 11.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.9365 8.89667C14.1007 9.40167 14.1915 9.94 14.1915 10.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.6035 5.56333C10.0985 5.39916 9.56012 5.3075 9.00012 5.3075C6.13262 5.3075 3.80762 7.6325 3.80762 10.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.88281 9.61665L12.6745 6.82498"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSpeedometerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
