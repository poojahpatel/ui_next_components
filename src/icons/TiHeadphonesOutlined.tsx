// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHeadphonesOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9953_36669)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M13.3334 11.8666H12.6C12.1952 11.8666 11.8667 11.5381 11.8667 11.1333V7.46661C11.8667 7.06181 12.1952 6.73328 12.6 6.73328H13.3334C14.1437 6.73328 14.8 7.38961 14.8 8.19994V10.3999C14.8 11.2103 14.1437 11.8666 13.3334 11.8666Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M3.8001 11.8666H3.06676C2.25643 11.8666 1.6001 11.2103 1.6001 10.3999V8.19994C1.6001 7.38961 2.25643 6.73328 3.06676 6.73328H3.8001C4.2049 6.73328 4.53343 7.06181 4.53343 7.46661V11.1333C4.53343 11.5381 4.2049 11.8666 3.8001 11.8666Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M12.9669 6.73331V6.36664C12.9669 3.73398 10.8329 1.59998 8.20026 1.59998C5.56759 1.59998 3.43359 3.73398 3.43359 6.36664V6.73331"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M8.48314 14.9834H7.39147C6.78887 14.9834 6.2998 14.4943 6.2998 13.8917C6.2998 13.2891 6.78887 12.8 7.39147 12.8H8.48314C9.08574 12.8 9.5748 13.2891 9.5748 13.8917C9.5748 14.4943 9.08574 14.9834 8.48314 14.9834Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="currentColor"
          d="M9.5752 14.0667H11.1335C11.9439 14.0667 12.6002 13.4104 12.6002 12.6V11.8667"
        />
      </g>
      <defs>
        <clipPath id="clip0_9953_36669">
          <rect width={16} height={16} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHeadphonesOutlined);
const Memo = memo(ForwardRef);
export default Memo;
