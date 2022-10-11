// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPlayCircle = (props: SvgIconProps) => {
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
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="currentColor"
      />
      <path
        d="M8 6.93426C8 6.53491 8.44507 6.29672 8.77735 6.51823L13.376 9.58398C13.6728 9.78189 13.6728 10.2181 13.376 10.416L8.77735 13.4818C8.44507 13.7033 8 13.4651 8 13.0657V6.93426Z"
        fill="white"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPlayCircle);
const Memo = memo(ForwardRef);
export default Memo;
