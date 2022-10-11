// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLoanOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={87}
      height={88}
      fill="none"
      viewBox="0 0 87 88"
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
        d="M53 72.5679C54.0027 72.5679 59.3239 72.181 60.6596 72.0826C60.8612 72.0678 61.057 72.0138 61.238 71.9238L77.7372 63.7182C79.9692 62.6081 82.6783 63.3271 84.0662 65.3978V65.3978C85.657 67.7713 84.9187 70.9945 82.4534 72.4389L61.3882 84.7811C59.8778 85.6661 58.1034 85.9891 56.378 85.6932L14.6351 78.5345V61.0157L27.6915 57.7099C32.8807 56.3961 38.3585 56.8324 43.2742 58.9512L54.8831 63.955C57.0219 64.8769 58.0976 67.284 57.3575 69.4923V69.4923C56.5921 71.7762 54.1578 73.0461 51.8468 72.3669L39.1396 68.6325"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        d="M11.0048 54.5413C13.0096 54.5413 14.6348 56.1665 14.6348 58.1713L14.6348 82.5213C14.6348 84.5261 13.0096 86.1513 11.0048 86.1513H6.01251C4.00772 86.1513 2.38251 84.5261 2.38251 82.5213V58.1713C2.38251 56.1665 4.00772 54.5413 6.01251 54.5413H11.0048Z"
        clipRule="evenodd"
      />
      <circle
        r={1.21429}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#0F2DA2"
        transform="matrix(-1 0 0 1 8.67829 79.2465)"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M50.3701 35.3704V35.3704C50.3701 37.4163 52.097 39.0741 54.2281 39.0741H55.7714C57.9025 39.0741 59.6294 37.4163 59.6294 35.3704C59.6294 30.1852 50.3701 33.1482 50.3701 27.963C50.3701 25.9171 52.097 24.2593 54.2281 24.2593H55.7714C57.9025 24.2593 59.6294 25.9171 59.6294 27.963"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M55 22V40.5185"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M59.7518 11.0777L63.0566 4.52774C63.1714 4.29965 63.1587 4.02894 63.023 3.81231C62.8873 3.59603 62.6481 3.46497 62.3915 3.46641C61.8707 3.47106 61.3708 3.26445 61.0077 2.89456C59.7027 1.70181 57.6943 1.70181 56.3896 2.89456C56.0229 3.26123 55.5238 3.46712 55.0034 3.46712C54.4826 3.46712 53.9838 3.26123 53.6172 2.89456C52.3111 1.70253 50.3023 1.70253 48.9962 2.89456C48.6316 3.26481 48.1303 3.47142 47.6088 3.46641C47.3526 3.46641 47.1144 3.59782 46.9798 3.8141C46.8448 4.03002 46.8325 4.30036 46.9473 4.52774L50.2481 11.0777"
      />
      <path
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M49.5045 14.2751C42.7275 16.0813 38.0123 22.1707 38 29.1331V42.3332C38.0022 44.3574 39.6555 45.9974 41.6957 45.9999H68.3043C70.3442 45.9974 71.9975 44.3574 72 42.3332V29.1331C71.9874 22.1707 67.2722 16.0813 60.4951 14.2751"
      />
      <path
        fillRule="evenodd"
        strokeWidth={3}
        fill="none"
        stroke="#C550AE"
        d="M49 13C49 11.8954 49.8954 11 51 11H59C60.1046 11 61 11.8954 61 13V13C61 14.1046 60.1046 15 59 15H51C49.8954 15 49 14.1046 49 13V13Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLoanOutlined);
const Memo = memo(ForwardRef);
export default Memo;
