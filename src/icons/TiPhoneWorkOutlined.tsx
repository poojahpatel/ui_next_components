// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPhoneWorkOutlined = (props: SvgIconProps) => {
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
      <g clipPath="url(#clip0_13637_87585)">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.32812 15.3782V3.99995C5.32812 2.89538 6.22356 1.99995 7.32813 1.99995H11.1977C12.3023 1.99995 13.1977 2.89538 13.1977 3.99995V6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M5.32737 6.72168H3.39258C2.28801 6.72168 1.39258 7.61711 1.39258 8.72168V15.3782"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.68896 7.50867H9.50085"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.44531 9.86954H5.32813"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M3.44531 12.2304H5.32813"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.68896 5.14777H10.8368"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M7.67977 15.6643H1"
        />
        <path
          fillRule="evenodd"
          strokeWidth={1.2}
          fill="none"
          stroke="currentColor"
          d="M12.6431 12.3508C12.8416 12.5495 13.166 12.5471 13.3643 12.349L14.6387 11.0758C14.8385 10.8761 14.8418 10.5538 14.643 10.3528L14.3298 10.0362C14.03 9.73309 14.0325 9.24205 14.3321 8.94267L15.1804 8.09514C15.4815 7.79431 15.9668 7.79141 16.2717 8.09607L16.6256 8.44966C16.8027 8.62664 16.9683 8.97145 16.9757 9.214C16.9757 9.214 17.3396 10.8933 15.25 12.981C13.1605 15.0687 11.4969 14.688 11.4969 14.688C11.2538 14.6696 10.9166 14.5147 10.7359 14.3342L10.382 13.9806C10.0804 13.6793 10.0825 13.1886 10.3782 12.8931L11.2405 12.0316C11.54 11.7323 12.0238 11.7309 12.3284 12.0358L12.6431 12.3508Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_13637_87585">
          <rect width={18} height={18} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPhoneWorkOutlined);
const Memo = memo(ForwardRef);
export default Memo;
