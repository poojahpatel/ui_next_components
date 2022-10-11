// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiKidsOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={19}
      height={18}
      fill="none"
      viewBox="0 0 19 18"
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
        d="M7.90628 7.78127L6.86498 8.4861C6.27987 8.88215 5.49602 8.80732 4.99642 8.30771L2.57755 5.88885C2.21829 5.52958 1.62016 5.58881 1.33833 6.01156V6.01156C1.13824 6.31169 1.16219 6.70827 1.39694 6.98214L3.6493 9.6099V16.0723C3.6493 16.405 3.919 16.6747 4.25168 16.6747V16.6747C4.54226 16.6747 4.79141 16.4673 4.84409 16.1815L5.36534 13.3537C5.46595 12.8079 6.24816 12.8079 6.34877 13.3537L6.87002 16.1815C6.92269 16.4673 7.17185 16.6747 7.46242 16.6747V16.6747C7.79511 16.6747 8.06481 16.405 8.06481 16.0723V10.0515L8.51679 9.71324"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M7.90605 4.7662C7.90605 5.74165 7.11529 6.5324 6.13985 6.5324C5.1644 6.5324 4.37365 5.74165 4.37365 4.7662C4.37365 3.79075 5.1644 3 6.13985 3C7.11529 3 7.90605 3.79075 7.90605 4.7662Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M10.4939 14.1563V16.0723C10.4939 16.405 10.7636 16.6747 11.0963 16.6747V16.6747C11.3868 16.6747 11.636 16.4673 11.6887 16.1815L12.2099 13.3537C12.3105 12.8079 13.0927 12.8079 13.1933 13.3537L13.7146 16.1815C13.7673 16.4673 14.0164 16.6747 14.307 16.6747V16.6747C14.6397 16.6747 14.9094 16.405 14.9094 16.0723V10.0515L17.5826 6.99631C17.8291 6.71467 17.856 6.30277 17.6485 5.99139V5.99139C17.3683 5.57117 16.7805 5.49732 16.4051 5.83518L13.6465 8.31793C13.0897 8.81905 12.2651 8.88187 11.6388 8.47086L10.5931 7.78461C9.64197 7.16043 8.38615 7.27404 7.5625 8.05878V8.05878"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        stroke="currentColor"
        d="M14.2603 4.7662C14.2603 5.74165 13.4696 6.5324 12.4941 6.5324C11.5187 6.5324 10.7279 5.74165 10.7279 4.7662C10.7279 3.79075 11.5187 3 12.4941 3C13.4696 3 14.2603 3.79075 14.2603 4.7662Z"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiKidsOutlined);
const Memo = memo(ForwardRef);
export default Memo;
