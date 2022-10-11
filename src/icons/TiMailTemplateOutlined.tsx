// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailTemplateOutlined = (props: SvgIconProps) => {
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
        d="M4.66675 5.1665H13.3334"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.11108 3H11.8889"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.5 9.31299C15.5 8.20842 14.6046 7.31299 13.5 7.31299H4.5C3.39543 7.31299 2.5 8.20842 2.5 9.31299V13.9797C2.5 15.0842 3.39543 15.9797 4.5 15.9797H13.5C14.6046 15.9797 15.5 15.0842 15.5 13.9797V9.31299Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.4443 9.47974H13.3332V11.6464H10.4443V9.47974Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.66675 11.6465H6.83341"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.66675 13.813H8.27786"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailTemplateOutlined);
const Memo = memo(ForwardRef);
export default Memo;
