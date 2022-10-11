// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoad = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM17.3684 10C17.3684 14.0695 14.0695 17.3684 10 17.3684C5.93053 17.3684 2.63158 14.0695 2.63158 10C2.63158 5.93053 5.93053 2.63158 10 2.63158C14.0695 2.63158 17.3684 5.93053 17.3684 10Z"
        clipRule="evenodd"
        fill="url(#paint0_linear_12957_79562)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12957_79562"
          x1={-1.3113e-7}
          x2={20}
          y1={5.5}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#018270" />
          <stop offset={1} stopColor="#018270" stopOpacity={0} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoad);
const Memo = memo(ForwardRef);
export default Memo;
