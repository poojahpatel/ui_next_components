// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMapOutlined = (props: SvgIconProps) => {
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
        d="M3.08435 5.17333C3.03144 5.21083 3 5.27165 3 5.3365V12.6436C3 12.7998 3.17091 12.8957 3.30418 12.8144L6.08425 11.1178C6.14471 11.0809 6.22017 11.0788 6.28264 11.1121L9.71736 12.9462C9.77983 12.9795 9.85529 12.9774 9.91575 12.9405L12.9042 11.1168C12.9637 11.0804 13 11.0157 13 10.946V3.38471C13 3.22279 12.8176 3.12799 12.6851 3.221L9.92531 5.15793C9.86024 5.2036 9.7743 5.20639 9.7064 5.16505L6.26309 3.06841C6.19491 3.02689 6.10856 3.0299 6.04343 3.07606L3.08435 5.17333Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.18164 3.29138V10.7669"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.81836 5.23315V13"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMapOutlined);
const Memo = memo(ForwardRef);
export default Memo;
