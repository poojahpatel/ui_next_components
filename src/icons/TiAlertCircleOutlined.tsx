// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlertCircleOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6764_6036)">
        <path
          fillRule="evenodd"
          d="M8.97578 11.275C9.34872 11.275 9.65078 11.5771 9.65078 11.95C9.65078 12.3229 9.34872 12.625 8.97578 12.625C8.60284 12.625 8.30078 12.3229 8.30078 11.95C8.30078 11.5771 8.60284 11.275 8.97578 11.275Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8.97578 10.375C9.38078 10.375 9.65078 10.231 9.65078 10.015V5.335C9.65078 5.119 9.38078 4.975 8.97578 4.975C8.57078 4.975 8.30078 5.119 8.30078 5.335V10.015C8.30078 10.231 8.57078 10.375 8.97578 10.375Z"
          clipRule="evenodd"
        />
        <path d="M9.02559 16.45C4.92487 16.45 1.60059 13.1257 1.60059 9.025C1.60059 4.92428 4.92487 1.6 9.02559 1.6C13.1263 1.6 16.4506 4.92428 16.4506 9.025C16.4506 13.1257 13.1263 16.45 9.02559 16.45ZM9.02559 15.1C12.3807 15.1 15.1006 12.3801 15.1006 9.025C15.1006 5.66987 12.3807 2.95 9.02559 2.95C5.67046 2.95 2.95059 5.66987 2.95059 9.025C2.95059 12.3801 5.67046 15.1 9.02559 15.1Z" />
      </g>
      <defs>
        <clipPath id="clip0_6764_6036">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlertCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
