// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiGlobeClockOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M15.3158 8.15789C15.3158 4.20421 12.1116 1 8.15789 1C4.20421 1 1 4.20421 1 8.15789C1 11.8267 3.75906 14.8501 7.31579 15.2668"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M12.7893 17C14.6496 17 16.1577 15.4919 16.1577 13.6316C16.1577 11.7712 14.6496 10.2632 12.7893 10.2632C10.929 10.2632 9.4209 11.7712 9.4209 13.6316C9.4209 15.4919 10.929 17 12.7893 17Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.7891 12.4526V13.6316L13.9996 14"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M1.74707 11.3419H1.79591C4.1816 11.3419 5.77233 11.2055 5.77233 8.9562C5.77233 6.57052 8.15802 6.57052 8.15802 4.97978C8.15802 3.20125 4.97654 3.38904 4.97654 1.79831V1.74104"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        fill="none"
        stroke="currentColor"
        d="M15.316 8.15792H12.7325C10.9598 8.15792 10.0192 6.06361 11.1965 4.73813L12.9068 2.81308"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiGlobeClockOutlined);
const Memo = memo(ForwardRef);
export default Memo;
