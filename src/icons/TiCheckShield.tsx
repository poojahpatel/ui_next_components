// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCheckShield = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={38}
      height={31}
      fill="none"
      viewBox="0 0 38 31"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M11.7694 30.425C3.89464 25.7884 1.68886 13.2808 1.10923 8.22192C0.977428 7.07158 1.94121 6.10924 3.09582 6.02247C4.52855 5.9148 6.52505 5.61275 8.64466 4.82309C11.5947 3.72405 14.0555 1.9516 15.2004 1.04684C15.5964 0.733904 16.1738 0.746316 16.5569 1.07489C17.6503 2.01264 19.9734 3.82279 22.6533 4.82309C24.8383 5.63867 27.2746 5.92115 28.9162 6.01529C29.9758 6.07607 30.8544 6.90773 30.8021 7.96784C30.5724 12.6236 29.0803 24.5879 19.983 30.425"
        clipRule="evenodd"
        fill="#C2C5F1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
        d="M11.7199 26.9279C7.29342 22.3687 6.23788 13.2271 5.98617 9.12649C5.91746 8.00718 6.86837 7.10657 7.98703 7.02806C9.42607 6.92706 11.4667 6.62965 13.6362 5.82138C16.5863 4.72234 19.0471 2.94989 20.192 2.04513C20.588 1.7322 21.1653 1.74461 21.5485 2.07318C22.6419 3.01094 24.965 4.82108 27.6449 5.82138C29.8021 6.62661 32.2044 6.91219 33.8449 7.00991C34.9288 7.07448 35.8223 7.94745 35.7654 9.03178C35.5489 13.161 34.586 22.6482 30.304 26.7184"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
        d="M14.8922 17.4469L19.551 22.4385L28.8686 12.4553"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCheckShield);
const Memo = memo(ForwardRef);
export default Memo;
