// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiBuildingsMarkerOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={17}
      height={16}
      fill="none"
      viewBox="0 0 17 16"
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
        d="M5.32812 14.3783V3C5.32812 1.89543 6.22356 1 7.32813 1H11.1977C12.3023 1 13.1977 1.89543 13.1977 3V5.00005"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.32737 5.72168H3.39258C2.28801 5.72168 1.39258 6.61711 1.39258 7.72168V14.3782"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.68896 6.50867H9.50085"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.44531 8.86951H5.32813"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.44531 11.2303H5.32813"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.68896 4.14783H10.8368"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9 14.6643H1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13 14.4999C13 14.4999 15.6682 12.3095 15.6682 10.3095C15.6682 8.8367 14.4735 7.6428 13 7.6428C11.5265 7.6428 10.3318 8.8367 10.3318 10.3095C10.3318 12.3095 13 14.4999 13 14.4999Z"
      />
      <path d="M13.0023 9.85704C13.3177 9.85704 13.5737 10.113 13.5714 10.4285C13.5714 10.7439 13.3154 10.9999 13 10.9999C12.6846 10.9999 12.4286 10.7439 12.4286 10.4285C12.4286 10.113 12.6846 9.85704 13.0023 9.85704Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiBuildingsMarkerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
