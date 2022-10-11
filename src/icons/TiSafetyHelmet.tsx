// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSafetyHelmet = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={65}
      height={70}
      fill="none"
      viewBox="0 0 65 70"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M8.50195 35.4514H8.26848C6.40078 35.4514 5 37.0856 5 38.7198V39.6537H65V38.7198C65 37.0856 63.5992 35.4514 61.7315 35.4514C61.6026 35.4514 61.4981 35.3456 61.4972 35.2166C61.4133 23.6562 55.1287 14.6465 45.3891 10.7043V30.3152C45.3891 31.2177 44.6574 31.9494 43.7549 31.9494C42.8523 31.9494 42.1208 31.2177 42.118 30.3152C42.1058 26.5117 42.0541 22.7111 42.0027 18.9332C41.9447 14.6731 41.8872 10.442 41.8872 6.26848C41.8872 4.40078 40.4864 3 38.6187 3H31.3813C29.5136 3 28.1128 4.40078 28.1128 6.26848V30.1986C28.1128 31.1656 27.3289 31.9494 26.3619 31.9494C25.3948 31.9494 24.6109 31.1655 24.6109 30.1984V10.7043C14.8054 14.6732 8.50195 23.7782 8.50195 35.4514ZM39.0853 19.5759C39.0853 17.4111 37.2694 15.6071 35.0905 15.6071C32.7299 15.6071 30.9141 17.4111 30.9141 19.5759C30.9141 21.7408 32.7299 23.5448 35.0905 23.5448C37.2694 23.5448 39.0853 21.7408 39.0853 19.5759Z"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <path
        d="M4.50195 33.4514V34.4514H5.50195V33.4514H4.50195ZM1 37.6537H0V38.6537H1V37.6537ZM61 37.6537V38.6537H62V37.6537H61ZM57.4981 33.4514H56.4981V34.4514H57.4981V33.4514ZM41.3891 8.70428L41.7643 7.77733L40.3891 7.22071V8.70428H41.3891ZM38.118 28.3152L37.118 28.3184L38.118 28.3152ZM38.0027 16.9332L39.0026 16.9196V16.9196L38.0027 16.9332ZM20.6109 8.70428H21.6109V7.22071L20.2357 7.77733L20.6109 8.70428ZM4.26848 34.4514H4.50195V32.4514H4.26848V34.4514ZM2 36.7198C2 35.5914 2.99848 34.4514 4.26848 34.4514V32.4514C1.80308 32.4514 0 34.5799 0 36.7198H2ZM2 37.6537V36.7198H0V37.6537H2ZM61 36.6537H1V38.6537H61V36.6537ZM60 36.7198V37.6537H62V36.7198H60ZM57.7315 34.4514C59.0015 34.4514 60 35.5914 60 36.7198H62C62 34.5799 60.1969 32.4514 57.7315 32.4514V34.4514ZM57.4981 34.4514H57.7315V32.4514H57.4981V34.4514ZM41.0139 9.63123C50.4294 13.4423 56.4981 22.1722 56.4981 33.4514H58.4981C58.4981 21.3842 51.9597 11.904 41.7643 7.77733L41.0139 9.63123ZM42.3891 28.3152V8.70428H40.3891V28.3152H42.3891ZM39.7549 30.9494C41.2097 30.9494 42.3891 29.77 42.3891 28.3152H40.3891C40.3891 28.6655 40.1051 28.9494 39.7549 28.9494V30.9494ZM37.118 28.3184C37.1226 29.7699 38.2992 30.9494 39.7549 30.9494V28.9494C39.4054 28.9494 39.1191 28.6655 39.1179 28.312L37.118 28.3184ZM37.0028 16.9468C37.0542 20.7255 37.1058 24.521 37.118 28.3184L39.1179 28.312C39.1058 24.5024 39.054 20.6966 39.0026 16.9196L37.0028 16.9468ZM36.8872 4.26848C36.8872 8.44999 36.9448 12.688 37.0028 16.9468L39.0026 16.9196C38.9446 12.6583 38.8872 8.43406 38.8872 4.26848H36.8872ZM34.6187 2C35.9341 2 36.8872 2.95306 36.8872 4.26848H38.8872C38.8872 1.84849 37.0387 0 34.6187 0V2ZM27.3813 2H34.6187V0H27.3813V2ZM25.1128 4.26848C25.1128 2.95306 26.0659 2 27.3813 2V0C24.9613 0 23.1128 1.84849 23.1128 4.26848H25.1128ZM25.1128 28.1986V4.26848H23.1128V28.1986H25.1128ZM22.3619 30.9494C23.8811 30.9494 25.1128 29.718 25.1128 28.1986H23.1128C23.1128 28.6132 22.7767 28.9494 22.3619 28.9494V30.9494ZM19.6109 28.1984C19.6109 29.7178 20.8425 30.9494 22.3619 30.9494V28.9494C21.9471 28.9494 21.6109 28.6132 21.6109 28.1984H19.6109ZM19.6109 8.70428V28.1984H21.6109V8.70428H19.6109ZM5.50195 33.4514C5.50195 22.1722 11.5706 13.4423 20.9861 9.63123L20.2357 7.77733C10.0403 11.904 3.50195 21.3842 3.50195 33.4514H5.50195ZM31.0905 14.6071C32.7233 14.6071 34.0853 15.9695 34.0853 17.5759H36.0853C36.0853 14.8527 33.8156 12.6071 31.0905 12.6071V14.6071ZM27.9141 17.5759C27.9141 15.9982 29.2467 14.6071 31.0905 14.6071V12.6071C28.2131 12.6071 25.9141 14.824 25.9141 17.5759H27.9141ZM31.0905 20.5448C29.2467 20.5448 27.9141 19.1537 27.9141 17.5759H25.9141C25.9141 20.3279 28.2131 22.5448 31.0905 22.5448V20.5448ZM34.0853 17.5759C34.0853 19.1824 32.7233 20.5448 31.0905 20.5448V22.5448C33.8156 22.5448 36.0853 20.2992 36.0853 17.5759H34.0853Z"
        fill="#0D1C43"
      />
      <path
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M7.49219 37.9117C8.9695 54.9938 18.9838 68.2062 31.1176 68.2062C43.2813 68.2062 53.3149 54.9289 54.7538 37.786"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSafetyHelmet);
const Memo = memo(ForwardRef);
export default Memo;