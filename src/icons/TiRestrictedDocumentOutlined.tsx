// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRestrictedDocumentOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={102}
      height={106}
      fill="none"
      viewBox="0 0 102 106"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M33 20C33 15.0294 37.0294 11 42 11H79.2105L79.5573 19.9418C79.6135 21.3912 80.8048 22.5372 82.2552 22.5372H101V87C101 91.9705 96.9706 96 92 96H42C37.0294 96 33 91.9706 33 87V20Z"
        clipRule="evenodd"
        fill="#DCEBFA"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M24 12C24 6.47715 28.4772 2 34 2H79L79.4286 19.5732C79.4683 21.201 80.7994 22.5 82.4277 22.5H100V86C100 91.5228 95.5228 96 90 96H34C28.4772 96 24 91.5228 24 86V12Z"
        clipRule="evenodd"
      />
      <path strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M79 2L100 22.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M43 28H59" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M43 50H85" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" stroke="#144676" d="M43 59H73" />
      <ellipse cx={25} cy={85} fill="#C2C5F1" rx={17} ry={18} />
      <circle cx={22} cy={84} r={20} strokeWidth={3} fill="none" stroke="#343FD1" />
      <path strokeWidth={3} fill="none" stroke="#343FD1" d="M8 99L36 69" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRestrictedDocumentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
