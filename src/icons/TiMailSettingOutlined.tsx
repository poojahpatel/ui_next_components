// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMailSettingOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16 8.5V5.5C16 4.11929 14.8807 3 13.5 3H4.5C3.11929 3 2 4.11929 2 5.5V11.5C2 12.8807 3.11929 14 4.5 14H9.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 10.2632V11"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14 13.9475V14.6844"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.0842 11.3684L12.7194 11.7368"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.2808 13.2104L15.9159 13.5789"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.0842 13.5789L12.7194 13.2104"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.2808 11.7368L15.9159 11.3684"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M15.042 11.4318C15.6175 12.0073 15.6175 12.9402 15.042 13.5156C14.4665 14.0911 13.5337 14.0911 12.9582 13.5156C12.3827 12.9402 12.3827 12.0073 12.9582 11.4318C13.5337 10.8564 14.4665 10.8564 15.042 11.4318Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.625 5.54004L7.92919 8.09625C8.55973 8.58405 9.44027 8.58405 10.0708 8.09625L13.375 5.54004"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMailSettingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
