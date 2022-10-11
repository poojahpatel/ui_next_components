/* REACT */
import React from 'react';

/* MUI */
import MuiOutlinedInput from '@mui/material/OutlinedInput';
import { Theme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

/* TYPES */
import { OutlinedInputProps } from './OutlinedInput.types';

const OutlinedInput: React.FC<OutlinedInputProps> = ({
  startAdornment,
  endAdornment,
  viewModeIsEnabled,
  disabled,
  label,
  placeholder,
  value,
  ...restProps
}) => (
  <MuiOutlinedInput
    startAdornment={startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>}
    endAdornment={endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
    disabled={viewModeIsEnabled || disabled}
    value={value}
    placeholder={viewModeIsEnabled ? '' : placeholder}
    // @ts-ignore
    sx={{
      pl: viewModeIsEnabled ? 0 : '10px',
      bgcolor: 'background.paper',
      '& .MuiOutlinedInput-notchedOutline': {
        border: viewModeIsEnabled && 'none',
      },
      '&.Mui-disabled': {
        background: viewModeIsEnabled && 'none !important',
        fontWeight: viewModeIsEnabled ? 500 : 400,
      },
      '& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
        WebkitTextFillColor: viewModeIsEnabled
          ? (theme: Theme) => `${theme.palette.grey[900]} !important`
          : (theme: Theme) => `${theme.palette.grey[400]} !important`,
      },
    }}
    {...restProps}
  />
);

export default OutlinedInput;
