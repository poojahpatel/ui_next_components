// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAddCustomerOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={16} cy={16} r={15} strokeDasharray="3 3" strokeLinecap="round" fill="none" stroke="currentColor" />
      <path
        strokeLinecap="round"
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M22.3996 22.4003C22.3996 21.2959 21.0799 17.4659 15.9998 17.4659C10.9197 17.4659 9.59961 21.2959 9.59961 22.4003"
      />
      <path
        strokeWidth={1.3}
        fill="none"
        stroke="currentColor"
        d="M16.0626 9.59985C18.0016 9.59985 19.5735 11.3087 19.5735 13.4166C19.5735 15.5246 18.0016 17.2333 16.0626 17.2333C14.1236 17.2333 12.5518 15.5246 12.5518 13.4166C12.5518 11.3087 14.1236 9.59985 16.0626 9.59985Z"
      />
      <circle cx={25.2002} cy={22.2} r={6} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M25.2002 19.2V25.2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="white"
        d="M28.2002 22.2H22.2002"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAddCustomerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
