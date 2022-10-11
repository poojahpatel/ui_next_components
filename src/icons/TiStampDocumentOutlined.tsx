// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiStampDocumentOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={77}
      height={70}
      fill="none"
      viewBox="0 0 77 70"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M7.09091 58C4.27818 58 2 55.7218 2 52.909V32.5454H12.1818"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M12.1817 52.9091C12.1817 55.7218 9.90355 58 7.09082 58H52.909C55.7217 58 57.9999 55.7218 57.9999 52.9091V9.00001C57.9999 5.13401 54.8659 2 50.9999 2H19.1817C15.3157 2 12.1817 5.13401 12.1817 9V52.9091Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M30.3457 24.1235V24.1235C30.3457 26.0331 31.9574 27.5803 33.9465 27.5803H35.3869C37.376 27.5803 38.9877 26.0331 38.9877 24.1235C38.9877 19.284 30.3457 22.0495 30.3457 17.21C30.3457 15.3004 31.9574 13.7532 33.9465 13.7532H35.3869C37.376 13.7532 38.9877 15.3004 38.9877 17.21"
      />
      <path
        d="M37.417 12.0247C37.417 10.5059 36.1858 9.27466 34.667 9.27466V12.2747C34.5289 12.2747 34.417 12.1627 34.417 12.0247H37.417ZM37.417 13.5399V12.0247H34.417V13.5399H37.417ZM34.667 16.2899C36.1858 16.2899 37.417 15.0587 37.417 13.5399H34.417C34.417 13.4018 34.5289 13.2899 34.667 13.2899V16.2899ZM31.917 13.5399C31.917 15.0587 33.1482 16.2899 34.667 16.2899V13.2899C34.8051 13.2899 34.917 13.4018 34.917 13.5399H31.917ZM31.917 12.0247V13.5399H34.917V12.0247H31.917ZM34.667 9.27466C33.1482 9.27466 31.917 10.5059 31.917 12.0247H34.917C34.917 12.1627 34.8051 12.2747 34.667 12.2747V9.27466ZM37.417 27.9497C37.417 26.431 36.1858 25.1997 34.667 25.1997V28.1997C34.5289 28.1997 34.417 28.0878 34.417 27.9497H37.417ZM37.417 29.3086V27.9497H34.417V29.3086H37.417ZM34.667 32.0586C36.1858 32.0586 37.417 30.8274 37.417 29.3086H34.417C34.417 29.1705 34.5289 29.0586 34.667 29.0586V32.0586ZM31.917 29.3086C31.917 30.8274 33.1482 32.0586 34.667 32.0586V29.0586C34.8051 29.0586 34.917 29.1705 34.917 29.3086H31.917ZM31.917 27.9497V29.3086H34.917V27.9497H31.917ZM34.667 25.1997C33.1482 25.1997 31.917 26.431 31.917 27.9497H34.917C34.917 28.0878 34.8051 28.1997 34.667 28.1997V25.1997Z"
        fill="#0F2DA2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M21.833 38.1666H42.833"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M21.833 45.1666H33.4997"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M75 60.8462H45V53.9231H75V60.8462Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M71.5388 67.7693H48.4619V60.8462H71.5388V67.7693Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M55.7198 53.9231C55.7198 53.9231 55.2031 50.2843 54.9249 48.9062C54.3629 46.1222 53.5467 44.5022 52.7867 43.0986C50.169 38.2646 53.7696 32 59.9626 32C66.1555 32 68.9364 37.2297 67.8445 41.2495C67.2858 43.3065 65.7094 46.3919 64.8407 48.5368C64.129 50.2939 63.8692 53.9231 63.8692 53.9231H55.7198Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiStampDocumentOutlined);
const Memo = memo(ForwardRef);
export default Memo;
