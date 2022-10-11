// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMovFileOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_9070_8057)">
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
        <path d="M4.3032 10H5.09177V7.75635H5.1406L5.94138 10H6.45164L7.25242 7.75635H7.30369V10H8.08982V6.47705H7.07175L6.22214 8.86719H6.17576L5.32371 6.47705H4.3032V10ZM10.4956 10.0952C11.5552 10.0952 12.2314 9.38477 12.2314 8.23975V8.23486C12.2314 7.09229 11.5527 6.38184 10.4956 6.38184C9.43604 6.38184 8.75732 7.09229 8.75732 8.23486V8.23975C8.75732 9.38477 9.43115 10.0952 10.4956 10.0952ZM10.4956 9.35303C9.99512 9.35303 9.66797 8.91846 9.66797 8.23975V8.23486C9.66797 7.55859 10 7.12402 10.4956 7.12402C10.9888 7.12402 11.3184 7.55859 11.3184 8.23486V8.23975C11.3184 8.91846 10.9888 9.35303 10.4956 9.35303ZM13.668 10H14.8252L15.9336 6.47705H14.9107L14.271 9.04785H14.2246L13.5825 6.47705H12.5596L13.668 10Z" />
      </g>
      <defs>
        <clipPath id="clip0_9070_8057">
          <rect width={18} height={18} fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMovFileOutlined);
const Memo = memo(ForwardRef);
export default Memo;
