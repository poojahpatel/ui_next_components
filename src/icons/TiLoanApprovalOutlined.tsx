// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoanApprovalOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={90}
      fill="none"
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={43.5} cy={27.5} r={17.5} fill="none" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M65.9112 23.1665C63.8534 16.1322 57.419 11 49.8 11C40.5216 11 33 18.6112 33 28C33 37.3888 40.5216 45 49.8 45V45C57.456 45 63.9159 39.8179 65.9409 32.7309"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M45 30.9884C45 32.707 46.7584 34.0996 48.9286 34.0996H50.5C52.6701 34.0996 54.4286 32.707 54.4286 30.9884C54.4286 26.6329 45 29.1218 45 24.7662C45 23.0476 46.7584 21.655 48.9286 21.655H50.5C52.6701 21.655 54.4286 23.0476 54.4286 24.7662"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M49.8133 19.8733V21.0348"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M49.8133 35.1386V36.3001"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#58C5E8"
        d="M68.3998 19.5L66.5998 24.9643L61.7998 21.9286"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        d="M59 67.901C60.0027 67.901 65.3239 67.514 66.6596 67.4157C66.8612 67.4009 67.057 67.3469 67.238 67.2569L83.7372 59.0513C85.9692 57.9412 88.6783 58.6602 90.0662 60.7309V60.7309C91.657 63.1044 90.9187 66.3276 88.4534 67.772L67.3882 80.1142C65.8778 80.9992 64.1034 81.3222 62.378 81.0263L20.6351 73.8676V56.3487L33.6915 53.043C38.8807 51.7292 44.3585 52.1655 49.2742 54.2843L60.8831 59.2881C63.0219 60.21 64.0976 62.617 63.3575 64.8254V64.8254C62.5921 67.1093 60.1578 68.3792 57.8468 67.7L45.1396 63.9656"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        d="M17.0048 49.8744C19.0096 49.8744 20.6348 51.4996 20.6348 53.5044L20.6348 77.8545C20.6348 79.8592 19.0096 81.4845 17.0048 81.4845H12.0125C10.0077 81.4845 8.38251 79.8593 8.38251 77.8545V53.5044C8.38251 51.4996 10.0077 49.8744 12.0125 49.8744H17.0048Z"
        clipRule="evenodd"
      />
      <circle
        r={1.21429}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#1652DF"
        transform="matrix(-1 0 0 1 14.6783 74.5796)"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoanApprovalOutlined);
const Memo = memo(ForwardRef);
export default Memo;
