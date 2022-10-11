// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFacebookAlt = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <circle cx={20} cy={20} r={20} fill="none" />
      <path
        fillRule="evenodd"
        d="M18.3183 26.0213L18.3002 20.1025H16V17.735H18.3002V16.2553C18.3002 14.0586 19.6218 13 21.5257 13C22.4377 13 23.2215 13.0699 23.4499 13.1011V15.3968L22.1294 15.3974C21.094 15.3974 20.8935 15.9038 20.8935 16.647V17.735H23.9069L22.7568 20.1025H20.8935V26.0213H18.3183Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFacebookAlt);
const Memo = memo(ForwardRef);
export default Memo;
