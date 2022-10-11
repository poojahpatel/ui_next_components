// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCloudUploadAltOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.6668 10.6667L8.35372 8.35355C8.15845 8.15829 7.84187 8.15829 7.64661 8.35355L5.3335 10.6667"
      />
      <path strokeLinecap="round" strokeWidth={1.2} d="M8 9V14" />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.5933 12.26C14.2435 11.9055 14.7572 11.3446 15.0532 10.6658C15.3492 9.98692 15.4108 9.22883 15.2281 8.51114C15.0454 7.79344 14.629 7.15702 14.0444 6.70231C13.4599 6.2476 12.7405 6.0005 12 6.00001H11.16C10.9582 5.2195 10.5821 4.4949 10.0599 3.88067C9.5378 3.26644 8.8832 2.77858 8.14537 2.45375C7.40754 2.12892 6.60567 1.97558 5.80005 2.00526C4.99443 2.03495 4.20602 2.24688 3.49409 2.62512C2.78216 3.00336 2.16525 3.53808 1.68972 4.18906C1.2142 4.84005 0.892434 5.59037 0.748627 6.38361C0.60482 7.17684 0.64271 7.99236 0.859449 8.76885C1.07619 9.54534 1.46613 10.2626 1.99997 10.8667"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCloudUploadAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
