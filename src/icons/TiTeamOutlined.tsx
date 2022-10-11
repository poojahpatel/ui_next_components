// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiTeamOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M16.2941 7.49546C16.9046 8.10594 16.9046 9.09571 16.2941 9.70619C15.6836 10.3167 14.6938 10.3167 14.0833 9.70619C13.4729 9.09571 13.4729 8.10593 14.0833 7.49546C14.6938 6.88498 15.6836 6.88498 16.2941 7.49546Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.2021 4.70501C12.1421 5.64501 12.1421 7.16907 11.2021 8.10909C10.2621 9.04909 8.73804 9.04909 7.79802 8.10909C6.85802 7.16908 6.85802 5.64502 7.79802 4.70501C8.73803 3.765 10.2621 3.765 11.2021 4.70501"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.91664 7.49546C5.52712 8.10594 5.52712 9.09571 4.91664 9.70619C4.30616 10.3167 3.31638 10.3167 2.70591 9.70619C2.09543 9.09571 2.09543 8.10593 2.70591 7.49546C3.31638 6.88498 4.30616 6.88498 4.91664 7.49546Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M18 14.8183V13.9714C18 12.9042 17.1353 12.0396 16.0682 12.0396H15.4492"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M1 14.8183V13.9714C1 12.9042 1.86468 12.0396 2.93182 12.0396H3.55077"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.6255 14.8181V13.581C13.6255 12.0873 12.4146 10.8765 10.9209 10.8765H8.07808C6.5844 10.8765 5.37354 12.0873 5.37354 13.581V14.8181"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiTeamOutlined);
const Memo = memo(ForwardRef);
export default Memo;
