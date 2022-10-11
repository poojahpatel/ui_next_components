// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLinkedInCircle = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={50}
      height={50}
      fill="none"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM32.2917 38.5417H17.7083C14.2566 38.5417 11.4583 35.7434 11.4583 32.2917V17.7083C11.4583 14.2566 14.2566 11.4583 17.7083 11.4583H32.2917C35.7434 11.4583 38.5417 14.2566 38.5417 17.7083V32.2917C38.5417 35.7434 35.7434 38.5417 32.2917 38.5417ZM18.4367 30.987C18.4367 31.2171 18.6232 31.4036 18.8534 31.4036H20.7284C20.9585 31.4036 21.145 31.2171 21.145 30.987V22.8303C21.145 22.6002 20.9585 22.4136 20.7284 22.4136H18.8534C18.6232 22.4136 18.4367 22.6002 18.4367 22.8303V30.987ZM27.7083 24.6447C28.8081 24.6447 29.1667 25.5354 29.1667 26.6352V30.9874C29.1667 31.2175 29.3532 31.4041 29.5833 31.4041H31.7292C31.9593 31.4041 32.1459 31.2175 32.1459 30.9874V26.6352C32.1459 23.7852 30.9396 21.8508 27.8985 22.3878C27.1172 22.5616 26.5464 22.8525 26.1296 23.2438V22.8303C26.1296 22.6002 25.943 22.4136 25.7129 22.4136H23.8379C23.6078 22.4136 23.4212 22.6002 23.4212 22.8303V30.987C23.4212 31.2171 23.6078 31.4036 23.8379 31.4036H25.7129C25.943 31.4036 26.1296 31.2171 26.1296 30.987V26.6649L26.1423 26.6352C26.1423 25.5354 26.6085 24.6447 27.7083 24.6447ZM19.7917 20.8333C20.6528 20.8333 21.3542 20.1319 21.3542 19.2708C21.3542 18.4028 20.6528 17.7083 19.7847 17.7083C18.9237 17.7083 18.2223 18.4097 18.2292 19.2708C18.2292 20.1319 18.9306 20.8333 19.7917 20.8333Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLinkedInCircle);
const Memo = memo(ForwardRef);
export default Memo;
