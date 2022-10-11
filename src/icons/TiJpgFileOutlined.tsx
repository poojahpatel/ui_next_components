// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiJpgFileOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9070_8050)">
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
        <path d="M6.2197 10.0952C7.04246 10.0952 7.51365 9.64355 7.51365 8.8623V6.47705H6.61765V8.85498C6.61765 9.16992 6.47849 9.33594 6.2075 9.33594C5.95115 9.33594 5.7949 9.1626 5.79002 8.88672V8.87695H4.9282V8.8916C4.93796 9.63379 5.43113 10.0952 6.2197 10.0952ZM8.34717 10H9.24316V8.96729H9.86328C10.6519 8.96729 11.1597 8.48389 11.1597 7.72949V7.72461C11.1597 6.97021 10.6519 6.47705 9.86328 6.47705H8.34717V10ZM9.64844 7.16309C10.0293 7.16309 10.2539 7.3584 10.2539 7.72461V7.72949C10.2539 8.0957 10.0293 8.29346 9.64844 8.29346H9.24316V7.16309H9.64844ZM13.3897 10.0952C14.3858 10.0952 14.9888 9.50195 14.9888 8.53271V8.07861H13.48V8.69385H14.1245L14.1221 8.75244C14.0977 9.11377 13.8169 9.35303 13.4092 9.35303C12.8965 9.35303 12.5645 8.92334 12.5645 8.22754V8.22266C12.5645 7.53906 12.8648 7.12402 13.3653 7.12402C13.7193 7.12402 13.9903 7.30957 14.0659 7.60498L14.0708 7.62695H14.9546L14.9522 7.60254C14.8618 6.88477 14.2246 6.38184 13.3653 6.38184C12.3081 6.38184 11.6538 7.08984 11.6538 8.23242V8.2373C11.6538 9.39453 12.3057 10.0952 13.3897 10.0952Z" />
      </g>
      <defs>
        <clipPath id="clip0_9070_8050">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiJpgFileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
