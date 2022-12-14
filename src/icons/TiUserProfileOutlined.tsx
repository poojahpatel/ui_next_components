// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiUserProfileOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        fill="none"
        stroke="currentColor"
        d="M14.3728 20.9H19C20.6021 20.9 21.9 19.6021 21.9 18V6C21.9 4.39794 20.6021 3.1 19 3.1H5C3.39794 3.1 2.1 4.39794 2.1 6V18C2.1 19.6021 3.39794 20.9 5 20.9H9.62721L11.3636 22.6364C11.7151 22.9879 12.2849 22.9879 12.6364 22.6364L14.3728 20.9Z"
      />
      <mask
        id="path-2-outside-1_12170_56857"
        width={16}
        height={8}
        x={4.24414}
        y={14.344}
        fill="black"
        maskUnits="userSpaceOnUse"
      >
        <rect width={16} height={8} x={4.24414} y={14.344} fill="none" />
        <path d="M6.24414 20C6.24414 17.981 7.88114 16.344 9.90014 16.344H14.0981C16.1171 16.344 17.7541 17.981 17.7541 20" />
      </mask>
      <path
        d="M4.49414 20C4.49414 20.9665 5.27764 21.75 6.24414 21.75C7.21064 21.75 7.99414 20.9665 7.99414 20H4.49414ZM16.0041 20V21.75H19.5041V20H16.0041ZM7.99414 20C7.99414 18.9475 8.84764 18.094 9.90014 18.094V14.594C6.91464 14.594 4.49414 17.0145 4.49414 20H7.99414ZM9.90014 18.094H14.0981V14.594H9.90014V18.094ZM14.0981 18.094C15.1506 18.094 16.0041 18.9475 16.0041 20H19.5041C19.5041 17.0145 17.0836 14.594 14.0981 14.594V18.094Z"
        mask="url(#path-2-outside-1_12170_56857)"
      />
      <mask
        id="path-4-outside-2_12170_56857"
        width={10}
        height={10}
        x={7.06836}
        y={6.33325}
        fill="black"
        maskUnits="userSpaceOnUse"
      >
        <rect width={10} height={10} x={7.06836} y={6.33325} fill="none" />
        <path d="M14.1094 9.19817C15.2627 10.3514 15.2627 12.2211 14.1094 13.3743C12.9562 14.5276 11.0865 14.5276 9.93327 13.3743C8.78005 12.2211 8.78005 10.3514 9.93327 9.19817C11.0865 8.04495 12.9562 8.04495 14.1094 9.19817" />
      </mask>
      <path
        d="M15.3469 7.96073C14.6635 7.27731 13.5554 7.27731 12.872 7.96073C12.1886 8.64415 12.1886 9.75218 12.872 10.4356L15.3469 7.96073ZM12.872 10.4356C13.5554 11.119 14.6635 11.119 15.3469 10.4356C16.0303 9.75218 16.0303 8.64415 15.3469 7.96073L12.872 10.4356ZM12.872 10.4356C13.3418 10.9054 13.3418 11.6671 12.872 12.1369L15.3469 14.6118C17.1835 12.7751 17.1835 9.79736 15.3469 7.96073L12.872 10.4356ZM12.872 12.1369C12.4022 12.6067 11.6405 12.6067 11.1707 12.1369L8.69584 14.6118C10.5325 16.4484 13.5102 16.4484 15.3469 14.6118L12.872 12.1369ZM11.1707 12.1369C10.7009 11.6671 10.7009 10.9054 11.1707 10.4356L8.69584 7.96073C6.8592 9.79736 6.8592 12.7751 8.69584 14.6118L11.1707 12.1369ZM11.1707 10.4356C11.6405 9.9658 12.4022 9.9658 12.872 10.4356L15.3469 7.96073C13.5102 6.12409 10.5325 6.12409 8.69584 7.96073L11.1707 10.4356Z"
        mask="url(#path-4-outside-2_12170_56857)"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiUserProfileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
