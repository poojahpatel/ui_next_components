// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneOutgoingBox = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={32} height={32} rx={6} fill="currentColor" />
      <g clipPath="url(#clip0_9470_28927)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M14.7538 17.2458C13.9738 16.4658 13.3858 15.5924 12.9951 14.7064C12.9131 14.5191 12.9611 14.2997 13.1058 14.1551L13.6518 13.6091C14.0991 13.1617 14.0991 12.529 13.7085 12.1384L12.9264 11.3563C12.4058 10.8357 11.5617 10.8357 11.0411 11.3563L10.6064 11.7903C10.1124 12.2844 9.90636 12.997 10.0397 13.7037C10.369 15.4458 11.3811 17.3532 13.0138 18.9859C14.6465 20.6186 16.5539 21.6306 18.2959 21.9599C19.0026 22.0933 19.7153 21.8873 20.2093 21.3933L20.6433 20.9592C21.164 20.4386 21.164 19.5945 20.6433 19.0739L19.8613 18.2918C19.4706 17.9012 18.8373 17.9012 18.4472 18.2918L17.8452 18.8945C17.7006 19.0392 17.4812 19.0879 17.2939 19.0052C16.4079 18.6138 15.5338 18.0252 14.7538 17.2458Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M22.0001 14.0001V10H18"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.3}
          fill="none"
          stroke="white"
          d="M18 14.0001L22.0001 10"
        />
      </g>
      <defs>
        <clipPath id="clip0_9470_28927">
          <rect width={16} height={16} transform="translate(8 8)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneOutgoingBox);
const Memo = memo(ForwardRef);
export default Memo;
