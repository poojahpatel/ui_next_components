// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFormEditAltOutlined = (props: SvgIconProps) => {
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
      <path d="M14.7999 5.4001L14.1999 5.4001L14.7999 5.4001ZM8.39992 16.0001C8.7313 16.0001 8.99992 15.7315 8.99992 15.4001C8.99992 15.0687 8.7313 14.8001 8.39992 14.8001L8.39992 16.0001ZM14.1999 7.4001C14.1999 7.73147 14.4686 8.0001 14.7999 8.0001C15.1313 8.0001 15.3999 7.73147 15.3999 7.4001L14.1999 7.4001ZM8.39992 14.8001L4.79992 14.8001L4.79992 16.0001L8.39992 16.0001L8.39992 14.8001ZM4.79992 14.8001C3.5849 14.8001 2.59992 13.8151 2.59992 12.6001L1.39992 12.6001C1.39992 14.4779 2.92215 16.0001 4.79992 16.0001L4.79992 14.8001ZM2.59992 12.6001L2.59992 5.4001L1.39992 5.4001L1.39992 12.6001L2.59992 12.6001ZM2.59992 5.4001C2.59992 4.18507 3.5849 3.2001 4.79992 3.2001L4.79992 2.0001C2.92216 2.0001 1.39992 3.52233 1.39992 5.4001L2.59992 5.4001ZM4.79992 3.2001L11.9999 3.2001L11.9999 2.0001L4.79992 2.0001L4.79992 3.2001ZM11.9999 3.2001C13.215 3.2001 14.1999 4.18507 14.1999 5.4001L15.3999 5.4001C15.3999 3.52233 13.8777 2.0001 11.9999 2.0001L11.9999 3.2001ZM14.1999 5.4001L14.1999 7.4001L15.3999 7.4001L15.3999 5.4001L14.1999 5.4001Z" />
      <path strokeLinecap="round" strokeWidth={1.2} fill="none" stroke="currentColor" d="M11.2001 7L4.80007 7" />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.40015 10.2002L4.80015 10.2002"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.3462 14.8004L15.7899 12.3726C16.0697 12.0946 16.0697 11.6445 15.7899 11.3671L14.6546 10.2393C14.3748 9.96125 13.9217 9.96125 13.6425 10.2393L11.1989 12.667C11.0643 12.8007 10.9891 12.9813 10.9891 13.1698L10.9891 15.0087L12.8401 15.0087C13.0298 15.0087 13.2116 14.9341 13.3462 14.8004V14.8004Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFormEditAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
