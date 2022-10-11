import React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { ListItemTextProps } from '@mui/material/ListItemText';
import { OutlinedInputProps } from '../OutlinedInput';

export interface IOption {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  value: string;
}
export interface SelectProps extends Omit<MuiSelectProps, 'value'> {
  options?: Array<IOption>;
  optionTextProps?: ListItemTextProps;
  viewModeIsEnabled?: boolean;
  searchIsEnabled?: boolean;
  searchInputProps?: OutlinedInputProps;
  value?: string | Array<string>;
}
