// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiOctagonCrossedOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M4.85738 1.88004C5.03665 1.70077 5.27998 1.6 5.53289 1.6H10.4656C10.7194 1.6 10.9627 1.70088 11.1418 1.88004L12.2066 2.94482L2.94443 12.207L1.88004 11.1426C1.70077 10.9634 1.6 10.72 1.6 10.4671V5.53289C1.6 5.27975 1.70093 5.03649 1.87926 4.85815L4.85738 1.88004ZM3.79295 13.0555L4.85815 14.1207C5.03649 14.2991 5.27975 14.4 5.53289 14.4H10.4663C10.7202 14.4 10.9634 14.2991 11.1426 14.12L11.1426 14.12L14.1202 11.1416C14.2994 10.962 14.4 10.719 14.4 10.4663V5.53522C14.4 5.28128 14.2991 5.03725 14.1192 4.85738L13.0551 3.79334L3.79295 13.0555ZM5.53289 0.4C4.96136 0.4 4.41291 0.627452 4.00885 1.03151L1.03074 4.00962C0.627293 4.41307 0.4 4.96158 0.4 5.53289V10.4671C0.4 11.0386 0.627452 11.5871 1.03151 11.9912L4.00962 14.9693C4.41307 15.3727 4.96158 15.6 5.53289 15.6H10.4663C11.0385 15.6 11.587 15.3727 11.9912 14.9685L11.9912 14.9684L14.9693 11.9895L14.9698 11.989C15.3724 11.5854 15.6 11.0381 15.6 10.4663V5.53522C15.6 4.96317 15.3727 4.41387 14.9677 4.00885L11.9904 1.03151C11.5862 0.62734 11.0377 0.4 10.4656 0.4H5.53289Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiOctagonCrossedOutlined);
const Memo = memo(ForwardRef);
export default Memo;
