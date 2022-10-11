// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckboxOn = (props: SvgIconProps) => {
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
        d="M5.375 2C3.51104 2 2 3.51104 2 5.375V12.625C2 14.489 3.51104 16 5.375 16H12.625C14.489 16 16 14.489 16 12.625V5.375C16 3.51104 14.489 2 12.625 2H5.375ZM13.1223 6.94483C13.437 6.60116 13.4135 6.06745 13.0698 5.75274C12.7262 5.43803 12.1924 5.46151 11.8777 5.80517L7.69027 10.3779L6.12034 8.67508C5.80449 8.33247 5.27069 8.31079 4.92809 8.62665C4.58548 8.94251 4.5638 9.4763 4.87966 9.81891L7.07201 12.1969C7.23209 12.3705 7.45761 12.4691 7.69377 12.4687C7.92994 12.4684 8.15512 12.369 8.31462 12.1948L13.1223 6.94483Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckboxOn);
const Memo = memo(ForwardRef);
export default Memo;
