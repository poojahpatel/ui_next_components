// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMicOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M8.05078 1C7.52035 1 7.01164 1.20113 6.63657 1.55916C6.26149 1.91718 6.05078 2.40276 6.05078 2.90908V7.99996C6.05078 8.50628 6.26149 8.99186 6.63657 9.34989C7.01164 9.70791 7.52035 9.90904 8.05078 9.90904C8.58121 9.90904 9.08992 9.70791 9.465 9.34989C9.84007 8.99186 10.0508 8.50628 10.0508 7.99996V2.90908C10.0508 2.40276 9.84007 1.91718 9.465 1.55916C9.08992 1.20113 8.58121 1 8.05078 1V1Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M12.7171 6.72754V8.00026C12.7171 9.18167 12.2255 10.3147 11.3503 11.1501C10.4751 11.9855 9.28813 12.4548 8.05046 12.4548C6.81278 12.4548 5.62579 11.9855 4.75062 11.1501C3.87545 10.3147 3.38379 9.18167 3.38379 8.00026V6.72754"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M8.05078 12.4551V15.0005"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M5.38379 15H10.7171"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMicOutlined);
const Memo = memo(ForwardRef);
export default Memo;
