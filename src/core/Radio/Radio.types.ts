import React from 'react';
import { RadioProps as MuiRadioProps } from '@mui/material/Radio';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface RadioProps extends MuiRadioProps {
  label?: string | React.ReactNode;
  formControlLabelProps?: FormControlLabelProps;
}
