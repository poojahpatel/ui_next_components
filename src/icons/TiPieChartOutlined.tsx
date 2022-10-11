// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPieChartOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M21.3887 16.869C20.7525 18.3735 19.7575 19.6992 18.4906 20.7303C17.2237 21.7614 15.7235 22.4664 14.1211 22.7838C12.5188 23.1011 10.8631 23.0211 9.29883 22.5508C7.73456 22.0805 6.30931 21.2341 5.14771 20.0857C3.9861 18.9372 3.1235 17.5218 2.63532 15.963C2.14714 14.4042 2.04825 12.7495 2.34728 11.1436C2.64632 9.53778 3.33418 8.02963 4.35073 6.75103C5.36728 5.47244 6.68157 4.46232 8.17869 3.809"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        fill="none"
        stroke="currentColor"
        d="M22.1787 12.979C22.1787 11.6658 21.9201 10.3654 21.4175 9.15217C20.915 7.93891 20.1784 6.83652 19.2498 5.90794C18.3212 4.97935 17.2188 4.24276 16.0055 3.74021C14.7923 3.23766 13.4919 2.979 12.1787 2.979V12.979H22.1787Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPieChartOutlined);
const Memo = memo(ForwardRef);
export default Memo;
