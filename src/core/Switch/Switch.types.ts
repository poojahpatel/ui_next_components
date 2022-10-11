import React from 'react';
// eslint-disable-next-line import/named
import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
// eslint-disable-next-line import/named
import { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface SwitchProps extends MuiSwitchProps {
  label?: string | React.ReactNode;
  formControlLabelProps?: FormControlLabelProps;
}
