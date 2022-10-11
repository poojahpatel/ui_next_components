// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLogOutOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M11.25 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H11.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M6 12.75L2.25 9L6 5.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M2.25 9H11.25"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLogOutOutlined);
const Memo = memo(ForwardRef);
export default Memo;
