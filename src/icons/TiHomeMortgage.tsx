// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeMortgage = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={19}
      height={21}
      fill="none"
      viewBox="0 0 19 21"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M0.353793 8.59235C-0.419817 9.40829 0.158601 10.7538 1.28299 10.7538H17.2384C18.379 10.7538 18.9504 9.37496 18.1441 8.56821L9.95647 0.375322C9.44703 -0.134438 8.61743 -0.123526 8.12158 0.39946L0.353793 8.59235ZM15.3165 2.74884C14.9059 2.37223 14.2435 2.66349 14.2435 3.22065V4.66436L15.9822 6.40419V3.92252C15.9822 3.56374 15.8317 3.22143 15.5673 2.97891L15.3165 2.74884Z"
        clipRule="evenodd"
        fill="#081D13"
      />
      <path
        fillRule="evenodd"
        d="M4.12796 20.0328C3.15322 20.0328 2.36342 19.2419 2.3648 18.2671L2.37544 10.7447L4.33799 8.68144C4.99913 7.98638 6.09464 7.94742 6.80348 8.59376L8.02586 9.70835C8.68133 10.306 9.67878 10.3237 10.355 9.74956L13.5384 7.04674C13.8066 6.81908 14.1469 6.69409 14.4986 6.69409V6.69409C15.318 6.69409 15.9823 7.35834 15.9823 8.17773V18.2696C15.9823 19.2434 15.1929 20.0328 14.2191 20.0328H4.12796Z"
        clipRule="evenodd"
        fill="#616B67"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeMortgage);
const Memo = memo(ForwardRef);
export default Memo;
