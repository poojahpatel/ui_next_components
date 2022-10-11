// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiQualifiedPersonOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={63}
      height={58}
      fill="none"
      viewBox="0 0 63 58"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M16.6986 11.0407C18.186 4.73195 23.3969 1.9845 28.9992 2.01291C33.8609 2.03757 39.1008 3.71007 41.4242 12.4435C43.9245 28.4354 32.0552 33.8246 28.9992 33.8246C22.5185 33.8246 13.9205 22.8242 16.6986 11.0407Z"
        clipRule="evenodd"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M23.1779 31.2339C9.13635 35.8384 1.21947 39.2014 2.11557 49.4677C13.2256 49.4677 27.9275 49.4677 39.7033 49.4677"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#0FA290"
        d="M43.9925 34.5948C42.2517 33.7087 39.1937 32.5884 34.8184 31.2339"
      />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#A4C24F"
        d="M48.271 50.2251C47.975 50.0681 47.6205 50.0681 47.3245 50.2251L40.7587 53.708C40.0184 54.1007 39.1494 53.4728 39.2899 52.6466L40.5482 45.244C40.6036 44.9185 40.4962 44.5864 40.2608 44.3548L34.9237 39.1057C34.3289 38.5207 34.6598 37.5076 35.4853 37.3865L42.8451 36.3075C43.1748 36.2592 43.4594 36.0513 43.6058 35.752L46.8906 29.0365C47.2598 28.2817 48.3357 28.2817 48.7049 29.0365L51.9897 35.752C52.1361 36.0513 52.4207 36.2592 52.7504 36.3075L60.1102 37.3865C60.9357 37.5076 61.2666 38.5207 60.6718 39.1057L55.3347 44.3548C55.0993 44.5864 54.9919 44.9185 55.0473 45.244L56.3056 52.6466C56.4461 53.4728 55.5771 54.1007 54.8368 53.708L48.271 50.2251Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiQualifiedPersonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
