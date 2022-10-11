// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNotesOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13683_80181)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.1804 9.30402C14.7109 8.77349 15.5714 8.7727 16.1019 9.30402C16.6325 9.83455 16.6325 10.6951 16.1012 11.2256L11.5427 15.7801C11.3951 15.9277 11.1945 16.0106 10.9853 16.0106H9.39453V14.4198C9.39453 14.2106 9.47743 14.0101 9.62585 13.8617L14.1804 9.30402V9.30402Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.6582 6.53687H10.974"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.6582 9.69476H8.6056"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.6582 12.8527H7.02664"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M15.0948 12.2369L13.1685 10.3106"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.1317 6.53687V5.58948C14.1317 3.93262 12.7885 2.58948 11.1317 2.58948H4.5C2.84315 2.58948 1.5 3.93262 1.5 5.58948V13.0106C1.5 14.6675 2.84315 16.0106 4.5 16.0106H6.23687"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.9736 1.79999V3.37895"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.81592 1.79999V3.37895"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M4.6582 1.79999V3.37895"
        />
      </g>
      <defs>
        <clipPath id="clip0_13683_80181">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNotesOutlined);
const Memo = memo(ForwardRef);
export default Memo;
