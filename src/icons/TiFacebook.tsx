// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFacebook = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={8}
      height={14}
      fill="none"
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M2.31831 13.0213L2.30018 7.10251H0V4.73501H2.30018V3.25532C2.30018 1.05863 3.62182 0 5.52569 0C6.43766 0 7.22145 0.0698828 7.44987 0.101122V2.39679L6.12944 2.39741C5.09401 2.39741 4.89352 2.90383 4.89352 3.64697V4.73501H7.90687L6.75678 7.10251H4.89352V13.0213H2.31831V13.0213Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFacebook);
const Memo = memo(ForwardRef);
export default Memo;
