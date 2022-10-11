// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiActivityLogAltOutlined = (props: SvgIconProps) => {
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
      <path d="M0.5 0.5H19.5V19.5H0.5V0.5Z" fill="none" stroke="currentColor" />
      <path
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M14.5 2H5.5C3.567 2 2 3.567 2 5.5V14.5C2 16.433 3.567 18 5.5 18H14.5C16.433 18 18 16.433 18 14.5V5.5C18 3.567 16.433 2 14.5 2Z"
      />
      <path
        d="M15 10.9C15.4971 10.9 15.9 10.4971 15.9 10C15.9 9.50294 15.4971 9.1 15 9.1V10.9ZM11.5 14.5L10.6462 14.7846C10.7687 15.1521 11.1126 15.4 11.5 15.4C11.8874 15.4 12.2313 15.1521 12.3538 14.7846L11.5 14.5ZM8.5 5.5L9.35381 5.2154C9.23131 4.84789 8.88739 4.6 8.5 4.6C8.11261 4.6 7.76869 4.84789 7.64618 5.2154L8.5 5.5ZM5 9.1C4.50294 9.1 4.1 9.50294 4.1 10C4.1 10.4971 4.50294 10.9 5 10.9V9.1ZM7.13675 9.58974L6.28294 9.30513L7.13675 9.58974ZM12.8632 10.4103L12.0094 10.1257L12.8632 10.4103ZM15 9.1H13.4325V10.9H15V9.1ZM12.0094 10.1257L10.6462 14.2154L12.3538 14.7846L13.7171 10.6949L12.0094 10.1257ZM12.3538 14.2154L9.35381 5.2154L7.64618 5.7846L10.6462 14.7846L12.3538 14.2154ZM7.64618 5.2154L6.28294 9.30513L7.99057 9.87434L9.35381 5.7846L7.64618 5.2154ZM6.56754 9.1H5V10.9H6.56754V9.1ZM6.28294 9.30513C6.32377 9.18263 6.43842 9.1 6.56754 9.1V10.9C7.21319 10.9 7.7864 10.4869 7.99057 9.87434L6.28294 9.30513ZM13.4325 9.1C12.7868 9.1 12.2136 9.51315 12.0094 10.1257L13.7171 10.6949C13.6762 10.8174 13.5616 10.9 13.4325 10.9V9.1Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiActivityLogAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
