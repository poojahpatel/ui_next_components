// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiProfessionalismOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={92}
      fill="none"
      viewBox="0 0 100 92"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        d="M12.2363 48.4454C12.2363 46.7885 13.5795 45.4454 15.2363 45.4454H28.8403C30.4971 45.4454 31.8403 44.1022 31.8403 42.4454V42.2078C31.8403 40.5509 33.1834 39.2078 34.8403 39.2078L46.6621 39.2078C48.3189 39.2078 49.6621 40.5509 49.6621 42.2078V42.4454C49.6621 44.1022 51.0052 45.4454 52.6621 45.4454H66.266C67.9229 45.4454 69.2661 46.7885 69.2661 48.4454V81.9999C69.2661 86.4181 65.6843 89.9999 61.2661 89.9999H20.2363C15.8181 89.9999 12.2363 86.4181 12.2363 81.9999V48.4454Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        d="M69.2661 49.9011V57.0298C69.2661 60.9669 66.0744 64.1585 62.1373 64.1585H19.365C15.428 64.1585 12.2363 60.9669 12.2363 57.0298L12.2363 49.01"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        d="M26.999 45.4455H56.9012"
      />
      <rect
        width={7.12872}
        height={10.6931}
        x={37.1865}
        y={59.7031}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#144676"
        rx={1.5}
      />
      <circle cx={64.1842} cy={12.4753} r={12.4753} fill="none" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
        d="M61.4221 18.802L55.0063 30.8317L62.2241 30.0297L64.6301 36.4456L71.0459 24.4159"
      />
      <circle
        cx={71.0468}
        cy={13.9903}
        r={10.4257}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
        d="M66.5908 15.1487L68.9671 16.9308L75.5017 9.80212"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#343FD1"
        d="M80.6697 18.802L87.0855 30.8317L79.8677 30.0297L77.4617 36.4456L71.0459 24.4159"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiProfessionalismOutlined);
const Memo = memo(ForwardRef);
export default Memo;
