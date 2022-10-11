// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiGlobeMarkerOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.0713 7.92857C11.0713 7.92857 13.5727 5.875 13.5727 4C13.5727 2.61929 12.4527 1.5 11.0713 1.5C9.68982 1.5 8.56982 2.61929 8.56982 4C8.56982 5.875 11.0713 7.92857 11.0713 7.92857Z"
      />
      <path d="M11.0735 3.64284C11.3692 3.64284 11.6092 3.88283 11.6071 4.17854C11.6071 4.47425 11.3671 4.71425 11.0714 4.71425C10.7756 4.71425 10.5357 4.47425 10.5357 4.17854C10.5357 3.88283 10.7756 3.64284 11.0735 3.64284Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M8.59357 3.66077C5.2 3.83648 2.5 6.63434 2.5 10.0715C2.5 13.6222 5.37786 16.5001 8.92857 16.5001C12.4793 16.5001 15.3571 13.6222 15.3571 10.0715C15.3571 8.1772 14.5343 6.48005 13.2307 5.30648"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.07112 15.8343V15.7836C6.07112 14.355 8.92827 14.5236 8.92827 12.9264C8.92827 11.4979 6.78541 11.4979 6.78541 9.35502C6.78541 7.33502 5.35684 7.21216 3.21398 7.21216H3.17041"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.1929 14.8714C13.085 14.83 12.9779 14.7864 12.8757 14.7264C11.85 14.1264 11.5057 12.8093 12.105 11.7836C12.705 10.7579 14.0222 10.4136 15.0479 11.0129C15.1236 11.0571 15.1872 11.1129 15.2557 11.1643"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiGlobeMarkerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
