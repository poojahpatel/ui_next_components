import React from 'react';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';

export interface IOption {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  value: string;
}

interface IAutocompleteProps {
  options?: Array<IOption>;
  viewModeIsEnabled?: boolean;
}

export type AutocompleteProps = IAutocompleteProps & MuiAutocompleteProps<any, any, any, any>;
