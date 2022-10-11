// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiRemoveCircleOutlined = (props: SvgIconProps) => {
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
        d="M12.0001 19.6364C16.2176 19.6364 19.6365 16.2175 19.6365 12C19.6365 7.78259 16.2176 4.36368 12.0001 4.36368C7.78269 4.36368 4.36377 7.78259 4.36377 12C4.36377 16.2175 7.78269 19.6364 12.0001 19.6364Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M14.7275 12H9.27295"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiRemoveCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
