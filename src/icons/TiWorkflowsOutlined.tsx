// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWorkflowsOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
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
        d="M5 7.08336V12.9167"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M15 7C16.3807 7 17.5 5.88071 17.5 4.5C17.5 3.11929 16.3807 2 15 2C13.6193 2 12.5 3.11929 12.5 4.5C12.5 5.88071 13.6193 7 15 7Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M5 17.9167C6.38071 17.9167 7.5 16.7974 7.5 15.4167C7.5 14.036 6.38071 12.9167 5 12.9167C3.61929 12.9167 2.5 14.036 2.5 15.4167C2.5 16.7974 3.61929 17.9167 5 17.9167Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M5 7.00002C6.38071 7.00002 7.5 5.88073 7.5 4.50002C7.5 3.1193 6.38071 2.00002 5 2.00002C3.61929 2.00002 2.5 3.1193 2.5 4.50002C2.5 5.88073 3.61929 7.00002 5 7.00002Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M15 7.91669C15 9.90581 14.2098 11.8135 12.8033 13.22C11.3968 14.6265 9.48912 15.4167 7.5 15.4167"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWorkflowsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
