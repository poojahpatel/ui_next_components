// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneSettingOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.05545 9.22059C4.9468 7.84688 4.21542 6.36685 3.89531 4.96965C3.71808 4.19479 3.91937 3.39952 4.45092 2.83399L4.91864 2.33712C5.47888 1.74107 6.42094 1.70677 7.02303 2.26052L7.92732 3.09221C8.37908 3.50769 8.40451 4.20626 7.92318 4.71837L7.33568 5.34342C7.18002 5.50904 7.13526 5.75317 7.23432 5.95668C7.70599 6.9191 8.39741 7.85951 9.29939 8.68907C10.2013 9.51789 11.2005 10.1324 12.2052 10.5285C12.4176 10.6121 12.6605 10.5495 12.8162 10.3839L13.4639 9.69397C13.8835 9.24676 14.5904 9.22103 15.0422 9.63652L15.9465 10.4682C16.5486 11.0219 16.5825 11.9539 16.0222 12.5499L15.5553 13.0468C15.0237 13.6123 14.2365 13.8687 13.4424 13.7502C12.2564 13.5728 10.9925 13.1211 9.76061 12.4065"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.25122 10.8193L4.66506 11.7367"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.30811 15.3787L6.72194 16.296"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.5 13.2571L3.49797 13.3507"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.48877 13.7581L8.47305 13.8578"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.73532 15.9951L4.32563 15.185"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.66111 11.9235L7.23772 11.1196"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.19533 11.6833C7.23041 12.0748 7.75212 13.2313 7.3606 14.2664C6.96908 15.3015 5.81259 15.8232 4.77751 15.4317C3.74243 15.0401 3.22073 13.8837 3.61225 12.8486C4.00377 11.8135 5.16026 11.2918 6.19533 11.6833Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneSettingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
