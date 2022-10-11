/* REACT */
import React from 'react';

/* MUI */
import MuiTextField from '@mui/material/TextField';
import { Theme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

/* TYPES */
import { TextFieldProps } from './TextField.types';

const TextField: React.FC<TextFieldProps> = ({
  startAdornment,
  endAdornment,
  viewModeIsEnabled,
  disabled,
  label,
  placeholder,
  value,
  ...restProps
}) => (
  <MuiTextField
    variant="outlined"
    disabled={viewModeIsEnabled || disabled}
    value={value}
    placeholder={viewModeIsEnabled ? '' : placeholder}
    InputProps={{
      startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
      endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
    }}
    // @ts-ignore
    sx={{
      '& .MuiTextField-notchedOutline': {
        border: viewModeIsEnabled && 'none',
        bgcolor: 'background.paper',
      },
      '&.Mui-disabled': {
        background: viewModeIsEnabled && 'none !important',
        fontWeight: viewModeIsEnabled ? 500 : 400,
      },
      '& .MuiInputBase-input.MuiTextField-input.Mui-disabled': {
        WebkitTextFillColor: viewModeIsEnabled
          ? (theme: Theme) => `${theme.palette.grey[900]} !important`
          : (theme: Theme) => `${theme.palette.grey[400]} !important`,
      },
    }}
    {...restProps}
  />
);
// TODO: Manish handle this typescript error

export default TextField;
