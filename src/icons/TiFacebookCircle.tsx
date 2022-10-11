// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiFacebookCircle = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={50}
      height={50}
      fill="none"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM10.4167 25C10.4167 16.9458 16.9458 10.4167 25 10.4167C33.0542 10.4167 39.5833 16.9458 39.5833 25C39.5833 32.482 33.9489 38.648 26.6916 39.4863V29.1079H29.679L30.123 25.6408H26.6916V23.4324C26.6916 22.432 26.9704 21.747 28.4062 21.747H30.2257V18.6559C29.3404 18.561 28.4506 18.5152 27.5603 18.5187C24.9197 18.5187 23.1068 20.1307 23.1068 23.0899V25.6343H20.1389V29.1014H23.1133V39.4624C15.9504 38.5371 10.4167 32.4148 10.4167 25Z" />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiFacebookCircle);
const Memo = memo(ForwardRef);
export default Memo;
