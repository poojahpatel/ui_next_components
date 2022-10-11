// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWebsiteFooterOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16 12.6875L16 4.8125C16 3.12113 14.6289 1.75 12.9375 1.75L5.0625 1.75C3.37113 1.75 2 3.12113 2 4.8125L2 12.6875C2 14.3789 3.37113 15.75 5.0625 15.75L12.9375 15.75C14.6289 15.75 16 14.3789 16 12.6875Z"
      />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M16 5.78491L2 5.78491" />
      <circle cx={4.52767} cy={3.889} r={0.583333} fill="currentColor" />
      <circle cx={6.47201} cy={3.889} r={0.583333} fill="currentColor" />
      <circle cx={8.41658} cy={3.889} r={0.583333} fill="currentColor" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.74976 13.5H13.2498"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWebsiteFooterOutlined);
const Memo = memo(ForwardRef);
export default Memo;
