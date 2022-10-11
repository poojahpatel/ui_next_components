// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiClosingTagStarOutlined = (props: SvgIconProps) => {
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
        d="M5.00243 7.29785L2.66797 9.63231L5.00243 11.9668"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.0343 7.29785L13.3688 9.63231L11.0343 11.9668"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.08643 13.3333L8.94961 6.22217"
      />
      <path d="M12.5521 2.66699L13.0614 4.04339L14.4378 4.55271L13.0614 5.06202L12.5521 6.43842L12.0428 5.06202L10.6664 4.55271L12.0428 4.04339L12.5521 2.66699Z" />
      <path d="M9.2569 0.88916L9.59644 1.80676L10.514 2.1463L9.59644 2.48585L9.2569 3.40345L8.91736 2.48585L7.99976 2.1463L8.91736 1.80676L9.2569 0.88916Z" />
      <path d="M5.77755 2.66699L6.13767 3.6402L7.11088 4.00033L6.13767 4.36045L5.77755 5.33366L5.41743 4.36045L4.44421 4.00033L5.41743 3.6402L5.77755 2.66699Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiClosingTagStarOutlined);
const Memo = memo(ForwardRef);
export default Memo;
