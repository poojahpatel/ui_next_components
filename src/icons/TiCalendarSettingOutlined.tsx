// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarSettingOutlined = (props: SvgIconProps) => {
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
        d="M10.842 2V3.47368"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.94727 2V3.47368"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2 6.42114H13.7895"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.7895 7.15787V4.94734C13.7895 3.7264 12.7999 2.73682 11.5789 2.73682H4.21053C2.98958 2.73682 2 3.7264 2 4.94734V11.5789C2 12.7999 2.98958 13.7894 4.21053 13.7894H7.15789"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.4165 11.952C13.8212 12.3567 13.8212 13.0128 13.4165 13.4175C13.0118 13.8222 12.3557 13.8222 11.951 13.4175C11.5463 13.0128 11.5463 12.3567 11.951 11.952C12.3557 11.5473 13.0118 11.5473 13.4165 11.952Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M13.8647 9.41823L14.1064 9.49865C14.3278 9.57243 14.4774 9.77969 14.4774 10.0131V10.36C14.4774 10.6551 14.7128 10.896 15.008 10.9022L15.3553 10.9097C15.5564 10.9138 15.7388 11.0295 15.8287 11.2094L15.9427 11.4373C16.0472 11.6463 16.0061 11.8983 15.8411 12.0633L15.5958 12.3086C15.3873 12.5171 15.3835 12.8541 15.5875 13.0672L15.8279 13.3184C15.9672 13.4639 16.0144 13.6741 15.9506 13.8652L15.8702 14.1068C15.7964 14.3282 15.5891 14.4778 15.3557 14.4778H15.0088C14.7137 14.4778 14.4728 14.7133 14.4666 15.0084L14.4592 15.3557C14.455 15.5568 14.3394 15.7392 14.1595 15.8291L13.9315 15.9431C13.7226 16.0476 13.4705 16.0065 13.3056 15.8416L13.0602 15.5962C12.8517 15.3877 12.5147 15.3839 12.3016 15.5879L12.0504 15.8283C11.9049 15.9676 11.6947 16.0148 11.5037 15.951L11.262 15.8706C11.0406 15.7968 10.891 15.5895 10.891 15.3562V15.0092C10.891 14.7141 10.6556 14.4732 10.3604 14.467L10.0131 14.4596C9.81202 14.4554 9.62964 14.3398 9.53969 14.1599L9.42569 13.9319C9.32124 13.723 9.36227 13.4709 9.52725 13.306L9.77264 13.0606C9.98114 12.8521 9.98487 12.5151 9.78093 12.302L9.54051 12.0508C9.40082 11.9049 9.35357 11.6943 9.4174 11.5037L9.49782 11.262C9.5716 11.0406 9.77886 10.891 10.0122 10.891H10.3592C10.6543 10.891 10.8952 10.6556 10.9014 10.3604L10.9088 10.0131C10.9138 9.81202 11.029 9.62964 11.2089 9.53969L11.4369 9.42569C11.6458 9.32124 11.8979 9.36227 12.0628 9.52725L12.3082 9.77264C12.5167 9.98114 12.8537 9.98487 13.0668 9.78093L13.318 9.54051C13.4635 9.40165 13.6741 9.3544 13.8647 9.41823V9.41823Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarSettingOutlined);
const Memo = memo(ForwardRef);
export default Memo;
