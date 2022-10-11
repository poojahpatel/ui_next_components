// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeRenovationOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={26}
      height={28}
      fill="none"
      viewBox="0 0 26 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={20.5714} height={6.85714} x={1} y={1} strokeLinejoin="round" strokeWidth={1.2} rx={1.71429} />
      <path
        strokeWidth={1.2}
        d="M21.57 4.42847H22.7314C23.6782 4.42847 24.4457 5.19598 24.4457 6.14275V9.32272C24.4457 10.0778 23.9517 10.7439 23.2292 10.9631L13.3727 13.9541C12.6502 14.1734 12.1563 14.8395 12.1562 15.5945V16.6861"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M10.2965 18.0004C10.3705 17.1119 11.1132 16.4285 12.0048 16.4285H12.2787C13.1702 16.4285 13.913 17.1119 13.987 18.0004L14.5584 24.8575C14.6417 25.857 13.853 26.7142 12.8501 26.7142H11.4334C10.4305 26.7142 9.64174 25.857 9.72503 24.8575L10.2965 18.0004Z"
        clipRule="evenodd"
      />
      <path
        strokeWidth={1.2}
        d="M3.3125 7.85718V15.3976C3.3125 16.0674 3.85553 16.6105 4.52539 16.6105V16.6105C5.19525 16.6105 5.73828 16.0674 5.73828 15.3976V11.9039C5.73828 11.1603 6.34113 10.5574 7.08479 10.5574V10.5574C7.82844 10.5574 8.43129 11.1603 8.43129 11.9039V12.605C8.43129 13.2966 8.99189 13.8572 9.68342 13.8572V13.8572C10.375 13.8572 10.9355 13.2966 10.9355 12.6051V7.85718"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeRenovationOutlined);
const Memo = memo(ForwardRef);
export default Memo;
