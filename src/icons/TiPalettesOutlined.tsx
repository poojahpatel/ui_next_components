// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPalettesOutlined = (props: SvgIconProps) => {
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
      <path d="M5.24946 12.25C4.83546 12.252 4.50146 12.588 4.50146 13.002C4.50146 13.416 4.83746 13.75 5.25146 13.75C5.66546 13.75 6.00146 13.414 6.00146 13C6.00146 12.586 5.66546 12.25 5.24946 12.25Z" />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M5.33333 15C4.04467 15 3 13.9553 3 12.6667V4.33333C3 3.59667 3.59667 3 4.33333 3H6.33333C7.07 3 7.66667 3.59667 7.66667 4.33333V12.6667C7.66667 13.9553 6.622 15 5.33333 15Z"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.9834 14.3167L13.4574 7.84267C13.9781 7.322 13.9781 6.478 13.4574 5.95733L12.0434 4.54333C11.5227 4.02267 10.6787 4.02267 10.1581 4.54333L7.66673 7.03333"
      />
      <path
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.9666 10.3335H13.6666C14.4033 10.3335 14.9999 10.9302 14.9999 11.6668V13.6668C14.9999 14.4035 14.4033 15.0002 13.6666 15.0002H5.33325"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPalettesOutlined);
const Memo = memo(ForwardRef);
export default Memo;
