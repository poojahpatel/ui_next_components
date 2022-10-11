// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPngFileOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9070_8029)">
        <rect
          width={14}
          height={14}
          x={3}
          y={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.1}
          fill="none"
          stroke="currentColor"
          rx={2.28571}
        />
        <path d="M1.55 7C1.55 6.69624 1.30376 6.45 1 6.45C0.696243 6.45 0.45 6.69624 0.45 7H1.55ZM11 17.55C11.3038 17.55 11.55 17.3038 11.55 17C11.55 16.6962 11.3038 16.45 11 16.45V17.55ZM11 16.45H4.42857V17.55H11V16.45ZM1.55 13.5714V7H0.45V13.5714H1.55ZM4.42857 16.45C2.83878 16.45 1.55 15.1612 1.55 13.5714H0.45C0.45 15.7687 2.23127 17.55 4.42857 17.55V16.45Z" />
        <path d="M4.80369 10H5.69968V8.96729H6.3198C7.10838 8.96729 7.61619 8.48389 7.61619 7.72949V7.72461C7.61619 6.97021 7.10838 6.47705 6.3198 6.47705H4.80369V10ZM6.10496 7.16309C6.48582 7.16309 6.71043 7.3584 6.71043 7.72461V7.72949C6.71043 8.0957 6.48582 8.29346 6.10496 8.29346H5.69968V7.16309H6.10496ZM8.27637 10H9.12598V7.99805H9.16992L10.6445 10H11.355V6.47705H10.5054V8.45947H10.4614L8.9917 6.47705H8.27637V10ZM13.7583 10.0952C14.7544 10.0952 15.3574 9.50195 15.3574 8.53271V8.07861H13.8487V8.69385H14.4932L14.4907 8.75244C14.4663 9.11377 14.1856 9.35303 13.7779 9.35303C13.2652 9.35303 12.9331 8.92334 12.9331 8.22754V8.22266C12.9331 7.53906 13.2334 7.12402 13.7339 7.12402C14.0879 7.12402 14.3589 7.30957 14.4346 7.60498L14.4395 7.62695H15.3233L15.3208 7.60254C15.2305 6.88477 14.5933 6.38184 13.7339 6.38184C12.6768 6.38184 12.0225 7.08984 12.0225 8.23242V8.2373C12.0225 9.39453 12.6743 10.0952 13.7583 10.0952Z" />
      </g>
      <defs>
        <clipPath id="clip0_9070_8029">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPngFileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
