// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiReloadOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M14.4471 2.71582V6.71582H10.713"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.8849 10.0495C12.4804 11.2761 11.7146 12.3286 10.7031 13.0485C9.6915 13.7683 8.48894 14.1165 7.2766 14.0405C6.06425 13.9646 4.90779 13.4686 3.98149 12.6273C3.0552 11.786 2.40925 10.645 2.14098 9.37619C1.87271 8.10742 1.99667 6.77961 2.49416 5.59287C2.99165 4.40612 3.83573 3.42473 4.8992 2.79658C5.96267 2.16843 7.18792 1.92756 8.3903 2.11025C9.59269 2.29295 10.7071 2.88931 11.5655 3.80949L14.447 6.71616"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiReloadOutlined);
const Memo = memo(ForwardRef);
export default Memo;
