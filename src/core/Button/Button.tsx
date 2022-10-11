/* REACT */
import React from 'react';

/* MUI */
import LoadingButton from '@mui/lab/LoadingButton';
import { Theme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

/* TYPES */
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ title, variant = 'contained', color = 'primary', sx = {}, ...restProps }) => (
  <LoadingButton
    variant={variant}
    disableElevation
    color={color}
    sx={{
      // keep the color intact but with opacity
      '&:disabled': {
        backgroundColor:
          variant === 'contained'
            ? // @ts-ignore:next-line
            sx?.backgroundColor
              ? // @ts-ignore:next-line
              sx.backgroundColor
              : (theme: Theme) => theme.palette?.[color]?.main
            : undefined,
        color: variant === 'contained' ? 'white' : undefined,
        opacity: 0.6,
      },
      // keep the width intact
      '&.MuiLoadingButton-loading': {
        color: 'transparent',
        '& .MuiButton-startIcon': {
          opacity: 0,
        },
      },
      ...sx,
    }}
    loadingIndicator={
      <CircularProgress
        sx={{
          color: variant === 'contained' ? 'white' : 'inherit',
        }}
        size={16}
      />
    }
    {...restProps}
  >
    {title}
  </LoadingButton>
);

export default Button;
