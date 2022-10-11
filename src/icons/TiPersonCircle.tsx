// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPersonCircle = (props: SvgIconProps) => {
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
      <path
        fillRule="evenodd"
        d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM14.4049 7.81999H3.59516C3.46629 7.81999 3.34616 7.88506 3.27591 7.99287C3.16124 8.16882 3.21122 8.40422 3.38754 8.51864L6.18756 10.3357C6.33091 10.4287 6.39456 10.6057 6.34319 10.7685L5.24793 14.2387C5.19977 14.3913 5.24312 14.5579 5.35956 14.6678C5.5276 14.8265 5.79274 14.8192 5.95176 14.6515L8.72652 11.7256C8.73187 11.7199 8.73738 11.7144 8.74306 11.7091C8.89671 11.5658 9.1377 11.574 9.28133 11.7273L12.0221 14.6532C12.1312 14.7697 12.2974 14.814 12.4503 14.7675C12.6716 14.7002 12.7963 14.4666 12.7288 14.2457L11.6657 10.7661C11.6163 10.6043 11.6799 10.4295 11.8218 10.337L14.6131 8.51825C14.7208 8.44808 14.7857 8.32839 14.7857 8.20004C14.7857 7.99016 14.6152 7.81999 14.4049 7.81999ZM9 3.21429C8.03298 3.21429 7.24905 3.99817 7.24905 4.96519C7.24905 5.93221 8.03298 6.71618 9 6.71618C9.96702 6.71618 10.7509 5.93221 10.7509 4.96519C10.7509 3.99817 9.96702 3.21429 9 3.21429Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPersonCircle);
const Memo = memo(ForwardRef);
export default Memo;
