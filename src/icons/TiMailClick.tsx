// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailClick = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={28}
      fill="none"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={28} height={28} rx={5.83333} fill="none" />
      <g clipPath="url(#clip0_12170_57520)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          fill="none"
          stroke="currentColor"
          d="M20.2207 15.5776V11.6973"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          fill="none"
          stroke="currentColor"
          d="M13.2203 20.2441H8.5536C7.69416 20.2441 6.99805 19.548 6.99805 18.6885V11.6667"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          fill="none"
          stroke="currentColor"
          d="M8.56259 12.8551L13.12 14.9621C13.4306 15.1057 13.7886 15.1057 14.0992 14.9621L18.6566 12.8551C18.6566 12.8551 20.2207 12.1551 20.2207 11.291C20.2207 10.7723 19.9633 10.2877 19.5339 9.99681L15.3674 7.1727C14.3057 6.45325 12.9119 6.45325 11.8503 7.1727L7.68448 9.99603C7.25593 10.2869 6.99848 10.7723 6.99848 11.2903C6.99848 12.1544 8.56259 12.8551 8.56259 12.8551Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28333}
          fill="none"
          stroke="currentColor"
          d="M14.9316 16.917L17.3619 22.7503L18.2247 20.21L20.7649 19.3472L14.9316 16.917Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28333}
          fill="none"
          stroke="currentColor"
          d="M18.3672 20.3542L20.4296 22.4167"
        />
      </g>
      <defs>
        <clipPath id="clip0_12170_57520">
          <rect width={18.6667} height={18.6667} transform="translate(4.66602 4.66675)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailClick);
const Memo = memo(ForwardRef);
export default Memo;
