// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiKeyOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
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
        d="M12.7981 2.6665L11.7278 3.73681M11.7278 3.73681L13.3333 5.34228L11.4602 7.21532L9.85478 5.60986M11.7278 3.73681L9.85478 5.60986M7.6553 7.80934C7.93162 8.08199 8.15128 8.4066 8.30163 8.76449C8.45199 9.12237 8.53006 9.50646 8.53136 9.89465C8.53266 10.2828 8.45716 10.6674 8.30921 11.0263C8.16126 11.3852 7.94378 11.7113 7.66929 11.9858C7.3948 12.2603 7.06872 12.4777 6.70984 12.6257C6.35095 12.7736 5.96635 12.8491 5.57816 12.8478C5.18998 12.8465 4.80589 12.7685 4.448 12.6181C4.09011 12.4678 3.7655 12.2481 3.49286 11.9718C2.9567 11.4167 2.66003 10.6732 2.66674 9.90142C2.67344 9.12969 2.98299 8.39146 3.52871 7.84573C4.07444 7.30001 4.81267 6.99046 5.5844 6.98376C6.35614 6.97705 7.10017 7.27319 7.6553 7.80934ZM7.6553 7.80934L9.85478 5.60986"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiKeyOutlined);
const Memo = memo(ForwardRef);
export default Memo;
