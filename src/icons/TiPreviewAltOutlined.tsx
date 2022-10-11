// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPreviewAltOutlined = (props: SvgIconProps) => {
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
        d="M-nan -nanL4.22289 8.72534C4.14706 8.58523 4.14706 8.41478 4.22289 8.27539C5.13361 6.58973 6.81639 5.12939 8.49917 5.12939C10.1819 5.12939 11.8647 6.58973 12.7754 8.27467C12.8513 8.41478 12.8513 8.58523 12.7754 8.72462C11.8647 10.4103 10.1819 11.8706 8.49917 11.8706C6.81639 11.8706 5.13361 10.4103 4.22289 8.72534L-nan -nanL-nan -nanZ"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.39392 7.60634C9.8875 8.09992 9.8875 8.90017 9.39392 9.39375C8.90034 9.88733 8.10009 9.88733 7.60651 9.39375C7.11293 8.90017 7.11293 8.09992 7.60651 7.60634C8.10009 7.11276 8.90034 7.11276 9.39392 7.60634"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M1.75 5.25V4.5C1.75 3.11929 2.86929 2 4.25 2H5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M1.75 12V12.75C1.75 14.1307 2.86929 15.25 4.25 15.25H5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15 12V12.75C15 14.1307 13.8807 15.25 12.5 15.25H11.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15 5.25V4.5C15 3.11929 13.8807 2 12.5 2H11.75"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPreviewAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
