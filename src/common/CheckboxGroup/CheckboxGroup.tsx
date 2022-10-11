/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* CORE COMPONENTS */
import Checkbox from '../../core/Checkbox';

/* TYPES */
import { CheckboxGroupProps, IOption } from './CheckboxGroup.types';

const RadioGroup: React.FC<CheckboxGroupProps> = ({ options = [], size, direction, spacing, onChange, value = [] }) => {
  const [localValue, setLocalValue] = React.useState<Array<string | number>>([]);

  // React.useEffect(() => {
  //   setLocalValue(value)
  // },[])

  React.useEffect(() => {
    console.log('localValue', localValue);
    if (onChange) {
      onChange(localValue);
    }
  }, [localValue]);

  const handleChange = (value: string | number, remove?: boolean) => {
    const tempValue = [...localValue];
    if (tempValue.includes(value) && remove) {
      const index = tempValue.indexOf(value);
      if (index !== -1) {
        tempValue.splice(index, 1);
      }
    } else {
      tempValue.push(value);
    }

    setLocalValue(tempValue);
  };

  return (
    <Box display="flex" flexDirection={direction || 'column'} gap={spacing || 0}>
      {options.map(({ value, ...checkboxProps }: IOption, index: number) => (
        <Checkbox
          key={`checkbox-group-form-control-${index}`}
          size={size}
          onChange={(e, checked) => handleChange(value as string | number, !checked)}
          {...checkboxProps}
        />
      ))}
    </Box>
  );
};

export default RadioGroup;
