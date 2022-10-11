// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneRejectOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_11260_55817)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.6666 3.53198L2.66663 13.5386"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.90735 11.9612C8.22668 12.9685 9.64202 13.6125 10.9627 13.8625C11.6693 13.9959 12.382 13.7899 12.876 13.2959L13.31 12.8619C13.8307 12.3412 13.8307 11.4972 13.31 10.9759L12.528 10.1939C12.1373 9.80321 11.504 9.80321 11.114 10.1939L10.512 10.7965C10.3673 10.9412 10.148 10.9899 9.96068 10.9072C9.52735 10.7159 9.09668 10.4759 8.67868 10.1912"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.24547 8.956C6.55614 8.22533 6.02147 7.42333 5.66214 6.60866C5.58014 6.422 5.62814 6.20266 5.77281 6.058L6.31881 5.512C6.76614 5.06466 6.76614 4.432 6.37547 4.04133L5.59347 3.25866C5.07281 2.738 4.22881 2.738 3.70814 3.25866L3.27347 3.69333C2.77947 4.18733 2.57347 4.9 2.70681 5.60666C3.02347 7.28266 3.97814 9.10866 5.50347 10.6993"
        />
      </g>
      <defs>
        <clipPath id="clip0_11260_55817">
          <rect width={16} height={16} transform="translate(0 0.385254)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneRejectOutlined);
const Memo = memo(ForwardRef);
export default Memo;
