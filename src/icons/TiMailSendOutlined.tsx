// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailSendOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_12170_56818)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M20 6.03882V13.0278"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M21 19.0278H15"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M19 17.0281L21 19.0281L19 21.0281"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M11 17.0278H5C3.895 17.0278 3 16.1328 3 15.0278V6.03882"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M5.011 4.02783H17.99C19.1 4.02783 20.001 4.92783 20.001 6.03883C20.001 6.70583 19.67 7.32883 19.118 7.70283L13.761 11.3338C12.396 12.2588 10.604 12.2588 9.239 11.3338L3.883 7.70383C3.331 7.32983 3 6.70583 3 6.03983V6.03883C3 4.92783 3.9 4.02783 5.011 4.02783V4.02783Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_12170_56818">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailSendOutlined);
const Memo = memo(ForwardRef);
export default Memo;
