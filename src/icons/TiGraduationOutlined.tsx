// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiGraduationOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={26}
      height={21}
      fill="none"
      viewBox="0 0 26 21"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M1.72678 9.00876C0.978195 8.59729 0.978089 7.52174 1.72659 7.11012L11.8 1.57055C12.4465 1.215 13.2296 1.21292 13.878 1.56505L24.084 7.10737C24.8392 7.51749 24.8391 8.60154 24.0838 9.0115L13.8776 14.5513C13.2294 14.9032 12.4467 14.9011 11.8004 14.5458L1.72678 9.00876Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.53516 11.2009V17.1112C5.53516 18.0328 6.1177 18.8522 7.0083 19.0892C8.42586 19.4665 10.6736 19.9503 12.8804 19.9503C15.0768 19.9503 17.2732 19.4711 18.6599 19.0945C19.5421 18.855 20.1155 18.0407 20.1155 17.1266V11.2009"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4648 7.19458L22.0142 10.2139V17.0853"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiGraduationOutlined);
const Memo = memo(ForwardRef);
export default Memo;
