// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPdf = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={28}
      height={36}
      fill="none"
      viewBox="0 0 28 36"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        d="M17.4885 0H6.75C3.02208 0 0 3.02208 0 6.75V29.25C0 32.9779 3.02208 36 6.75 36H20.556C24.2838 35.9996 27.3058 32.9778 27.3064 29.25L27.3075 9.81753L21.5809 5.72666L17.4885 0Z"
        fill="#F74A46"
      />
      <path
        fillRule="evenodd"
        d="M14.3814 19.9939C14.6115 20.4621 14.9009 20.9536 15.2497 21.4686C15.5984 21.9835 15.9739 22.4739 16.3763 22.9396C17.1354 22.817 17.7032 22.7775 18.0794 22.8211C19.2479 22.9564 19.7872 23.6271 19.5789 24.6863C19.3543 25.8279 17.7611 26.1572 16.9129 25.683C16.3474 25.3668 15.9621 25.1011 15.7572 24.8856C15.3625 24.9522 14.8349 25.0903 14.1745 25.3C13.5141 25.5097 12.8608 25.7464 12.2145 26.0103C11.0181 28.7715 9.79776 29.6549 8.5535 28.6605C7.71242 27.9884 7.86645 26.9677 8.5535 26.2083C9.3753 25.3 10.8562 24.6178 10.9075 24.6178C10.9559 24.6178 11.3597 23.7402 11.9983 21.9413C12.1201 21.5982 12.3068 21.0026 12.5585 20.1546C11.5058 17.6887 11.6792 16.3378 13.0785 16.1019C14.4779 15.8661 14.9122 17.1634 14.3814 19.9939ZM13.6347 21.899C13.5393 22.2715 13.4302 22.6366 13.3072 22.9943C13.1842 23.352 13.0366 23.7171 12.8644 24.0897C13.1672 23.959 13.4847 23.8399 13.8172 23.7322C14.1496 23.6245 14.4571 23.5366 14.7397 23.4684C14.5371 23.2077 14.3387 22.944 14.1444 22.6772C13.95 22.4105 13.7801 22.151 13.6347 21.899Z"
        clipRule="evenodd"
        fill="white"
      />
      <path d="M17.4888 0V7.36387C17.4888 8.67277 18.6335 9.81753 19.9424 9.81753H27.3063L17.4888 0Z" fill="#F3A29E" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPdf);
const Memo = memo(ForwardRef);
export default Memo;
