// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiThumbsUpAltOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={53}
      height={49}
      fill="none"
      viewBox="0 0 53 49"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M17.3987 41.2581L22.5012 43.6984C24.9415 45.0295 27.8255 45.695 30.7095 45.695H46.2387C48.679 45.695 50.6756 43.6984 50.6756 41.2581L52.894 23.5105C52.894 21.0702 50.8974 19.0735 48.4571 19.0735H37.3648V12.4182C37.3648 8.64679 36.6471 3.32337 33.3194 1.32676C30.7095 0.0217828 28.491 1.76957 28.491 3.54434V9.52178C28.491 11.3933 27.8349 13.2055 26.6368 14.6432L17.3987 25.7289V41.2581Z"
        clipRule="evenodd"
        fill="none"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M12.1788 42.5631L17.2813 45.0034C19.7216 46.3344 22.6056 47 25.4896 47H41.0188C43.4591 47 45.4557 45.0034 45.4557 42.5631L47.6741 24.8154C47.6741 22.3751 45.6775 20.3785 43.2372 20.3785H32.1449V13.7231C32.1449 9.95173 31.4272 4.6283 28.0995 2.63169C25.4896 1.32671 23.2711 3.0745 23.2711 4.84927V10.8267C23.2711 12.6982 22.615 14.5105 21.4169 15.9482L12.1788 27.0339"
      />
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        fill="none"
        stroke="currentColor"
        d="M2 22.6183C2 22.066 2.44772 21.6183 3 21.6183H11.1788C11.7311 21.6183 12.1788 22.066 12.1788 22.6183V46.0001C12.1788 46.5523 11.7311 47.0001 11.1788 47.0001H3C2.44772 47.0001 2 46.5523 2 46.0001L2 22.6183Z"
        clipRule="evenodd"
      />
      <circle cx={6.89366} cy={41.9796} r={1.95746} fill="none" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiThumbsUpAltOutlined);
const Memo = memo(ForwardRef);
export default Memo;
