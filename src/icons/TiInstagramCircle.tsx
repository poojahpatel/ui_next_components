// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiInstagramCircle = (props: SvgIconProps) => {
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
      <path d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM31.25 37.5H18.75C15.2982 37.5 12.5 34.7018 12.5 31.25V18.75C12.5 15.2982 15.2982 12.5 18.75 12.5H31.25C34.7018 12.5 37.5 15.2982 37.5 18.75V31.25C37.5 34.7018 34.7018 37.5 31.25 37.5ZM30.5542 18.0576C30.5542 18.823 31.1797 19.4444 31.9451 19.4444C32.7106 19.4444 33.332 18.823 33.332 18.0576C33.3361 17.2881 32.7106 16.6667 31.941 16.6667C31.1756 16.6708 30.5542 17.2922 30.5542 18.0576ZM27.5764 22.4214C29.0002 23.8452 29.0002 26.1536 27.5764 27.5774C26.1526 29.0012 23.8442 29.0012 22.4204 27.5774C20.9966 26.1536 20.9966 23.8452 22.4204 22.4214C23.8442 20.9976 26.1526 20.9976 27.5764 22.4214ZM20.5053 20.5063C18.0238 22.9878 18.0238 27.011 20.5053 29.4925C22.9868 31.9739 27.01 31.9739 29.4915 29.4925C31.9729 27.011 31.9729 22.9878 29.4915 20.5063C27.01 18.0249 22.9868 18.0249 20.5053 20.5063Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiInstagramCircle);
const Memo = memo(ForwardRef);
export default Memo;
