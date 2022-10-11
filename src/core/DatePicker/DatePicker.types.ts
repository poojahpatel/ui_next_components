import * as React from 'react';
import { OutlinedInputProps } from '../OutlinedInput';
import { InputProps } from '@mui/material/Input';
import { DesktopDatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker';

export interface DatePickerProps extends MuiDatePickerProps<any, any> {
  name: string;
  label?: string;
  InputProps?: InputProps;
  value: string;
  defaultValue?: string;
  startAdornment: React.FC;
  size?: string;
  textFieldProps?: OutlinedInputProps;
  viewModeIsEnabled?: boolean;
}
