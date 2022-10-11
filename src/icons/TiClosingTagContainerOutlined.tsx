// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiClosingTagContainerOutlined = (props: SvgIconProps) => {
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M7.56104 13.8889L9.21246 15.5403"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M9.21246 12.2375L7.56104 13.889"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M14.7197 15.5419L16.372 13.8889L14.7197 12.2358"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.7176 11.0557L11.2119 16.7223"
      />
      <path d="M17.5 19.75H6.5V21.25H17.5V19.75ZM6.5 4.25H17.5V2.75H6.5V4.25ZM4.25 17.5V6.5H2.75V17.5H4.25ZM19.75 6.5V17.5H21.25V6.5H19.75ZM17.5 4.25C18.7426 4.25 19.75 5.25736 19.75 6.5H21.25C21.25 4.42893 19.5711 2.75 17.5 2.75V4.25ZM6.5 2.75C4.42893 2.75 2.75 4.42893 2.75 6.5H4.25C4.25 5.25736 5.25736 4.25 6.5 4.25V2.75ZM6.5 19.75C5.25736 19.75 4.25 18.7426 4.25 17.5H2.75C2.75 19.5711 4.42893 21.25 6.5 21.25V19.75ZM17.5 21.25C19.5711 21.25 21.25 19.5711 21.25 17.5H19.75C19.75 18.7426 18.7426 19.75 17.5 19.75V21.25Z" />
      <path d="M20.5 7.27778H3.5C3.5 5.19137 5.19137 3.5 7.27778 3.5H16.7222C18.8086 3.5 20.5 5.19137 20.5 7.27778Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiClosingTagContainerOutlined);
const Memo = memo(ForwardRef);
export default Memo;
