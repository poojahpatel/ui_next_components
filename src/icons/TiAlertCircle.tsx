// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiAlertCircle = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9.04795 8.64164C9.02786 9.33137 8.67965 9.73315 8.00331 9.73315C7.32028 9.73315 6.97876 9.33137 6.95867 8.64164L6.83144 4.47646C6.83144 4.42011 6.82958 4.36005 6.82783 4.30311C6.82624 4.25179 6.82474 4.203 6.82474 4.16173C6.82474 3.41842 7.2667 2.98315 8.01001 2.98315C8.74661 2.98315 9.18188 3.41842 9.18188 4.16173C9.18188 4.24878 9.17519 4.36932 9.16849 4.47646L9.04795 8.64164ZM9.26894 11.8157C9.26894 12.4921 8.69974 13.0211 8.00331 13.0211C7.30019 13.0211 6.73099 12.4921 6.73099 11.8157C6.73099 11.1461 7.30019 10.6171 8.00331 10.6171C8.69974 10.6171 9.26894 11.1461 9.26894 11.8157Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiAlertCircle);
const Memo = memo(ForwardRef);
export default Memo;
