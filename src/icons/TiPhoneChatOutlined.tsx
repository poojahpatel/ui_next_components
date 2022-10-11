// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneChatOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6760_706)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.65}
          fill="none"
          stroke="currentColor"
          d="M16.3274 13.363C15.4724 13.363 14.6634 13.174 13.9364 12.837L10.4414 13.579L11.1724 10.077C10.8334 9.348 10.6434 8.535 10.6434 7.678C10.6434 4.543 13.1854 2 16.3224 2C19.4594 2 22.0004 4.543 22.0004 7.678C22.0004 10.813 19.4574 13.356 16.3224 13.356"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.65}
          fill="none"
          stroke="currentColor"
          d="M15.2001 18.371L14.2301 17.401C13.7451 16.916 12.9601 16.916 12.4761 17.401L11.7141 18.163C11.5441 18.333 11.2861 18.39 11.0661 18.294C9.9611 17.81 8.8701 17.077 7.8971 16.104C6.9281 15.135 6.1971 14.049 5.7131 12.948C5.6121 12.721 5.6711 12.454 5.8471 12.277L6.5301 11.594C7.0851 11.039 7.0851 10.255 6.6001 9.77L5.6291 8.8C4.9831 8.154 3.9371 8.154 3.2911 8.8L2.7521 9.339C2.1391 9.952 1.8841 10.836 2.0491 11.712C2.4571 13.872 3.7131 16.238 5.7371 18.263C7.7611 20.288 10.1271 21.543 12.2881 21.951C13.1641 22.116 14.0481 21.861 14.6611 21.248L15.2001 20.71C15.8451 20.064 15.8451 19.017 15.2001 18.371V18.371Z"
        />
        <circle cx={13.75} cy={7.75} r={0.75} fill="none" />
        <circle cx={16.25} cy={7.75} r={0.75} fill="none" />
        <circle cx={18.75} cy={7.75} r={0.75} fill="none" />
      </g>
      <defs>
        <clipPath id="clip0_6760_706">
          <rect width={24} height={24} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneChatOutlined);
const Memo = memo(ForwardRef);
export default Memo;
