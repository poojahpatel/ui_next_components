// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFanOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
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
        d="M13.4609 4.47473C14.8476 6.61979 14.8469 9.38165 13.4617 11.526"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.5626 5.43776C11.9777 6.85282 11.9777 9.14709 10.5626 10.5621C9.14758 11.9772 6.85331 11.9772 5.43825 10.5621C4.02319 9.14709 4.02319 6.85282 5.43825 5.43776C6.85331 4.0227 9.14758 4.0227 10.5626 5.43776Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M9.67578 4.78676L11.5421 2.51964C11.8136 2.18957 12.3105 2.16574 12.6131 2.46764L13.5326 3.38705C13.8352 3.68967 13.8106 4.18657 13.4806 4.45814L11.2134 6.32441"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M6.3228 11.2133L4.45653 13.4804C4.18497 13.8104 3.68806 13.8343 3.38544 13.5324L2.46603 12.613C2.16341 12.3103 2.18797 11.8134 2.51803 11.5419L4.78515 9.6756"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M4.78559 6.32366L2.51775 4.45738C2.18768 4.18582 2.16385 3.68892 2.46574 3.3863L3.38516 2.46688C3.68778 2.16427 4.18468 2.18882 4.45624 2.51889L6.32252 4.786"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.2134 9.67633L13.4806 11.5426C13.8106 11.8142 13.8345 12.3111 13.5326 12.6137L12.6131 13.5331C12.3105 13.8357 11.8136 13.8112 11.5421 13.4811L9.67578 11.214"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.5259 13.4609C9.38152 14.8461 6.61895 14.8468 4.47461 13.4601"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.53913 4.474C1.15387 6.61834 1.15314 9.38019 2.53985 11.5253"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M11.5239 2.53985C9.37885 1.15314 6.61699 1.15387 4.47266 2.53913"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFanOutlined);
const Memo = memo(ForwardRef);
export default Memo;
