// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLowerPayment = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={117}
      height={94}
      fill="none"
      viewBox="0 0 117 94"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <ellipse cx={59.536} cy={25.163} fill="black" rx={21.536} ry={23.9333} />
      <path
        strokeLinecap="round"
        strokeWidth={3.18868}
        fill="none"
        stroke="black"
        d="M71.2796 21.4402C71.2796 19.0251 69.385 16.2075 64.0344 16.2075C58.6837 16.2075 57.1916 19.0251 57.1916 21.4402C56.9928 26.7297 60.1152 27.8805 64.4369 27.8805C68.7586 27.8805 71.4875 30.1868 71.2796 34.3208C71.0619 38.8803 68.2218 39.956 64.4369 39.956C58.3991 39.956 56.9905 37.7332 56.7891 34.3208"
      />
      <path strokeLinecap="round" strokeWidth={3.18868} fill="none" stroke="black" d="M64.0348 16.2077V11.302" />
      <path strokeLinecap="round" strokeWidth={3.18868} fill="none" stroke="black" d="M64.0348 27.8805V21.3647" />
      <path strokeLinecap="round" strokeWidth={3.18868} fill="none" stroke="black" d="M64.0348 44.7862V33.8428" />
      <circle cx={64.1469} cy={27.4906} r={26.4906} strokeWidth={2} fill="none" stroke="black" />
      <path
        fillRule="evenodd"
        d="M87.6299 2.35693V40.0371H78.1889C76.4204 40.0371 75.4933 42.1373 76.685 43.444L91.7212 59.9317C91.7212 59.9317 93.268 60.2633 93.7973 59.9317C94.3265 59.6001 94.4765 58.2054 94.4765 58.2054V2.35693H87.6299Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        fillRule="evenodd"
        d="M91.0206 4.39233V42.0725H81.5011C79.7449 42.0725 78.8131 44.1475 79.9798 45.4601L93.9879 61.2195C95.1889 62.5706 97.2911 62.5982 98.5272 61.279L113.311 45.4995C114.529 44.1994 113.607 42.0725 111.826 42.0725H101.429V24.7257"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M87.6299 2.35693V40.0371H78.1104C76.3543 40.0371 75.4225 42.1121 76.5892 43.4247L90.5973 59.1841C91.7983 60.5352 93.9005 60.5628 95.1365 59.2436L109.921 43.4641C111.139 42.164 110.217 40.0371 108.435 40.0371H98.0387V22.6903"
        stroke="black"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M60.2426 78.6099C61.3519 78.6099 67.2384 78.1818 68.7161 78.073C68.9391 78.0566 69.1558 77.9969 69.356 77.8973L87.6084 68.8197C90.0776 67.5917 93.0746 68.3871 94.6099 70.6778V70.6778C96.3697 73.3035 95.553 76.8693 92.8257 78.4672L69.5221 92.1209C67.8512 93.0999 65.8883 93.4572 63.9796 93.1299L17.801 85.2104V65.83L32.2447 62.173C37.9853 60.7196 44.0452 61.2023 49.4833 63.5462L62.3258 69.0817C64.6919 70.1015 65.8818 72.7644 65.0631 75.2075V75.2075C64.2164 77.7341 61.5234 79.1388 58.9668 78.3875L44.9094 74.2563"
        stroke="black"
        fill="white"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="black"
        d="M13.7708 59.3462C15.9965 59.3462 17.8008 61.1505 17.8008 63.3761V87.2031C17.8008 89.4288 15.9965 91.233 13.7708 91.233H4.88432C2.65864 91.233 0.854364 89.4288 0.854364 87.2031V63.3761C0.854364 61.1505 2.65864 59.3462 4.88432 59.3462L13.7708 59.3462Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M5.58894 59.3462C2.96609 59.3462 0.839844 61.4724 0.839844 64.0953V86.4839C0.839844 89.1068 2.96609 91.233 5.58895 91.233H13.9661V59.3462H5.58894Z"
        clipRule="evenodd"
        fill="black"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLowerPayment);
const Memo = memo(ForwardRef);
export default Memo;
