// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyCash = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={19}
      fill="none"
      viewBox="0 0 25 19"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M0 3C0 1.89543 0.895431 1 2 1L19.3868 1C20.4914 1 21.3868 1.89543 21.3868 3V11.2866C21.3868 12.3911 20.4914 13.2866 19.3868 13.2866H2C0.895431 13.2866 0 12.3911 0 11.2866V3Z"
        clipRule="evenodd"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M21.9146 6H21.8209C22.9255 6 23.8209 6.89543 23.8209 8V16.2866C23.8209 17.3911 22.9255 18.2866 21.8209 18.2866H5C3.89543 18.2866 3 17.3911 3 16.2866V13.3595"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.35189 4.35741C4.08644 3.73807 4.5924 2.72119 4.5924 2.72119H16.6353C16.6353 2.72119 16.7952 3.85953 17.5855 4.55141C18.3757 5.24329 19.4265 5.33009 19.4265 5.33009V8.78154C19.4265 8.78154 18.2444 9.1205 17.5855 9.77706C16.9266 10.4336 16.6353 11.4597 16.6353 11.4597H4.5924C4.5924 11.4597 4.27958 10.2562 3.55991 9.61808C2.84024 8.97995 1.80469 8.85145 1.80469 8.85145V5.05614C1.80469 5.05614 2.61735 4.97674 3.35189 4.35741Z"
        clipRule="evenodd"
      />
      <circle cx={10.5} cy={7} r={2.5} strokeWidth={1.5} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyCash);
const Memo = memo(ForwardRef);
export default Memo;
