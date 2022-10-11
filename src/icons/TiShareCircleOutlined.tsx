// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiShareCircleOutlined = (props: SvgIconProps) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M12.0962 3.90381C14.6346 6.44222 14.6346 10.5578 12.0962 13.0962C9.55778 15.6346 5.44221 15.6346 2.90381 13.0962C0.365397 10.5578 0.365397 6.44221 2.90381 3.90381C5.44222 1.3654 9.55779 1.3654 12.0962 3.90381"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.72765 6.65834C5.72926 6.65834 4.07031 8.15551 4.07031 10.6457V11.147C4.74631 9.51184 6.15031 8.91384 7.72765 8.91384V10.276C7.72765 10.6609 8.18482 10.8631 8.47009 10.6046L11.1467 8.1779C11.346 7.99806 11.3402 7.68389 11.1358 7.51056L8.45926 5.23845C8.17037 4.99361 7.72765 5.198 7.72765 5.57645V6.65834Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiShareCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
