// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRedoAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M15.5 4.70711C15.5 4.26165 16.0386 4.03857 16.3536 4.35355L18.6464 6.64645C18.8417 6.84171 18.8417 7.15829 18.6464 7.35355L16.3536 9.64645" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M16.3536 9.64645L18.6464 7.35355C18.8417 7.15829 18.8417 6.84171 18.6464 6.64645L16.3536 4.35355C16.0386 4.03857 15.5 4.26165 15.5 4.70711V9.29289C15.5 9.73835 16.0386 9.96143 16.3536 9.64645Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M18.5 6.87134H10.7857C7.94514 6.87134 5.64285 8.98162 5.64285 11.5856C5.64285 14.1896 7.94514 16.2999 10.7857 16.2999H17.6429"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M17.5 19H11.5"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRedoAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
