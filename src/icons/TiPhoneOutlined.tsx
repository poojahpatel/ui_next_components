// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneOutlined = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.5205 11.3695C10.1331 11.7573 9.49999 11.7527 9.1129 11.366L6.62554 8.88079C6.2355 8.4911 6.22897 7.86213 6.61716 7.46966L7.22832 6.85178C7.81352 6.26013 7.80869 5.3017 7.22383 4.71736L5.56813 3.06312C4.98045 2.47596 4.0333 2.4703 3.43814 3.06493L2.74738 3.75509C2.40163 4.10053 2.07848 4.77354 2.06399 5.24696C2.06399 5.24696 1.35379 8.52463 5.43227 12.5995C9.51075 16.6744 12.7577 15.9313 12.7577 15.9313C13.2323 15.8953 13.8904 15.5931 14.2431 15.2407L14.9339 14.5506C15.5226 13.9624 15.5185 13.0047 14.9412 12.428L13.2582 10.7464C12.6736 10.1623 11.7293 10.1596 11.1347 10.7547L10.5205 11.3695Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneOutlined);
const Memo = memo(ForwardRef);
export default Memo;
