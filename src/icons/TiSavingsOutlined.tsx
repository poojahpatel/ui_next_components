// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSavingsOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={26}
      height={23}
      fill="none"
      viewBox="0 0 26 23"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <ellipse
        cx={11.4029}
        cy={13.0432}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        rx={10.4029}
        ry={8.93525}
      />
      <circle cx={6.18165} cy={11.1006} r={0.431655} strokeWidth={1.2} fill="none" stroke="currentColor" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.94141 7.34727C9.94141 7.34727 13.7578 6.27582 16.953 7.71301"
      />
      <path
        fillRule="evenodd"
        d="M16.3515 6.74494C16.8271 6.24142 17.1219 5.53016 17.2029 4.89313C17.2029 4.89313 15.8635 4.36078 13.8411 4.20978C11.8187 4.05878 10.3242 4.45312 10.3242 4.45312C10.3242 5.10773 10.5064 5.71981 10.8227 6.24142C10.8227 6.24142 12.635 6.11223 13.588 6.17133C14.5235 6.22935 16.3515 6.74494 16.3515 6.74494Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.8118 7.24393C16.6719 6.61587 17.2307 5.59981 17.2307 4.45324C17.2307 2.54607 15.6846 1 13.7775 1C11.8703 1 10.3242 2.54607 10.3242 4.45324C10.3242 5.47381 10.767 6.39099 11.4708 7.02317"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M21.8047 13.7978C21.8047 13.7978 23.2754 14.9217 24.4443 13.722C25.2789 12.8655 25.0226 11.5003 24.1864 10.7893"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSavingsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
