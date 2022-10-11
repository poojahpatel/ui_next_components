// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoanTypesOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={19}
      height={18}
      fill="none"
      viewBox="0 0 19 18"
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
        d="M15.2144 8.28568L16.3572 7.14282L17.5001 8.28568"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.78571 9.42847L2.64286 10.5713L1.5 9.42847"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.21436 11.5237V8.03418"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.5 11.5237V8.03418"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.7856 11.5237V8.03418"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.45239 11.5239H12.5476"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.45239 6.6757V8.03418H12.5476V6.6757L9.50001 5.42847L6.45239 6.6757Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.81577 10.3718C2.70606 9.88419 2.64282 9.37829 2.64282 8.85714C2.64282 5.07048 5.7133 2 9.49997 2C11.8047 2 13.8352 3.14362 15.0786 4.88762"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16.1872 7.33936C16.2969 7.82697 16.3601 8.33288 16.3601 8.85402C16.3601 12.6407 13.2896 15.7112 9.50298 15.7112C7.19746 15.7112 5.16698 14.5675 3.92432 12.8235"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoanTypesOutlined);
const Memo = memo(ForwardRef);
export default Memo;
