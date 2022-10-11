// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatOnlineOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M17.4855 3.51436C18.1714 4.20017 18.1714 5.31096 17.4855 5.99677C16.7997 6.68258 15.6889 6.68258 15.0031 5.99677C14.3173 5.31096 14.3173 4.20017 15.0031 3.51436C15.6889 2.82855 16.8006 2.82855 17.4855 3.51436Z"
      />
      <path d="M17.9162 10.1451C17.9162 9.73086 17.5804 9.39507 17.1662 9.39507C16.752 9.39507 16.4162 9.73086 16.4162 10.1451H17.9162ZM10.8706 14.8516V14.1016C10.7002 14.1016 10.535 14.1595 10.402 14.266L10.8706 14.8516ZM6.9357 14.8516H7.6857C7.6857 14.4374 7.34991 14.1016 6.9357 14.1016V14.8516ZM5.36075 14.8516V14.1016V14.8516ZM10.9664 4.58362C11.3806 4.58362 11.7164 4.24783 11.7164 3.83362C11.7164 3.4194 11.3806 3.08362 10.9664 3.08362V4.58362ZM7.74807 17.3498L8.21662 17.9355L7.74807 17.3498ZM16.4162 10.1451V12.4908H17.9162V10.1451H16.4162ZM16.4162 12.4908C16.4162 13.3807 15.6953 14.1016 14.8054 14.1016V15.6016C16.5238 15.6016 17.9162 14.2092 17.9162 12.4908H16.4162ZM14.8054 14.1016H10.8706V15.6016H14.8054V14.1016ZM10.402 14.266L7.27952 16.7642L8.21662 17.9355L11.3391 15.4372L10.402 14.266ZM7.6857 16.9594V14.8516H6.1857V16.9594H7.6857ZM6.9357 14.1016H5.36075V15.6016H6.9357V14.1016ZM5.36075 14.1016C4.47084 14.1016 3.75 13.3807 3.75 12.4908H2.25C2.25 14.2092 3.64242 15.6016 5.36075 15.6016V14.1016ZM3.75 12.4908V6.19437H2.25V12.4908H3.75ZM3.75 6.19437C3.75 5.30446 4.47084 4.58362 5.36075 4.58362V3.08362C3.64242 3.08362 2.25 4.47604 2.25 6.19437H3.75ZM5.36075 4.58362H10.9664V3.08362H5.36075V4.58362ZM7.27952 16.7642C7.4432 16.6333 7.6857 16.7498 7.6857 16.9594H6.1857C6.1857 18.0076 7.39818 18.5903 8.21662 17.9355L7.27952 16.7642Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatOnlineOutlined);
const Memo = memo(ForwardRef);
export default Memo;