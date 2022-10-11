// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRecordVoicemailOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_11260_55827)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.02663 6.49956C6.9986 7.54096 6.9986 9.2294 6.02663 10.2708C5.05466 11.3122 3.47878 11.3122 2.50681 10.2708C1.53484 9.22939 1.53484 7.54095 2.50681 6.49956C3.47879 5.45816 5.05466 5.45816 6.02663 6.49956"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.4933 6.49956C14.4653 7.54096 14.4653 9.2294 13.4933 10.2708C12.5213 11.3122 10.9455 11.3122 9.97349 10.2708C9.00151 9.22939 9.00151 7.54095 9.97349 6.49956C10.9455 5.45816 12.5213 5.45816 13.4933 6.49956"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M11.7334 11.052H4.26672"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M2.40002 2.38525H14.2222"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M2.40002 14.3853H14.2222"
        />
      </g>
      <defs>
        <clipPath id="clip0_11260_55827">
          <rect width={16} height={16} transform="translate(0 0.385254)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRecordVoicemailOutlined);
const Memo = memo(ForwardRef);
export default Memo;
