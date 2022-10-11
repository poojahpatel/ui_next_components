// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTrashOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
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
        d="M13.9941 4.53833H14.8398"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.8749 7.24951L10.5161 12.4995"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.14111 7.24951L7.49986 12.4995"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.4125 15.5369H6.42681C5.3968 15.5369 4.56214 14.7583 4.56214 13.7974L3.8457 4.53687H13.9936L13.2771 13.7974C13.2771 14.7583 12.4425 15.5369 11.4125 15.5369Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.3024 4.53672L11.6783 2.58749C11.5658 2.23739 11.2402 1.99976 10.8732 1.99976H6.96627C6.59841 1.99976 6.27283 2.23739 6.1612 2.58749L5.53711 4.53672"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3 4.53833H3.84566"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTrashOutlined);
const Memo = memo(ForwardRef);
export default Memo;
