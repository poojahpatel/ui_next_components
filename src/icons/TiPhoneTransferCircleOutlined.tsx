// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneTransferCircleOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <g clipPath="url(#clip0_10656_33836)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
          fill="none"
          stroke="currentColor"
          d="M10.8922 13.1077C10.1989 12.4143 9.67621 11.638 9.32894 10.8504C9.25605 10.6839 9.29872 10.4889 9.42731 10.3603L9.91266 9.87499C10.3103 9.47735 10.3103 8.91497 9.96303 8.5677L9.2679 7.87257C8.80507 7.40974 8.05483 7.40974 7.592 7.87257L7.20562 8.25836C6.7665 8.69748 6.58339 9.33098 6.70191 9.95914C6.99466 11.5076 7.89423 13.2031 9.34553 14.6544C10.7968 16.1057 12.4923 17.0053 14.0408 17.298C14.6689 17.4165 15.3024 17.2334 15.7415 16.7943L16.1273 16.4085C16.5902 15.9457 16.5902 15.1954 16.1273 14.7326L15.4322 14.0375C15.0849 13.6902 14.522 13.6902 14.1753 14.0375L13.6402 14.5732C13.5116 14.7018 13.3166 14.745 13.1501 14.6716C12.3625 14.3237 11.5856 13.8004 10.8922 13.1077Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
          fill="none"
          stroke="currentColor"
          d="M17.3335 10.2223V6.66669H13.7778"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
          fill="none"
          stroke="currentColor"
          d="M13.7778 10.2223L17.3335 6.66669"
        />
      </g>
      <rect
        width={22.5}
        height={22.5}
        x={0.75}
        y={0.75}
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        rx={11.25}
      />
      <defs>
        <clipPath id="clip0_10656_33836">
          <rect width={12} height={12} transform="translate(6 6)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneTransferCircleOutlined);
const Memo = memo(ForwardRef);
export default Memo;
