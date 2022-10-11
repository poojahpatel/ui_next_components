// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBookCloseOutined = (props: SvgIconProps) => {
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
        d="M4.5752 19.9739C4.5752 19.3108 4.83859 18.675 5.30743 18.2061C5.77627 17.7373 6.41215 17.4739 7.0752 17.4739H20.5752"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M7.0752 2.47388H20.5752V22.4739H7.0752C6.41215 22.4739 5.77627 22.2105 5.30743 21.7416C4.83859 21.2728 4.5752 20.6369 4.5752 19.9739V4.97388C4.5752 4.31084 4.83859 3.67495 5.30743 3.20611C5.77627 2.73727 6.41215 2.47388 7.0752 2.47388V2.47388Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBookCloseOutined);
const Memo = memo(ForwardRef);
export default Memo;
