// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDownloadCircleOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.1672 6.55542L8.00059 8.72203L5.83398 6.55542"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8 1.5V8.72202"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.11133 10.8886H10.8889"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.5961 3.40372C15.1346 5.94226 15.1346 10.0574 12.5961 12.5959C10.0576 15.1344 5.94245 15.1344 3.40391 12.5959C0.865365 10.0574 0.865365 5.94226 3.40391 3.40372"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDownloadCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
