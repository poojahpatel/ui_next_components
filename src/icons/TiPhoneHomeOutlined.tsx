// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneHomeOutlined = (props: SvgIconProps) => {
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
        d="M13.1114 4.70453V3.25C13.1114 2.69772 13.5592 2.25 14.1114 2.25H14.9751C15.5273 2.25 15.9751 2.69772 15.9751 3.25V14.159C15.9751 15.2636 15.0796 16.159 13.9751 16.159H13.9296H9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M3.04785 8.22925L9.01469 3.11504C9.59526 2.61741 10.4518 2.61741 11.0323 3.11504L16.9999 8.22925"
      />
      <path
        fillRule="evenodd"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.54316 13.1068C4.74613 13.31 5.07788 13.3076 5.28071 13.105L6.58403 11.8028C6.78841 11.5986 6.79183 11.269 6.58842 11.0634L6.26819 10.7396C5.96156 10.4296 5.96409 9.92741 6.27054 9.62123L7.13809 8.75444C7.44603 8.44678 7.94231 8.44381 8.25417 8.75539L8.61611 9.11702C8.79727 9.29802 8.9666 9.65066 8.97419 9.89873C8.97419 9.89873 9.34632 11.6162 7.20928 13.7513C5.07224 15.8865 3.3709 15.4971 3.3709 15.4971C3.12221 15.4783 2.77739 15.3199 2.59258 15.1353L2.23064 14.7736C1.92218 14.4654 1.92431 13.9636 2.22678 13.6614L3.10866 12.7803C3.41499 12.4743 3.90976 12.4728 4.22132 12.7847L4.54316 13.1068Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneHomeOutlined);
const Memo = memo(ForwardRef);
export default Memo;
