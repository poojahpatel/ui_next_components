// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneOutgoingAlt = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_12157_52525)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M10.1305 13.869C8.96054 12.699 8.07854 11.389 7.49254 10.06C7.36954 9.77897 7.44154 9.44997 7.65854 9.23297L8.47754 8.41397C9.14854 7.74297 9.14854 6.79397 8.56254 6.20797L7.38954 5.03497C6.60854 4.25397 5.34254 4.25397 4.56154 5.03497L3.90954 5.68597C3.16854 6.42697 2.85954 7.49597 3.05954 8.55597C3.55354 11.169 5.07154 14.03 7.52054 16.479C9.96954 18.928 12.8305 20.446 15.4435 20.94C16.5035 21.14 17.5725 20.831 18.3135 20.09L18.9645 19.439C19.7455 18.658 19.7455 17.392 18.9645 16.611L17.7915 15.438C17.2055 14.852 16.2555 14.852 15.6705 15.438L14.7675 16.342C14.5505 16.559 14.2215 16.632 13.9405 16.508C12.6115 15.921 11.3005 15.038 10.1305 13.869Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M21 9V3H15"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          fill="none"
          stroke="currentColor"
          d="M15 9L21 3"
        />
      </g>
      <defs>
        <clipPath id="clip0_12157_52525">
          <rect width={24} height={24} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneOutgoingAlt);
const Memo = memo(ForwardRef);
export default Memo;
