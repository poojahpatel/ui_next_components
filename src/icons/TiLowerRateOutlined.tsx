// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLowerRateOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={74}
      height={83}
      fill="none"
      viewBox="0 0 74 83"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#82016E"
        d="M36.0123 17.9559C36.0056 13.6514 32.4501 10.1998 28.1473 10.3207V10.3207C24.0075 10.4369 20.7118 13.8264 20.7118 17.9679L20.7118 55.0687L13.9757 48.4398C11.7785 46.2775 8.23333 46.3431 6.11764 48.5853L3.69615 51.1516C1.64239 53.3281 1.70571 56.7473 3.83867 58.8463L25.2884 79.9548C27.0182 81.6571 29.7824 81.6935 31.5564 80.0372L54.4162 58.6947C56.5825 56.6722 56.7568 53.2969 54.8102 51.0621L52.5811 48.5028C50.636 46.2696 47.2717 45.9776 44.9708 47.8422L36.0539 55.0687V44.5001L36.0123 17.9559Z"
        clipRule="evenodd"
      />
      <path strokeLinecap="round" strokeWidth={3} fill="none" stroke="#FFC227" d="M47.2188 5.9235L70.2319 28.5706" />
      <ellipse
        fill="#F5F9FD"
        stroke="#FFC227"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        rx={6.13684}
        ry={6.03922}
        transform="matrix(1 0 0 -1 66.295 8.53329)"
      />
      <ellipse
        fill="#F5F9FD"
        stroke="#FFC227"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        rx={6.13684}
        ry={6.03922}
        transform="matrix(1 0 0 -1 50.2872 25.9608)"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLowerRateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
