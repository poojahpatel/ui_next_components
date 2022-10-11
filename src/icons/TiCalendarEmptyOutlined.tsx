// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarEmptyOutlined = (props: SvgIconProps) => {
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
      <path d="M12.7 2C12.7 1.66863 12.4314 1.4 12.1 1.4C11.7686 1.4 11.5 1.66863 11.5 2H12.7ZM11.5 4.8C11.5 5.13137 11.7686 5.4 12.1 5.4C12.4314 5.4 12.7 5.13137 12.7 4.8H11.5ZM7.1 2C7.1 1.66863 6.83137 1.4 6.5 1.4C6.16863 1.4 5.9 1.66863 5.9 2H7.1ZM5.9 4.8C5.9 5.13137 6.16863 5.4 6.5 5.4C6.83137 5.4 7.1 5.13137 7.1 4.8H5.9ZM3 7C2.66863 7 2.4 7.26863 2.4 7.6C2.4 7.93137 2.66863 8.2 3 8.2V7ZM15.6 8.2C15.9314 8.2 16.2 7.93137 16.2 7.6C16.2 7.26863 15.9314 7 15.6 7V8.2ZM11.5 2V4.8H12.7V2H11.5ZM5.9 2V4.8H7.1V2H5.9ZM3 8.2H15.6V7H3V8.2ZM5.1 4H13.5V2.8H5.1V4ZM15 5.5V13.9H16.2V5.5H15ZM13.5 15.4H5.1V16.6H13.5V15.4ZM3.6 13.9V5.5H2.4V13.9H3.6ZM5.1 15.4C4.27157 15.4 3.6 14.7284 3.6 13.9H2.4C2.4 15.3912 3.60883 16.6 5.1 16.6V15.4ZM15 13.9C15 14.7284 14.3284 15.4 13.5 15.4V16.6C14.9912 16.6 16.2 15.3912 16.2 13.9H15ZM13.5 4C14.3284 4 15 4.67157 15 5.5H16.2C16.2 4.00883 14.9912 2.8 13.5 2.8V4ZM5.1 2.8C3.60883 2.8 2.4 4.00883 2.4 5.5H3.6C3.6 4.67157 4.27157 4 5.1 4V2.8Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarEmptyOutlined);
const Memo = memo(ForwardRef);
export default Memo;
