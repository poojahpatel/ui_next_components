/* REACT */
import React from 'react';

/* MUI */
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

/* CORE */
import OutlinedInput from '../../core/OutlinedInput';
import IconButton from '../../core/IconButton';

/* ICONS */
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

/* TYPES */
import { CounterInputProps } from './CounterInput.types';

const CounterInput: React.FC<CounterInputProps> = ({
  endAdornment,
  onChange,
  value = 0,
  stepSize = 1,
  max = 10,
  min = 0,
  ...restProps
}) => {
  const handleUp = React.useCallback(() => {
    const num = (parseFloat(value as string) + stepSize).toFixed(2);
    if (parseFloat(num) <= max) {
      onChange && onChange(parseFloat(num));
    }
  }, [value, stepSize]);

  const handleDown = React.useCallback(() => {
    const num = (parseFloat(value as string) - stepSize).toFixed(2);
    if (parseFloat(num) >= min) {
      onChange && onChange(parseFloat(num));
    }
  }, [value, stepSize, min, max]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const num = parseFloat(e.target.value).toFixed(2);
      if (e.target.value) {
        if (parseFloat(num) >= min && parseFloat(num) <= max) {
          onChange && onChange(parseFloat(num));
        }
      } else {
        onChange && onChange(parseFloat(num));
      }
    },
    [min, max]
  );

  return (
    <OutlinedInput
      {...restProps}
      value={value}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp') {
          handleUp();
        } else if (e.key === 'ArrowDown') {
          handleDown();
        }
      }}
      endAdornment={
        restProps?.disabled || restProps?.viewModeIsEnabled ? null : (
          <InputAdornment position="end" sx={{ ml: '2px' }}>
            <Box display="flex" flexDirection="column">
              <IconButton
                size="small"
                sx={{
                  padding: 0,
                  width: 10,
                  height: 10,
                  background: 'none',
                  border: 'none',
                  '&:hover': {
                    bgcolor: 'grey.400',
                  },
                  display: 'flex',
                }}
                onMouseDown={() => handleUp()}
              >
                <IoChevronUpOutline size={10} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  padding: 0,
                  width: 10,
                  height: 10,
                  background: 'none',
                  border: 'none',
                  '&:hover': {
                    bgcolor: 'grey.400',
                  },
                  display: 'flex',
                }}
                onMouseDown={() => handleDown()}
              >
                <IoChevronDownOutline size={10} />
              </IconButton>
            </Box>
          </InputAdornment>
        )
      }
    />
  );
};

export default CounterInput;
