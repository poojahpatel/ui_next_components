// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCubeOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M21.5752 16.4739V8.47387C21.5748 8.12315 21.4823 7.77868 21.3067 7.47503C21.1312 7.17139 20.8789 6.91923 20.5752 6.74387L13.5752 2.74387C13.2712 2.56833 12.9263 2.47592 12.5752 2.47592C12.2241 2.47592 11.8792 2.56833 11.5752 2.74387L4.5752 6.74387C4.27146 6.91923 4.01918 7.17139 3.84366 7.47503C3.66814 7.77868 3.57556 8.12315 3.5752 8.47387V16.4739C3.57556 16.8246 3.66814 17.1691 3.84366 17.4727C4.01918 17.7764 4.27146 18.0285 4.5752 18.2039L11.5752 22.2039C11.8792 22.3794 12.2241 22.4718 12.5752 22.4718C12.9263 22.4718 13.2712 22.3794 13.5752 22.2039L20.5752 18.2039C20.8789 18.0285 21.1312 17.7764 21.3067 17.4727C21.4823 17.1691 21.5748 16.8246 21.5752 16.4739Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M3.84521 7.43388L12.5752 12.4839L21.3052 7.43388"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M12.5752 22.5539V12.4739"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCubeOutlined);
const Memo = memo(ForwardRef);
export default Memo;
