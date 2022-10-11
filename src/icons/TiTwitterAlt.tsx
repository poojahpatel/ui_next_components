// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTwitterAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={20} cy={20} r={20} fill="none" />
      <path
        fillRule="evenodd"
        d="M27.8137 15.4974C27.2207 15.7579 26.6277 15.9532 25.9688 16.0183C26.6277 15.6277 27.1548 14.9766 27.4184 14.2604C26.7595 14.6511 26.1006 14.9115 25.3758 15.0417C24.7828 14.3906 23.9262 14 23.0037 14C21.2247 14 19.7751 15.4323 19.7751 17.1902C19.7751 17.4506 19.7751 17.7111 19.841 17.9064C17.0736 17.7762 14.7015 16.474 13.1201 14.5209C12.7907 15.0417 12.6589 15.5626 12.6589 16.1485C12.6589 17.2553 13.2519 18.2319 14.1085 18.8179C13.5814 18.8179 13.0542 18.6877 12.6589 18.4272C12.6589 18.4272 12.6589 18.4272 12.6589 18.4923C12.6589 20.0549 13.779 21.357 15.2286 21.6174C14.9651 21.6826 14.7015 21.7477 14.3721 21.7477C14.1744 21.7477 13.9767 21.7477 13.779 21.6826C14.1744 22.9847 15.3604 23.8962 16.81 23.8962C15.6899 24.7426 14.3062 25.2634 12.7907 25.2634C12.5271 25.2634 12.2636 25.2634 12 25.1983C13.4496 26.1098 15.1627 26.6306 16.9418 26.6306C22.9378 26.6306 26.1665 21.7477 26.1665 17.5157C26.1665 17.3855 26.1665 17.2553 26.1665 17.1251C26.8254 16.6694 27.3525 16.0834 27.8137 15.4974Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTwitterAlt);
const Memo = memo(ForwardRef);
export default Memo;