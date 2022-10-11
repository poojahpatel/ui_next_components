// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiIdeaOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={55}
      height={55}
      fill="none"
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M20.0714 51.6087H37.3494V43.8737H42.6207C43.9599 43.8737 45.0455 42.7881 45.0455 41.449V36.0372H47.8259L43.8237 27.5068V25.3689V25.3689C43.4851 17.8656 37.3034 11.9565 29.7925 11.9565H28.1312C19.4142 11.9565 12.3477 19.0231 12.3477 27.74V29.2785C12.3477 29.2785 12.5057 34.2102 18.1201 41.6576C20.1878 44.592 20.0714 51.6087 20.0714 51.6087Z"
        clipRule="evenodd"
      />
      <circle
        cx={28.0002}
        cy={27.0869}
        r={10.4348}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M23.8262 28.1305L25.9131 30.2174L32.174 23.9565"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M4 25.3982H8.36364"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M11.0293 8.146L14.1144 11.2823"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M28 1V5.43604"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M44.9708 8.146L41.8857 11.2823"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="#0F2DA2"
        d="M52.0004 25.3982H47.6367"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiIdeaOutlined);
const Memo = memo(ForwardRef);
export default Memo;
