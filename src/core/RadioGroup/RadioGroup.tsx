/* REACT */
import React from 'react';

/* MUI */
import Radio from '../Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadioGroup from '@mui/material/RadioGroup';

/* TYPES */
import { RadioGroupProps, IOption } from './RadioGroup.types';

const RadioGroup: React.FC<RadioGroupProps> = ({ formControlLabelProps, options = [], size, ...restProps }) => {
  const { sx: sxFormLabel, ...restFormControlLabelProps } = formControlLabelProps || {};
  return (
    <MuiRadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" {...restProps}>
      {options.map(({ label, checked, ...restRadioProps }: IOption, index: number) => (
        <FormControlLabel
          control={<Radio size={size} {...restRadioProps} />}
          label={label}
          key={`radio-group-form-control-${index}`}
          sx={{
            '& .MuiFormControlLabel-root': {
              mr: 0,
              ml: 0,
            },
            ...sxFormLabel,
          }}
          {...restFormControlLabelProps}
        />
      ))}
    </MuiRadioGroup>
  );
};

export default RadioGroup;
