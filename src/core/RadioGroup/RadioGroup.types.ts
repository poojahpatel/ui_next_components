import React from 'react';
import { RadioProps } from '@mui/material/Radio';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface IOption extends RadioProps {
  label: string;
}

export interface RadioGroupProps extends MuiRadioGroupProps {
  formControlLabelProps?: FormControlLabelProps;
  options: Array<IOption>;
  size?: 'small' | 'medium';
}
