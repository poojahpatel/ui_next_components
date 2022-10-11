// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiChat = (props: SvgIconProps) => {
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
      <path d="M17.0625 2.66675H6.9375C4.76288 2.66675 3 4.42963 3 6.60425V13.7292V19.8897C3 20.4355 3.65038 20.7191 4.05028 20.3477L6.5778 18.0008C6.80901 17.7861 7.11285 17.6667 7.42836 17.6667H12H17.0625C19.2371 17.6667 21 15.9039 21 13.7292V6.60425C21 4.42963 19.2371 2.66675 17.0625 2.66675Z" />
      <path d="M4.05028 20.3477L4.59464 20.934H4.59464L4.05028 20.3477ZM6.5778 18.0008L6.03344 17.4145H6.03344L6.5778 18.0008ZM6.9375 3.46675H17.0625V1.86675H6.9375V3.46675ZM17.0625 3.46675C18.7953 3.46675 20.2 4.87145 20.2 6.60425H21.8C21.8 3.9878 19.6789 1.86675 17.0625 1.86675V3.46675ZM20.2 6.60425V13.7292H21.8V6.60425H20.2ZM20.2 13.7292C20.2 15.462 18.7953 16.8667 17.0625 16.8667V18.4667C19.6789 18.4667 21.8 16.3457 21.8 13.7292H20.2ZM3.8 13.7292V6.60425H2.2V13.7292H3.8ZM3.8 6.60425C3.8 4.87145 5.20471 3.46675 6.9375 3.46675V1.86675C4.32105 1.86675 2.2 3.9878 2.2 6.60425H3.8ZM17.0625 16.8667H12V18.4667H17.0625V16.8667ZM12 16.8667H7.42836V18.4667H12V16.8667ZM2.2 13.7292V19.8897H3.8V13.7292H2.2ZM4.59464 20.934L7.12216 18.587L6.03344 17.4145L3.50592 19.7615L4.59464 20.934ZM2.2 19.8897C2.2 21.134 3.68286 21.7806 4.59464 20.934L3.50592 19.7615C3.61789 19.6575 3.8 19.7369 3.8 19.8897H2.2ZM7.42836 16.8667C6.91092 16.8667 6.41262 17.0624 6.03344 17.4145L7.12216 18.587C7.20539 18.5097 7.31478 18.4667 7.42836 18.4667V16.8667Z" />
      <path strokeLinecap="round" strokeWidth={1.6} fill="none" stroke="white" d="M7.125 7.91675H15.75" />
      <path strokeLinecap="round" strokeWidth={1.6} fill="none" stroke="white" d="M7.125 11.6667H12" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiChat);
const Memo = memo(ForwardRef);
export default Memo;