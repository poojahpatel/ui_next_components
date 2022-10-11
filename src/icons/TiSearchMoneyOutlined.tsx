// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiSearchMoneyOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={100}
      height={90}
      fill="none"
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <ellipse cx={17.5404} cy={20.3375} fill="#FFCFA4" rx={15.5404} ry={15.3375} />
      <ellipse
        cx={24.0932}
        cy={20.3375}
        stroke="#FF8F27"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        rx={15.5404}
        ry={15.3375}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#FF8F27"
        d="M20.0977 23.3948C20.0977 24.901 21.6592 26.1215 23.5863 26.1215H24.9818C26.9089 26.1215 28.4705 24.901 28.4705 23.3948C28.4705 19.5775 20.0977 21.7588 20.0977 17.9415C20.0977 16.4352 21.6592 15.2148 23.5863 15.2148H24.9818C26.9089 15.2148 28.4705 16.4352 28.4705 17.9415"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#FF8F27"
        d="M24.3728 13.6533V14.6713"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#FF8F27"
        d="M24.3728 27.0323V28.0502"
      />
      <path
        fillOpacity={0.697279}
        d="M67.1996 22.2104C76.1208 31.4485 75.8638 46.1696 66.6256 55.0909C57.3874 64.0121 42.6663 63.7551 33.7451 54.5169C24.8239 45.2787 25.0809 30.5576 34.3191 21.6364C43.5572 12.7152 58.2783 12.9722 67.1996 22.2104Z"
        fill="white"
      />
      <path
        fillOpacity={0.697279}
        fillRule="evenodd"
        d="M49.9026 55.1757C54.2973 55.3242 58.7447 53.76 62.1577 50.4642C68.8406 44.0105 69.0265 33.3612 62.5729 26.6783C59.8929 23.9031 56.4894 22.2483 52.9469 21.7241"
        clipRule="evenodd"
        fill="white"
      />
      <path
        fillOpacity={0.697279}
        fillRule="evenodd"
        d="M66.9693 55.4468L70.0625 58.6498L66.9693 55.4468Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        fillOpacity={0.697279}
        fillRule="evenodd"
        d="M67.5712 61.0556L72.5538 56.244L93.3442 75.3842C95.5164 77.384 95.5571 80.7999 93.4332 82.8509C91.3093 84.902 87.897 84.742 85.9742 82.5014L67.5712 61.0556Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        fillOpacity={0.697279}
        fillRule="evenodd"
        d="M71.7077 64.6268L76.3343 60.1589L71.7077 64.6268Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        fill="none"
        stroke="#FF8F27"
        d="M49.9026 55.1757C54.2973 55.3242 58.7447 53.76 62.1577 50.4642C68.8406 44.0105 69.0265 33.3612 62.5729 26.6783C59.8929 23.9031 56.4894 22.2483 52.9469 21.7241M66.9693 55.4468L70.0625 58.6498M71.7077 64.6268L76.3343 60.1589M67.1996 22.2104C76.1208 31.4485 75.8638 46.1696 66.6256 55.0909C57.3874 64.0121 42.6663 63.7551 33.7451 54.5169C24.8239 45.2787 25.0809 30.5576 34.3191 21.6364C43.5572 12.7152 58.2783 12.9722 67.1996 22.2104ZM67.5712 61.0556L72.5538 56.244L93.3442 75.3842C95.5164 77.384 95.5571 80.7999 93.4332 82.8509C91.3093 84.902 87.897 84.742 85.9742 82.5014L67.5712 61.0556Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiSearchMoneyOutlined);
const Memo = memo(ForwardRef);
export default Memo;
