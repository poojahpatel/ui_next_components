// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBookOpenoutlined = (props: SvgIconProps) => {
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
        d="M2.5752 3.47388H8.5752C9.63606 3.47388 10.6535 3.8953 11.4036 4.64545C12.1538 5.3956 12.5752 6.41301 12.5752 7.47388V21.4739C12.5752 20.6782 12.2591 19.9152 11.6965 19.3526C11.1339 18.7899 10.3708 18.4739 9.5752 18.4739H2.5752V3.47388Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M22.5752 3.47388H16.5752C15.5143 3.47388 14.4969 3.8953 13.7468 4.64545C12.9966 5.3956 12.5752 6.41301 12.5752 7.47388V21.4739C12.5752 20.6782 12.8913 19.9152 13.4539 19.3526C14.0165 18.7899 14.7795 18.4739 15.5752 18.4739H22.5752V3.47388Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBookOpenoutlined);
const Memo = memo(ForwardRef);
export default Memo;
