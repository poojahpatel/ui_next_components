// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPageArrowOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M1 12.75C1 13.3023 1.44772 13.75 2 13.75C2.55228 13.75 3 13.3023 3 12.75H1ZM13 16.25C12.4477 16.25 12 16.6977 12 17.25C12 17.8023 12.4477 18.25 13 18.25V16.25ZM5.5 2.25H14.5V0.25H5.5V2.25ZM14.5 2.25C15.8807 2.25 17 3.36929 17 4.75H19C19 2.26472 16.9853 0.25 14.5 0.25V2.25ZM17 4.75V13.75H19V4.75H17ZM17 13.75C17 15.1307 15.8807 16.25 14.5 16.25V18.25C16.9853 18.25 19 16.2353 19 13.75H17ZM3 12.75V4.75H1V12.75H3ZM3 4.75C3 3.36929 4.11929 2.25 5.5 2.25V0.25C3.01472 0.25 1 2.26472 1 4.75H3ZM14.5 16.25H13V18.25H14.5V16.25Z" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M6 8.25H9" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M6 5.25H13" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="currentColor" d="M2 17.25H8" />
      <path d="M9.18333 14.9143C8.85985 14.5369 8.29168 14.4932 7.91429 14.8167C7.53689 15.1401 7.49319 15.7083 7.81667 16.0857L9.18333 14.9143ZM10 17.25L10.6833 17.8357C10.9722 17.4987 10.9722 17.0013 10.6833 16.6643L10 17.25ZM7.81667 18.4143C7.49319 18.7917 7.53689 19.3599 7.91429 19.6833C8.29168 20.0068 8.85985 19.9631 9.18333 19.5857L7.81667 18.4143ZM7.81667 16.0857L9.31667 17.8357L10.6833 16.6643L9.18333 14.9143L7.81667 16.0857ZM9.31667 16.6643L7.81667 18.4143L9.18333 19.5857L10.6833 17.8357L9.31667 16.6643Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPageArrowOutlined);
const Memo = memo(ForwardRef);
export default Memo;
