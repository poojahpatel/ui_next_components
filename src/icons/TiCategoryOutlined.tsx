// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCategoryOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13641_81024)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.41432 7.78005H4.36573C3.61116 7.78005 3 7.16889 3 6.41432V4.36573C3 3.61116 3.61116 3 4.36573 3H6.41432C7.16889 3 7.78005 3.61116 7.78005 4.36573V6.41432C7.78005 7.16889 7.16889 7.78005 6.41432 7.78005Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M13.926 7.78005H11.8774C11.1229 7.78005 10.5117 7.16889 10.5117 6.41432V4.36573C10.5117 3.61116 11.1229 3 11.8774 3H13.926C14.6806 3 15.2918 3.61116 15.2918 4.36573V6.41432C15.2918 7.16889 14.6806 7.78005 13.926 7.78005Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.1624 15.1597L10.9019 13.8992C10.4376 13.435 10.4376 12.6829 10.9019 12.2186L12.1624 10.9582C12.6266 10.4939 13.3787 10.4939 13.843 10.9582L15.1034 12.2186C15.5677 12.6829 15.5677 13.435 15.1034 13.8992L13.843 15.1597C13.3787 15.624 12.6266 15.624 12.1624 15.1597Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M6.41432 15.2916H4.36573C3.61116 15.2916 3 14.6804 3 13.9258V11.8772C3 11.1227 3.61116 10.5115 4.36573 10.5115H6.41432C7.16889 10.5115 7.78005 11.1227 7.78005 11.8772V13.9258C7.78005 14.6804 7.16889 15.2916 6.41432 15.2916Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_13641_81024">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCategoryOutlined);
const Memo = memo(ForwardRef);
export default Memo;
