// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiCalendarRefreshOutlined = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.0372 14.1448L11.3892 13.4506L10.7412 14.1448"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M16.0749 16.5824C15.5887 16.914 15.0038 17.1113 14.3709 17.1113C12.6909 17.1113 11.3291 15.7496 11.3291 14.0696C11.3291 13.866 11.3504 13.6669 11.3887 13.474"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M16.7041 14.0569L17.3521 14.7502L18.0001 14.0569"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.666 11.6196C13.1522 11.288 13.7371 11.0916 14.37 11.0916C16.05 11.0916 17.4118 12.4533 17.4118 14.1333C17.4118 14.3369 17.3905 14.5351 17.3513 14.7289"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M12.6665 2V3.77778"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M5.55566 2V3.77778"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M2 6.44446H16.2222"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M5.11133 9.11108H5.33355H5.55577"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M5.11133 12.6666H5.55577"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
        stroke="currentColor"
        d="M9.11133 9.11108H9.55577"
      />
      <path d="M15.4722 8.22225C15.4722 8.63646 15.808 8.97225 16.2222 8.97225C16.6364 8.97225 16.9722 8.63646 16.9722 8.22225H15.4722ZM8.22222 16.9722C8.63644 16.9722 8.97222 16.6365 8.97222 16.2222C8.97222 15.808 8.63644 15.4722 8.22222 15.4722V16.9722ZM13.7222 2.13892H4.5V3.63892H13.7222V2.13892ZM4.5 16.9722H8.22222V15.4722H4.5V16.9722ZM16.9722 8.22225V5.38892H15.4722V8.22225H16.9722ZM1.25 5.38892V13.7223H2.75V5.38892H1.25ZM4.5 15.4722C3.5335 15.4722 2.75 14.6887 2.75 13.7223H1.25C1.25 15.5172 2.70508 16.9722 4.5 16.9722V15.4722ZM4.5 2.13892C2.70507 2.13892 1.25 3.59399 1.25 5.38892H2.75C2.75 4.42242 3.5335 3.63892 4.5 3.63892V2.13892ZM13.7222 3.63892C14.6887 3.63892 15.4722 4.42242 15.4722 5.38892H16.9722C16.9722 3.59399 15.5171 2.13892 13.7222 2.13892V3.63892Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiCalendarRefreshOutlined);
const Memo = memo(ForwardRef);
export default Memo;
