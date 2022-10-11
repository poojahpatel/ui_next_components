// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlertCircleAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={33}
      height={32}
      fill="none"
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g filter="url(#filter0_d_6482_2693)">
        <path d="M14.9959 25.7852C21.0289 25.7852 25.9195 20.885 25.9195 14.8403C25.9195 8.79566 21.0289 3.89548 14.9959 3.89548C8.96294 3.89548 4.07227 8.79566 4.07227 14.8403C4.07227 20.885 8.96294 25.7852 14.9959 25.7852Z" />
      </g>
      <path d="M14.9959 25.7852C21.0289 25.7852 25.9195 20.885 25.9195 14.8403C25.9195 8.79566 21.0289 3.89548 14.9959 3.89548C8.96294 3.89548 4.07227 8.79566 4.07227 14.8403C4.07227 20.885 8.96294 25.7852 14.9959 25.7852Z" />
      <path
        d="M14.9969 8.58578C15.5377 8.58578 15.9821 8.96393 16.0325 9.44745L16.0372 9.53928V15.8959C16.0372 16.4225 15.5715 16.8494 14.9969 16.8494C14.4561 16.8494 14.0117 16.4712 13.9613 15.9877L13.9565 15.8959V9.53928C13.9565 9.01268 14.4223 8.58578 14.9969 8.58578ZM14.9969 18.1207C15.5377 18.1207 15.9821 18.4988 16.0325 18.9824L16.0372 19.0742V19.0983C16.0372 19.6249 15.5715 20.0518 14.9969 20.0518C14.4561 20.0518 14.0117 19.6737 13.9613 19.1902L13.9565 19.0742C13.9565 18.5476 14.4223 18.1207 14.9969 18.1207Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_6482_2693"
          width={31.7034}
          height={31.746}
          x={0.376169}
          y={0.199381}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1.23203} dy={1.23203} />
          <feGaussianBlur stdDeviation={2.46406} />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6482_2693" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_6482_2693" mode="normal" result="shape" />
        </filter>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlertCircleAlt);
const Memo = memo(ForwardRef);
export default Memo;
