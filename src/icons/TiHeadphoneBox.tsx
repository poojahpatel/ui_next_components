// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHeadphoneBox = (props: SvgIconProps) => {
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
      <rect width={24} height={24} rx={5} fill="currentColor" />
      <g clipPath="url(#clip0_9841_30108)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M16.5199 15.2053H15.8624C15.4994 15.2053 15.2048 14.9107 15.2048 14.5477V11.2601C15.2048 10.8971 15.4994 10.6025 15.8624 10.6025H16.5199C17.2465 10.6025 17.835 11.191 17.835 11.9176V13.8902C17.835 14.6168 17.2465 15.2053 16.5199 15.2053Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M7.97248 15.2053H7.31495C6.58837 15.2053 5.99988 14.6168 5.99988 13.8902V11.9176C5.99988 11.191 6.58837 10.6025 7.31495 10.6025H7.97248C8.33544 10.6025 8.63001 10.8971 8.63001 11.2601V14.5477C8.63001 14.9107 8.33544 15.2053 7.97248 15.2053Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M16.1917 10.6027V10.274C16.1917 7.91342 14.2783 6 11.9178 6C9.55722 6 7.6438 7.91342 7.6438 10.274V10.6027"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M12.1715 17.9997H11.1927C10.6524 17.9997 10.2139 17.5611 10.2139 17.0208C10.2139 16.4805 10.6524 16.042 11.1927 16.042H12.1715C12.7118 16.042 13.1504 16.4805 13.1504 17.0208C13.1504 17.5611 12.7118 17.9997 12.1715 17.9997Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="white"
          d="M13.1506 17.1777H14.5479C15.2745 17.1777 15.863 16.5892 15.863 15.8626V15.2051"
        />
      </g>
      <defs>
        <clipPath id="clip0_9841_30108">
          <rect width={16} height={16} transform="translate(4 4)" fill="none" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHeadphoneBox);
const Memo = memo(ForwardRef);
export default Memo;
