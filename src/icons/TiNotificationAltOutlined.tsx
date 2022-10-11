// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiNotificationAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={19}
      height={18}
      fill="none"
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        fill="none"
        stroke="currentColor"
        d="M14.25 6.00006C14.25 4.80659 13.7759 3.66199 12.932 2.81808C12.0881 1.97417 10.9435 1.50006 9.75 1.50006C8.55653 1.50006 7.41193 1.97417 6.56802 2.81808C5.72411 3.66199 5.25 4.80659 5.25 6.00006C5.25 11.2501 3 12.7501 3 12.7501H16.5C16.5 12.7501 14.25 11.2501 14.25 6.00006Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        fill="none"
        stroke="currentColor"
        d="M11.0471 15.75C10.9153 15.9773 10.726 16.166 10.4983 16.2971C10.2706 16.4283 10.0124 16.4973 9.74965 16.4973C9.48686 16.4973 9.22869 16.4283 9.00098 16.2971C8.77327 16.166 8.58401 15.9773 8.45215 15.75"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiNotificationAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
