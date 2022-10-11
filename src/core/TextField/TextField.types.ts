import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import React from 'react';

interface ITextFieldProps {
  viewModeIsEnabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export type TextFieldProps = ITextFieldProps & MuiTextFieldProps;
