// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiLinkedIn = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={29}
      height={28}
      fill="none"
      viewBox="0 0 29 28"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M0.343506 3.19721C0.343506 2.27046 0.664126 1.50591 1.30534 0.903559C1.94655 0.301177 2.78016 0 3.8061 0C4.81374 0 5.62899 0.296534 6.2519 0.889659C6.89312 1.5013 7.21374 2.29827 7.21374 3.28062C7.21374 4.17027 6.90229 4.91164 6.27938 5.50476C5.63817 6.1164 4.79541 6.42222 3.75114 6.42222H3.72366C2.71602 6.42222 1.90077 6.1164 1.27786 5.50476C0.654947 4.89312 0.343506 4.12393 0.343506 3.19721ZM0.700758 27.5238V8.95219H6.80152V27.5238H0.700758ZM16.2824 27.5238H10.1817C10.2183 21.9264 10.2366 17.58 10.2366 14.4848C10.2366 11.3895 10.2183 9.54529 10.1817 8.95219H16.2824V11.5934L16.255 11.649H16.2824V11.5934C17.6015 9.53603 19.4427 8.50736 21.8061 8.50736C23.913 8.50736 25.6076 9.21631 26.8901 10.6342C28.1725 12.0521 28.8137 14.1326 28.8137 16.8757V27.5238H22.713V17.5986C22.713 14.7998 21.687 13.4005 19.6351 13.4005C18.8473 13.4005 18.1924 13.6183 17.6702 14.0538C17.1481 14.4894 16.7588 15.0222 16.5023 15.6524C16.3557 16.0046 16.2824 16.505 16.2824 17.1537V27.5238Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiLinkedIn);
const Memo = memo(ForwardRef);
export default Memo;
