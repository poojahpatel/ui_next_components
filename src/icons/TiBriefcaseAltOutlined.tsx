// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBriefcaseAltOutlined = (props: SvgIconProps) => {
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
        d="M20.5752 7.47388H4.5752C3.47063 7.47388 2.5752 8.36931 2.5752 9.47388V19.4739C2.5752 20.5784 3.47063 21.4739 4.5752 21.4739H20.5752C21.6798 21.4739 22.5752 20.5784 22.5752 19.4739V9.47388C22.5752 8.36931 21.6798 7.47388 20.5752 7.47388Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M16.5752 21.4739V5.47388C16.5752 4.94344 16.3645 4.43474 15.9894 4.05966C15.6143 3.68459 15.1056 3.47388 14.5752 3.47388H10.5752C10.0448 3.47388 9.53605 3.68459 9.16098 4.05966C8.78591 4.43474 8.5752 4.94344 8.5752 5.47388V21.4739"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBriefcaseAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
