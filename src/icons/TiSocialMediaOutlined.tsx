// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSocialMediaOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_80906)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.88891 7.44447H3.55556C2.69611 7.44447 2 6.74836 2 5.88891V3.55556C2 2.69611 2.69611 2 3.55556 2H5.88891C6.74836 2 7.44447 2.69611 7.44447 3.55556V5.88891C7.44447 6.74836 6.74836 7.44447 5.88891 7.44447Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14.4446 7.44447H12.1112C11.2518 7.44447 10.5557 6.74836 10.5557 5.88891V3.55556C10.5557 2.69611 11.2518 2 12.1112 2H14.4446C15.304 2 16.0001 2.69611 16.0001 3.55556V5.88891C16.0001 6.74836 15.304 7.44447 14.4446 7.44447Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.88891 16.0001H3.55556C2.69611 16.0001 2 15.304 2 14.4445V12.1112C2 11.2517 2.69611 10.5556 3.55556 10.5556H5.88891C6.74836 10.5556 7.44447 11.2517 7.44447 12.1112V14.4445C7.44447 15.304 6.74836 16.0001 5.88891 16.0001Z"
        />
        <path
          strokeLinecap="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M9.83838 15.8527C10.2714 15.1529 11.1401 14.4151 12.7331 14.4151C14.326 14.4151 15.1946 15.1529 15.6276 15.8527"
        />
        <path
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.7661 10.4001C13.7558 10.4001 14.5581 11.2723 14.5581 12.3483C14.5581 13.4242 13.7558 14.2964 12.7661 14.2964C11.7764 14.2964 10.9741 13.4242 10.9741 12.3483C10.9741 11.2723 11.7764 10.4001 12.7661 10.4001Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_80906">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSocialMediaOutlined);
const Memo = memo(ForwardRef);
export default Memo;
