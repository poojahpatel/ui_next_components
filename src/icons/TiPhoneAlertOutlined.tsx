// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneAlertOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_6778_15390)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.7}
          fill="none"
          stroke="#081D13"
          d="M10.1305 13.869C8.96054 12.699 8.07854 11.389 7.49254 10.06C7.36954 9.779 7.44154 9.45 7.65854 9.233L8.47754 8.414C9.14854 7.743 9.14854 6.794 8.56254 6.208L7.38954 5.035C6.60854 4.254 5.34254 4.254 4.56154 5.035L3.90954 5.686C3.16854 6.427 2.85954 7.496 3.05954 8.556C3.55354 11.169 5.07154 14.03 7.52054 16.479C9.96954 18.928 12.8305 20.446 15.4435 20.94C16.5035 21.14 17.5725 20.831 18.3135 20.09L18.9645 19.439C19.7455 18.658 19.7455 17.392 18.9645 16.611L17.7915 15.438C17.2055 14.852 16.2555 14.852 15.6705 15.438L14.7675 16.342C14.5505 16.559 14.2215 16.632 13.9405 16.508C12.6115 15.921 11.3005 15.038 10.1305 13.869Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="#F74A46"
          d="M16.8887 6.54676V3.8"
        />
        <circle cx={16.9498} cy={8.11234} r={0.65} fill="#F74A46" />
        <circle cx={17} cy={6} r={5} strokeWidth={1.5} fill="none" stroke="#F74A46" />
      </g>
      <defs>
        <clipPath id="clip0_6778_15390">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneAlertOutlined);
const Memo = memo(ForwardRef);
export default Memo;
