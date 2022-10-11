import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import OutlinedInput from '../../core/OutlinedInput';
import Checkbox from '../Checkbox';
import { IOption } from './Autocomplete.types';
import Chip from '../Chip';
import { AutocompleteProps } from './Autocomplete.types';

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '100%',
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

const MuiAutocomple: React.FC<AutocompleteProps> = ({ value, options, size, multiple, onChange, ...restProps }) => {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: options,
    // @ts-ignore:next-line
    getOptionLabel: (option: IOption) => option.label,
    multiple: multiple,
    freeSolo: true,
    selectOnFocus: true,
    clearOnBlur: true,
    handleHomeEndKeys: true,
    onChange: (event: any, newValue: string | IOption | (string | IOption)[] | null) => {
      console.log('newValue', newValue);
      // @ts-ignore:next-line
      onChange(newValue);
    },
  });

  const [localOptions, setLocalOptions] = React.useState<Array<IOption>>([]);
  const [createValue, setCreateValue] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  const handleDelete = (id: string) => {
    const currentValue = [...value];
    const newValue = currentValue.filter((item) => item.value !== id);
    console.log('after delete', newValue);
    // @ts-ignore:next-line
    onChange(newValue);
  };

  return (
    <Box width="100%" position="relative" display="flex" flexDirection="column">
      <Box display="flex" width="100%" {...getRootProps()}>
        <OutlinedInput
          size={size}
          inputProps={{ ...getInputProps() }}
          value={value}
          onChange={(event) => {
            console.log('newValue', event.target.value);
            if (options?.find((item) => item.value === event.target.value || item.label === event.target.value)) {
              setCreateValue(undefined);
            } else {
              setCreateValue(event.target.value);
            }
          }}
        />
      </Box>
      {createValue || groupedOptions.length > 0 ? (
        // @ts-ignore:next-line
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          bgcolor="background.paper"
          position="absolute"
          sx={{
            boxShadow: (theme: Theme) => theme.shadows[1],
            borderRadius: '6px',
            zIndex: 999999,
            margin: 0,
            padding: 0,
            overflow: 'auto',
            top: '40px',
          }}
          {...getListboxProps()}
        >
          {createValue && (
            <MenuItem
              sx={{
                flexDirection: 'row',
                display: 'flex',
              }}
              onClick={() => {
                const addValue: IOption = {
                  label: createValue,
                  value: createValue,
                };
                setLocalOptions([...localOptions, addValue]);
                // @ts-ignore:next-line
                onChange([...value, addValue]);
                setCreateValue(undefined);
              }}
            >
              <ListItemText
                sx={{
                  mt: 0,
                  mb: 0,
                }}
              >
                {`Create "${createValue}"`}
              </ListItemText>
            </MenuItem>
          )}

          {(groupedOptions as typeof localOptions).map((option, index) => {
            const { icon, label, value: optionValue } = option || {};
            return (
              <MenuItem
                {...getOptionProps({ option, index })}
                key={`select-core-component-option-${index}`}
                sx={{
                  flexDirection: 'row',
                  display: 'flex',
                }}
              >
                <Checkbox
                  checked={value?.find((item: any) => item.value === optionValue) ? true : false}
                  size="small"
                  disableRipple
                  disableFocusRipple
                  formControlLabelProps={{
                    sx: {
                      mr: 0,
                      '& .MuiButtonBase-root': {
                        pt: 0,
                        pb: 0,
                      },
                    },
                  }}
                />

                {icon && <ListItemIcon sx={{ minWidth: '15px !important', mr: '6px' }}>{icon}</ListItemIcon>}
                <ListItemText
                  sx={{
                    mt: 0,
                    mb: 0,
                  }}
                >
                  {label}
                </ListItemText>
              </MenuItem>
            );
          })}
        </Box>
      ) : null}

      {Array.isArray(value) && multiple && value.length > 0 && (
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {value.map((chip: IOption) => {
            return (
              <Chip
                key={`select-chip-${chip?.value}`}
                label={localOptions.find((item) => item.value === chip?.value)?.label}
                onDelete={() => handleDelete(chip?.value)}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default MuiAutocomple;
