// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFormEmptyOutlined = (props: SvgIconProps) => {
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
      <path d="M10.2267 1C10.7681 1 11.2891 1.20969 11.7133 1.62321L14.8683 5.35115C15.2715 5.74083 15.5 6.27697 15.5 6.83822V13.8532C15.5 15.3416 14.3269 16.5482 12.8799 16.5482H5.12016C3.67309 16.5482 2.5 15.3416 2.5 13.8532V3.69502C2.5 2.20661 3.67309 1 5.12016 1H10.2267ZM9.84954 2.03655H5.12016C4.22966 2.03655 3.50775 2.77908 3.50775 3.69502V13.8532C3.50775 14.7691 4.22966 15.5116 5.12016 15.5116H12.8799C13.7704 15.5116 14.4922 14.7691 14.4922 13.8532L14.4918 7.10111L12.1675 7.10138C10.9229 7.10138 9.9075 6.09248 9.85204 4.82645L9.84966 4.71732L9.84954 2.03655ZM10.858 2.23401L10.8574 4.71732C10.8574 5.4329 11.3997 6.01822 12.0846 6.06219L12.1675 6.06483L14.139 6.06456L10.9883 2.34138C10.9477 2.30208 10.9041 2.26621 10.858 2.23401Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFormEmptyOutlined);
const Memo = memo(ForwardRef);
export default Memo;
