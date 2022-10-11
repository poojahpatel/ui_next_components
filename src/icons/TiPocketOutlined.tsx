// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPocketOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M4.17871 3.979H20.1787C20.7091 3.979 21.2179 4.18972 21.5929 4.56479C21.968 4.93986 22.1787 5.44857 22.1787 5.979V11.979C22.1787 14.6312 21.1251 17.1747 19.2498 19.0501C17.3744 20.9254 14.8309 21.979 12.1787 21.979C10.8655 21.979 9.56513 21.7203 8.35188 21.2178C7.13862 20.7153 6.03623 19.9787 5.10764 19.0501C3.23228 17.1747 2.17871 14.6312 2.17871 11.979V5.979C2.17871 5.44857 2.38942 4.93986 2.7645 4.56479C3.13957 4.18972 3.64828 3.979 4.17871 3.979V3.979Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M8.17871 10.979L12.1787 14.979L16.1787 10.979"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPocketOutlined);
const Memo = memo(ForwardRef);
export default Memo;
