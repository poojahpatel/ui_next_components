// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFormEditOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M10 18L5.5 18C3.567 18 2 16.433 2 14.5L2 5.5C2 3.567 3.567 2 5.5 2L14.5 2C16.433 2 18 3.567 18 5.5L18 8"
      />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M13.5 7.5H5.5" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M10 11.5L5.5 11.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M16.1831 17.2507L19.2377 14.216C19.5876 13.8684 19.5876 13.3058 19.2377 12.9591L17.8187 11.5493C17.4689 11.2018 16.9025 11.2018 16.5536 11.5493L13.499 14.584C13.3308 14.7511 13.2368 14.9769 13.2368 15.2124V17.5111H15.5506C15.7877 17.5111 16.0149 17.4178 16.1831 17.2507V17.2507Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFormEditOutlined);
const Memo = memo(ForwardRef);
export default Memo;
