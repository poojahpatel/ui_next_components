// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiDragIndicator = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        d="M6.5 5C7.32843 5 8 4.32843 8 3.5C8 2.67157 7.32843 2 6.5 2C5.67157 2 5 2.67157 5 3.5C5 4.32843 5.67157 5 6.5 5ZM6.5 9.99983C7.32843 9.99983 8 9.32825 8 8.49983C8 7.6714 7.32843 6.99983 6.5 6.99983C5.67157 6.99983 5 7.6714 5 8.49983C5 9.32825 5.67157 9.99983 6.5 9.99983ZM8 13.5C8 14.3284 7.32843 15 6.5 15C5.67157 15 5 14.3284 5 13.5C5 12.6716 5.67157 12 6.5 12C7.32843 12 8 12.6716 8 13.5ZM11.5 5C12.3284 5 13 4.32843 13 3.5C13 2.67157 12.3284 2 11.5 2C10.6716 2 10 2.67157 10 3.5C10 4.32843 10.6716 5 11.5 5ZM13 8.49983C13 9.32825 12.3284 9.99983 11.5 9.99983C10.6716 9.99983 10 9.32825 10 8.49983C10 7.6714 10.6716 6.99983 11.5 6.99983C12.3284 6.99983 13 7.6714 13 8.49983ZM11.5 15C12.3284 15 13 14.3284 13 13.5C13 12.6716 12.3284 12 11.5 12C10.6716 12 10 12.6716 10 13.5C10 14.3284 10.6716 15 11.5 15Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiDragIndicator);
const Memo = memo(ForwardRef);
export default Memo;
