// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBriefcaseOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.3 5.025V4.35C6.3 3.60442 6.90442 3 7.65 3H10.35C11.0956 3 11.7 3.60442 11.7 4.35V5.025M4.275 15.15H13.725C14.8434 15.15 15.75 14.2434 15.75 13.125V7.725C15.75 6.60662 14.8434 5.7 13.725 5.7H4.275C3.15662 5.7 2.25 6.60662 2.25 7.725V13.125C2.25 14.2434 3.15662 15.15 4.275 15.15Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBriefcaseOutlined);
const Memo = memo(ForwardRef);
export default Memo;
