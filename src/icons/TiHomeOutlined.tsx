// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiHomeOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={87}
      height={94}
      fill="none"
      viewBox="0 0 87 94"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M14 48.8324C14 45.959 15.1243 43.1997 17.1324 41.1446L50.4966 7L81.978 41.079C83.9163 43.1772 84.9623 45.947 84.8949 48.8026L84.1273 81.3335C84.0005 86.7087 79.6067 91 74.2301 91H54.1783V69.3491C54.1783 64.0296 49.866 59.7173 44.5465 59.7173C39.227 59.7173 34.9147 64.0296 34.9147 69.3491V91H23.9C18.4324 91 14 86.5676 14 81.1V48.8324Z"
        clipRule="evenodd"
        fill="#DCEBFA"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.3}
        fill="none"
        stroke="#144676"
        d="M2 47.4358C2 44.5721 3.11675 41.8214 5.11291 39.7681L36.6293 7.34998C40.5348 3.33276 46.9928 3.35414 50.8716 7.39712L81.9377 39.7781C83.9028 41.8264 85 44.555 85 47.3935V82.1C85 87.5676 80.5676 92 75.1 92H52.5695V68.5678C52.5695 63.8624 48.7551 60.0479 44.0497 60.0479V60.0479C39.3443 60.0479 35.5298 63.8624 35.5298 68.5678V92H11.9C6.43239 92 2 87.5676 2 82.1V47.4358Z"
        clipRule="evenodd"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="#144676"
        d="M64 20.4048V16C64 12.6863 66.6863 10 70 10V10C73.3137 10 76 12.6863 76 16V33"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiHomeOutlined);
const Memo = memo(ForwardRef);
export default Memo;
