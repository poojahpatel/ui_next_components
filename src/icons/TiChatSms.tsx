// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatSms = (props: SvgIconProps) => {
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
      <rect width={24} height={24} rx={5} fill="currentColor" />
      <g clipPath="url(#clip0_6538_2487)">
        <path
          fillRule="evenodd"
          d="M9 7.05C7.75736 7.05 6.75 8.05736 6.75 9.3V13.05C6.75 14.2926 7.75736 15.075 9 15.075H9.375V16.575C9.375 16.8954 9.75079 17.0682 9.99405 16.8597L12 15.075H15C16.2426 15.075 17.25 14.2926 17.25 13.05V9.3C17.25 8.05736 16.2426 7.05 15 7.05H9ZM9.75 11.925C10.1642 11.925 10.5 11.5892 10.5 11.175C10.5 10.7608 10.1642 10.425 9.75 10.425C9.33579 10.425 9 10.7608 9 11.175C9 11.5892 9.33579 11.925 9.75 11.925ZM12.75 11.175C12.75 11.5892 12.4142 11.925 12 11.925C11.5858 11.925 11.25 11.5892 11.25 11.175C11.25 10.7608 11.5858 10.425 12 10.425C12.4142 10.425 12.75 10.7608 12.75 11.175ZM14.25 11.925C14.6642 11.925 15 11.5892 15 11.175C15 10.7608 14.6642 10.425 14.25 10.425C13.8358 10.425 13.5 10.7608 13.5 11.175C13.5 11.5892 13.8358 11.925 14.25 11.925Z"
          clipRule="evenodd"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6538_2487">
          <rect width={12} height={12} transform="translate(6 6)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatSms);
const Memo = memo(ForwardRef);
export default Memo;
