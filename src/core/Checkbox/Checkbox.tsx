/* REACT */
import React from 'react';

/* ICONS */
import { TiCheckboxOn, TiCheckboxOffOutlined } from '../../icons';

/* MUI */
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

/* TYPES */
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ formControlLabelProps, label, size = 'medium', ...restProps }) => {
  const getSize = {
    small: 24,
    medium: 28,
    large: 32,
  };
  const { sx: sxFormLabel, ...restFormControlLabelProps } = formControlLabelProps || {};
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          icon={<TiCheckboxOffOutlined sx={{ color: 'grey.500' }} fontSize={size} />}
          checkedIcon={<TiCheckboxOn sx={{ color: 'primary.main' }} fontSize={size} />}
          {...restProps}
        />
      }
      label={label}
      sx={{
        mr: 1.5,
        ...sxFormLabel,
      }}
      {...restFormControlLabelProps}
    />
  );
};

export default Checkbox;
