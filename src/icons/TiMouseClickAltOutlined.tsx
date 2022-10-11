// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMouseClickAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M4.5542 4.64286C4.5542 2.63114 6.18534 1 8.19706 1C10.2088 1 11.8399 2.63114 11.8399 4.64286"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.0534 10.4284V8.92841C12.0534 8.2187 11.4774 7.6427 10.7676 7.6427C10.0579 7.6427 9.48193 8.2187 9.48193 8.92841"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.0537 9.78608C12.0537 9.07637 12.6297 8.50037 13.3394 8.50037C14.0491 8.50037 14.6251 9.07637 14.6251 9.78608V11.2861"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M9.48245 10.4287V4.64301C9.48245 3.9333 8.90645 3.3573 8.19674 3.3573C7.48703 3.3573 6.91103 3.9333 6.91103 4.64301V12.143L5.29617 10.5282C4.76817 10.0002 3.91103 10.0002 3.38303 10.5282C2.94245 10.9687 2.87388 11.6587 3.21931 12.1773L6.2416 16.7099C7.1956 18.1404 8.80103 19.0002 10.5205 19.0002H12.0539C14.8945 19.0002 17.1967 16.6979 17.1967 13.8573V10.643C17.1967 9.9333 16.6207 9.3573 15.911 9.3573C15.2013 9.3573 14.6253 9.9333 14.6253 10.643"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMouseClickAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
