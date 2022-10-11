// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAttachmentOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
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
        d="M18 9.55498L10.9157 16.5167C8.90311 18.4944 5.52201 18.4944 3.50943 16.5167C1.49686 14.5389 1.49686 11.2163 3.50943 9.23858L9.78867 3.06799C11.2377 1.64401 13.4918 1.64401 14.9408 3.06799C16.3899 4.49197 16.3899 6.70705 14.9408 8.13103L9.14463 13.7479C8.3396 14.539 7.05153 14.539 6.327 13.7479C5.52197 12.9568 5.52197 11.691 6.327 10.979L11.1572 6.23235"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAttachmentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
