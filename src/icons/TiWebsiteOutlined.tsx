// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiWebsiteOutlined = (props: SvgIconProps) => {
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
        d="M16 13.1C16 14.4807 14.8807 15.6 13.5 15.6H4.5C3.11929 15.6 2 14.4807 2 13.1V5.5C2 4.11929 3.11929 3 4.5 3H13.5C14.8807 3 16 4.11929 16 5.5V13.1Z"
      />
      <path strokeWidth={1.2} fill="none" stroke="currentColor" d="M2 6.5H16" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M4 4.79999H4.1" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M5.59961 4.79999H5.69961" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M7.19922 4.79999H7.29922" />
      <path
        strokeLinejoin="round"
        d="M8.99986 13.8192C10.4517 12.2862 10.4517 9.81449 8.99986 8.28149C7.54806 9.81379 7.54806 12.2862 8.99986 13.8192Z"
        fill="none"
        stroke="currentColor"
      />
      <path
        strokeLinejoin="round"
        d="M9.00001 13.85C10.5498 13.85 11.8 12.5998 11.8 11.05C11.8 9.5002 10.5498 8.25 9.00001 8.25C7.45021 8.25 6.20001 9.5002 6.20001 11.05C6.20001 12.5998 7.45021 13.85 9.00001 13.85Z"
        fill="none"
        stroke="currentColor"
      />
      <path strokeLinejoin="round" d="M11.8 11.05H6.20001" fill="none" stroke="currentColor" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiWebsiteOutlined);
const Memo = memo(ForwardRef);
export default Memo;
