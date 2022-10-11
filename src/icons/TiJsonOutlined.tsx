// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiJsonOutlined = (props: SvgIconProps) => {
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
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.2231 12.0001C14.2231 13.3334 13.0044 14.2223 11.5009 14.2223H4.50091C2.99747 14.2223 1.77869 13.0035 1.77869 11.5001V4.50005C1.77869 2.99661 2.99747 1.77783 4.50091 1.77783H11.5009C13.0044 1.77783 14.2231 2.99661 14.2231 4.50005V6.22228"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M2.00964 5.23486L14.1228 5.23486"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.74017 10.4443L4.34045 10.4443C4.65617 10.4443 4.91211 10.1884 4.91211 9.87266V7.77637"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00827 8.06563C7.8968 7.89527 7.71387 7.77637 7.49492 7.77637H7.45262H6.96556C6.62085 7.77637 6.34131 8.05591 6.34131 8.40062C6.34131 8.68702 6.53567 8.93627 6.8135 9.00601L7.64641 9.21524C7.92424 9.28498 8.11861 9.53423 8.11861 9.82063C8.11861 10.1653 7.83906 10.4449 7.49435 10.4449H7.00729V10.4432H6.96499C6.74662 10.4432 6.56426 10.3243 6.45278 10.1551"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.54765 9.72974C9.54765 10.1244 9.86758 10.4443 10.2622 10.4443V10.4443C10.6569 10.4443 10.9768 10.1244 10.9768 9.72974V8.49094"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.406 10.3488L12.406 7.87207L14.4068 10.3488L14.4068 7.87207"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiJsonOutlined);
const Memo = memo(ForwardRef);
export default Memo;
