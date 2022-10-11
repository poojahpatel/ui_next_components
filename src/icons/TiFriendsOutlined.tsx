// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFriendsOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
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
        d="M8.05911 3.88236C8.05911 4.92196 7.21635 5.76472 6.17676 5.76472C5.13716 5.76472 4.29441 4.92196 4.29441 3.88236C4.29441 2.84277 5.13716 2.00001 6.17676 2.00001C7.21635 2.00001 8.05911 2.84277 8.05911 3.88236Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.647 3.88236C14.647 4.92196 13.8042 5.76472 12.7646 5.76472C11.7251 5.76472 10.8823 4.92196 10.8823 3.88236C10.8823 2.84277 11.7251 2.00001 12.7646 2.00001C13.8042 2.00001 14.647 2.84277 14.647 3.88236Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.82353 11.4118L2.70874 12.5266C2.5156 12.7197 2.38762 12.9684 2.34272 13.2378L2.01214 15.2213C1.97119 15.467 1.75862 15.6471 1.50954 15.6471V15.6471C1.22813 15.6471 1 15.4189 1 15.1375V12.6409C1 12.1463 1.1464 11.6628 1.42074 11.2512L2.93809 8.97523C3.49126 8.14546 4.42253 7.64706 5.41978 7.64706H13.4386C13.8461 7.64706 14.1765 7.97743 14.1765 8.38497V8.38497C14.1765 8.76661 13.8855 9.08529 13.5054 9.11984L9 9.52942"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 11L13.9998 14.1178C13.9997 15.2223 13.1043 16.1176 11.9998 16.1176H10.7056"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.0002 9.52942L9.0002 14.6177C9.0002 15.4461 8.32863 16.1177 7.5002 16.1177L5.32373 16.1177C4.4953 16.1177 3.82373 15.4461 3.82373 14.6177L3.82373 14.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16.0587 9.05882L16.9027 11.5907C16.9671 11.7839 16.9999 11.9862 16.9999 12.1898V15.1375C16.9999 15.4189 16.7718 15.6471 16.4904 15.6471V15.6471C16.2413 15.6471 16.0287 15.467 15.9878 15.2213L15.6794 13.3712C15.6197 13.0131 15.4619 12.6786 15.2235 12.4049L14 11"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFriendsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
