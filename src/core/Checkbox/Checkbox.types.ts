import React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
  label?: string | React.ReactNode;
  formControlLabelProps?: Partial<FormControlLabelProps>;
  size?: 'small' | 'medium' | 'large';
}
