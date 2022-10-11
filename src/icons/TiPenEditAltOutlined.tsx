// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPenEditAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <rect width={22.6667} height={22.6667} x={0.666667} y={0.666667} rx={5.33333} fill="none" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.41176}
        fill="none"
        stroke="currentColor"
        d="M11.6471 17.5938H18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.41176}
        fill="none"
        stroke="currentColor"
        d="M14.9053 6.70966C15.1677 6.44723 15.5237 6.2998 15.8948 6.2998C16.0785 6.2998 16.2605 6.336 16.4303 6.40632C16.6001 6.47665 16.7543 6.57972 16.8843 6.70966C17.0142 6.8396 17.1173 6.99386 17.1876 7.16364C17.2579 7.33341 17.2941 7.51538 17.2941 7.69914C17.2941 7.8829 17.2579 8.06487 17.1876 8.23464C17.1173 8.40442 17.0142 8.55868 16.8843 8.68862L8.68777 16.8851C8.6556 16.9173 8.6153 16.9401 8.57117 16.9511L6.60872 17.4417C6.333 17.5107 6.08325 17.2609 6.15218 16.9852L6.64279 15.0228C6.65382 14.9786 6.67664 14.9383 6.70881 14.9062L14.9053 6.70966Z"
      />
      <rect width={22.6667} height={22.6667} x={0.666667} y={0.666667} strokeWidth={1.33333} rx={5.33333} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPenEditAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
