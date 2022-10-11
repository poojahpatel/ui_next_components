// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNotificationSettingOutlined = (props: SvgIconProps) => {
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
        d="M10.8989 1.58911L11.2536 2.37526"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.6614 5.49609L13.016 6.28224"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.39819 3.67798L10.2534 3.75818"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.6733 4.10767L14.5168 4.19316"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.4567 6.02466L10.9625 5.33045"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.964 2.53564L13.4581 1.84673"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.5649 2.32996C13.4519 2.66548 13.899 3.65654 13.5635 4.54356C13.228 5.43058 12.2369 5.87766 11.3499 5.54214C10.4629 5.20662 10.0158 4.21556 10.3513 3.32854C10.6868 2.44152 11.6779 1.99444 12.5649 2.32996Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.3366 15.5891H7.60669"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.2371 8.3378V9.19432C13.2371 9.47072 13.3932 9.72238 13.6398 9.84693L14.0689 10.0611C14.6046 10.3289 14.9433 10.8766 14.9433 11.4755C14.9433 12.3491 14.2352 13.0571 13.3617 13.0571H4.58163C3.70807 13.0571 3 12.3491 3 11.4755C3 10.8766 3.33868 10.3289 3.87442 10.0602L4.30352 9.84608C4.55007 9.72238 4.70618 9.47072 4.70618 9.19432V7.08548V7.05818C4.70618 5.19286 5.90411 3.60683 7.57246 3.02759"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNotificationSettingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
