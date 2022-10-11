import React from 'react';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';

export interface ButtonProps extends Omit<LoadingButtonProps, 'title' | 'color'> {
  title: string | React.ReactNode;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning"
}
