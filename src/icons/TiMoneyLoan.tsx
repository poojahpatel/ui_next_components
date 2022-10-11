// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiMoneyLoan = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={70}
      height={61}
      fill="none"
      viewBox="0 0 70 61"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M16.7537 39.4111C16.7537 39.4111 25.0634 39.4111 29.9514 39.4111C34.8395 39.4111 38.2611 44.7156 38.2611 44.7156C38.2611 44.7156 45.1044 44.7156 47.5484 44.7156C51.9476 44.7156 51.9476 50.9845 47.5484 50.9845C51.4588 50.9845 59.7685 45.6801 63.1901 44.2334C67.5894 43.2689 67.5894 48.0912 66.123 49.0556C58.7909 52.4312 46.5708 58.7002 46.082 59.1824C41.6827 62.558 34.8395 59.6646 34.8395 59.6646L16.7537 53.8779V54.5535C16.7537 56.0446 15.5449 57.2535 14.0537 57.2535H8.74042C7.23356 57.2535 6.01833 56.0201 6.04072 54.5134L6.26143 39.6599C6.28335 38.1845 7.4856 37 8.96113 37H14.3426C15.6742 37 16.7537 38.0795 16.7537 39.4111Z"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <rect
        width={11.873}
        height={22.6667}
        x={1}
        y={33}
        strokeWidth={1.61905}
        fill="none"
        stroke="#0D1C43"
        rx={3.2381}
      />
      <path
        strokeWidth={1.61905}
        fill="none"
        stroke="#0D1C43"
        d="M12.873 35.6984C12.873 35.6984 22.0476 35.6984 27.4445 35.6984C32.8413 35.6984 36.6191 41.6349 36.6191 41.6349C36.6191 41.6349 44.1746 41.6349 46.873 41.6349C51.7302 41.6349 51.7302 48.6507 46.873 48.6507C51.1905 48.6507 60.3651 42.7142 64.1429 41.0952C69 40.0158 69 45.4126 67.381 46.492C59.2857 50.2698 45.7937 57.2857 45.254 57.8253C40.3969 61.6031 32.8413 58.365 32.8413 58.365L12.873 51.8888"
      />
      <path strokeLinecap="round" strokeWidth={1.61905} fill="none" stroke="#0D1C43" d="M31.2227 48.6508H46.8735" />
      <circle cx={42.7698} cy={17.923} r={15.2308} fill="none" />
      <path
        strokeLinecap="round"
        strokeWidth={2}
        fill="none"
        stroke="#0D1C43"
        d="M44.3314 12.7522C44.3314 11.3636 44.0999 9.74365 40.1657 9.74365C36.2314 9.74365 36.2314 11.3636 36.2314 12.7522C36.2314 16.455 38.3143 16.455 40.3971 16.455C43.6371 16.455 44.5628 17.8436 44.3314 20.1579C44.0999 22.935 42.5732 23.3978 40.3971 23.3978C36.9257 23.3978 36.2314 22.4721 36 20.1579"
      />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M40.1653 9.74361V6.9231" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M40.1653 16.455V12.7087" />
      <path strokeLinecap="round" strokeWidth={2} fill="none" stroke="#0D1C43" d="M40.1653 26.1748V19.8829" />
      <circle cx={40.2308} cy={16.2308} r={15.2308} strokeWidth={2} fill="none" stroke="#0D1C43" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiMoneyLoan);
const Memo = memo(ForwardRef);
export default Memo;
