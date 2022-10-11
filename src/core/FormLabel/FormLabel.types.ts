import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import React from 'react';

export interface FormLabelProps extends MuiTypographyProps {
  label?: string | React.ReactNode;
  optional?: boolean;
}
