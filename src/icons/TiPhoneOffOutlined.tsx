// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneOffOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_11260_55841)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.75406 9.63115C5.97406 8.85115 5.38606 7.97782 4.99539 7.09182C4.91339 6.90449 4.96139 6.68515 5.10606 6.54048L5.65206 5.99448C6.09939 5.54715 6.09939 4.91449 5.70872 4.52382L4.92672 3.74182C4.40606 3.22115 3.56206 3.22115 3.04139 3.74182L2.60672 4.17582C2.11272 4.66982 1.90672 5.38248 2.04006 6.08915C2.36939 7.83115 3.38139 9.73848 5.01406 11.3712C6.64672 13.0038 8.55406 14.0158 10.2961 14.3452C11.0027 14.4785 11.7154 14.2725 12.2094 13.7785L12.6434 13.3445C13.1641 12.8238 13.1641 11.9798 12.6434 11.4592L11.8614 10.6772C11.4707 10.2865 10.8374 10.2865 10.4474 10.6772L9.84539 11.2798C9.70072 11.4245 9.48139 11.4732 9.29406 11.3905C8.40806 10.9992 7.53406 10.4105 6.75406 9.63115Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14 2.38525L10 6.38525"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M14 6.38525L10 2.38525"
        />
      </g>
      <defs>
        <clipPath id="clip0_11260_55841">
          <rect width={16} height={16} transform="translate(0 0.385254)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneOffOutlined);
const Memo = memo(ForwardRef);
export default Memo;
