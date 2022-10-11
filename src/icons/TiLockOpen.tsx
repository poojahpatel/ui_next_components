// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLockOpen = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={80}
      fill="none"
      viewBox="0 0 100 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect
        width={48.2947}
        height={37.8526}
        x={25}
        y={31.1473}
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        rx={4.56842}
      />
      <path
        strokeLinecap="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M34.4634 21.6842C34.4634 15.4842 39.0318 7 49.1476 7C59.2634 7 64.4844 16.4632 64.4844 21.6842C64.4844 26.9053 64.4844 31.1474 64.4844 31.1474"
      />
      <path
        fillRule="evenodd"
        d="M47.8554 54.1904C49.9309 53.1561 51.3561 51.0176 51.3561 48.5473C51.3561 45.0651 48.5241 42.2422 45.0306 42.2422C41.5371 42.2422 38.7051 45.0651 38.7051 48.5473C38.7051 50.9711 40.0771 53.0754 42.0891 54.1307"
        clipRule="evenodd"
        fill="url(#paint0_linear_2554_831)"
      />
      <path
        fillRule="evenodd"
        d="M41.9289 53.9795L40.6214 57.4538C40.1025 58.8326 41.1215 60.305 42.5947 60.305H47.1355C48.5833 60.305 49.6003 58.8794 49.1293 57.5105L47.9143 53.9795"
        clipRule="evenodd"
        fill="url(#paint0_linear_2554_831)"
      />
      <path
        strokeLinecap="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M52.2427 53.3383C54.277 52.3212 55.6739 50.2184 55.6739 47.7894C55.6739 44.3652 52.8981 41.5894 49.4739 41.5894C46.0498 41.5894 43.2739 44.3652 43.2739 47.7894C43.2739 50.1727 44.6187 52.2419 46.5908 53.2796"
      />
      <path
        strokeLinecap="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M46.5367 53.3369L45.2231 56.9022C44.7522 58.1804 45.6981 59.5369 47.0603 59.5369H51.6427C52.9817 59.5369 53.9256 58.2229 53.4982 56.954L52.2798 53.3369"
      />
      <path
        strokeWidth={2.5}
        fill="none"
        stroke="#11275E"
        d="M60.2423 31.1473C60.2423 31.1473 60.2423 24.9473 60.2423 21.0315C60.2423 17.1157 55.6739 10.5894 49.4739 10.5894C43.2739 10.5894 39.0318 15.1578 39.0318 21.6841C38.0529 21.6841 35.7686 21.6841 34.4634 21.6841"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2554_831"
          x1={49.4236}
          x2={40.3204}
          y1={41.7236}
          y2={49.8867}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFADAD" />
          <stop offset={1} stopColor="#FE7474" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLockOpen);
const Memo = memo(ForwardRef);
export default Memo;
