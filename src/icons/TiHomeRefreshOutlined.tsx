// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeRefreshOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13655_80363)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.37109 4.20001L10.9711 2.6L9.37109 1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M8.42813 13.8L6.82812 15.4L8.42813 17"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.4383 4.49689C14.5864 5.65369 15.2992 7.24169 15.2992 9.0001C15.2992 12.5345 12.4335 15.4001 8.89914 15.4001C8.27033 15.4001 7.66473 15.3057 7.09033 15.1369"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.3032 13.4497C3.188 12.2977 2.5 10.7297 2.5 9.00011C2.5 5.4657 5.36561 2.6001 8.90002 2.6001C9.52882 2.6001 10.1344 2.6945 10.7088 2.8633"
        />
        <path
          fillRule="evenodd"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.10955 7.79657L8.62216 6.78817C8.90443 6.59999 9.27216 6.59999 9.55443 6.78817L11.067 7.79657C11.3008 7.95242 11.4412 8.2148 11.4412 8.49577V10.343C11.4412 10.8071 11.065 11.1833 10.6009 11.1833H7.57569C7.11158 11.1833 6.73535 10.8071 6.73535 10.343V8.49577C6.73535 8.2148 6.87577 7.95242 7.10955 7.79657Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_13655_80363">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeRefreshOutlined);
const Memo = memo(ForwardRef);
export default Memo;
