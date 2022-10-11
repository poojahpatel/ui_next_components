// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPaintBrushOutlined = (props: SvgIconProps) => {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3 7.50635H12.6084"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.1323 10.604H4.47564C3.66143 10.604 3.00195 9.94453 3.00195 9.13032V1.73684C3.00195 1.33011 3.33206 1 3.7388 1H11.8691C12.2758 1 12.606 1.33011 12.606 1.73684V9.13032C12.606 9.94453 11.9465 10.604 11.1323 10.604Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.64648 1V3.94737"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.44522 10.604V13.5263C9.44522 14.3405 8.78575 15 7.97154 15H7.63775C6.82354 15 6.16406 14.3405 6.16406 13.5263V10.604"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPaintBrushOutlined);
const Memo = memo(ForwardRef);
export default Memo;
