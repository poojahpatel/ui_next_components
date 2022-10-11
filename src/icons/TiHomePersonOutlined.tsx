// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomePersonOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.11325 5.92451L7.61325 2.92451C8.453 2.36468 9.547 2.36468 10.3868 2.92451L14.8868 5.92451C15.5822 6.38818 16 7.16876 16 8.00464V13.5C16 14.8807 14.8807 16 13.5 16H4.5C3.11929 16 2 14.8807 2 13.5V8.00464C2 7.16876 2.41775 6.38818 3.11325 5.92451Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13 14C13 13.3098 12.1752 10.916 9.00012 10.916C5.82505 10.916 5 13.3098 5 14"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.03938 6C10.2512 6 11.2337 7.06803 11.2337 8.38548C11.2337 9.70294 10.2512 10.7709 9.03938 10.7709C7.82751 10.7709 6.84509 9.70294 6.84509 8.38548C6.84509 7.06803 7.82751 6 9.03938 6Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomePersonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
