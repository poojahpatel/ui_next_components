// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChatBubbleOutlined = (props: SvgIconProps) => {
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
      <path d="M2.68925 13.7975L3.09752 14.2372L2.68925 13.7975ZM4.38895 12.2192L4.79722 12.6589L4.38895 12.2192ZM4.625 2.6H11.375V1.4H4.625V2.6ZM11.375 2.6C12.4934 2.6 13.4 3.50662 13.4 4.625H14.6C14.6 2.84388 13.1561 1.4 11.375 1.4V2.6ZM13.4 4.625V9.375H14.6V4.625H13.4ZM13.4 9.375C13.4 10.4934 12.4934 11.4 11.375 11.4V12.6C13.1561 12.6 14.6 11.1561 14.6 9.375H13.4ZM2.6 9.375V4.625H1.4V9.375H2.6ZM2.6 4.625C2.6 3.50662 3.50662 2.6 4.625 2.6V1.4C2.84388 1.4 1.4 2.84388 1.4 4.625H2.6ZM11.375 11.4H8V12.6H11.375V11.4ZM8 11.4H4.94713V12.6H8V11.4ZM1.4 9.375V13.4969H2.6V9.375H1.4ZM3.09752 14.2372L4.79722 12.6589L3.98068 11.7795L2.28098 13.3578L3.09752 14.2372ZM1.4 13.4969C1.4 14.379 2.45117 14.8373 3.09752 14.2372L2.28098 13.3578C2.40245 13.245 2.6 13.3312 2.6 13.4969H1.4ZM4.94713 11.4C4.58863 11.4 4.24338 11.5356 3.98068 11.7795L4.79722 12.6589C4.83797 12.621 4.89152 12.6 4.94713 12.6V11.4Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChatBubbleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
