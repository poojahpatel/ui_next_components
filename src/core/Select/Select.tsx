/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiSelect from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Theme } from '@mui/material/styles';

/* CORE COMPONENTS */
import OutlinedInput from '../OutlinedInput';
import Checkbox from '../Checkbox';
import Chip from '../Chip';

/* ICONS */
import { TiSearchOutlined } from '../../icons';

/* TYPES */
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import { IOption, SelectProps } from './Select.types';
import { Typography } from '@mui/material';

const Select: React.FC<SelectProps> = ({
  options = [],
  sx = {},
  optionTextProps = {},
  viewModeIsEnabled,
  disabled,
  label,
  placeholder,
  startAdornment,
  size,
  searchIsEnabled,
  searchInputProps = {},
  multiple,
  value,
  ...restProps
}) => {
  const [openSelect, setOpenSelect] = React.useState<boolean>(false);
  const [localOptions, setLocalOptions] = React.useState<Array<IOption>>([]);

  React.useEffect(() => {
    setLocalOptions(options);
  }, [options, openSelect]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery && searchQuery !== '') {
      const opts = [...options].filter((item) => {
        const label = item.label as string;
        return label.toLowerCase().includes(searchQuery.toLowerCase());
      });
      console.log('opts', opts);
      setLocalOptions(opts);
    } else if (searchQuery === '') {
      setLocalOptions(options);
    }
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <FormControl fullWidth>
        <MuiSelect
          id="select-dropdown"
          size={size}
          disabled={viewModeIsEnabled || disabled}
          displayEmpty
          multiple={multiple}
          value={value}
          renderValue={
            !viewModeIsEnabled && (!value || value === '' || value.length === 0 || multiple)
              ? () => <Typography color="grey.500">{placeholder}</Typography>
              : undefined
          }
          startAdornment={startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>}
          sx={{
            bgcolor: 'background.paper',
            '& .MuiOutlinedInput-input': {
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
            },
            '&.Mui-disabled': viewModeIsEnabled ? {
              background: 'none !important',
              pl: viewModeIsEnabled ? 0 : '10px',
              pr: viewModeIsEnabled ? 0 : '10px',
            } : {
              pl: viewModeIsEnabled ? 0 : '10px',
              pr: viewModeIsEnabled ? 0 : '10px',
            },
            '& .MuiOutlinedInput-notchedOutline': viewModeIsEnabled ? {
              border: 'none',
            } : {},
            '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
              '& .MuiTypography-root': {
                fontWeight: viewModeIsEnabled ? 500 : 400,
              },
              WebkitTextFillColor: viewModeIsEnabled
                ? (theme: Theme) => `${theme.palette.grey[900]} !important`
                : (theme: Theme) => `${theme.palette.grey[400]} !important`,
            },
            ...sx,
          }}
          IconComponent={
            viewModeIsEnabled
              ? undefined
              : () => (
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    mr: 2,
                  }}
                >
                  {!openSelect ? <IoChevronDownOutline size={12} /> : <IoChevronUpOutline size={12} />}
                </Box>
              )
          }
          onOpen={() => setOpenSelect(true)}
          onClose={() => setOpenSelect(false)}
          {...restProps}
        >
          {searchIsEnabled && (
            <Box p="8px 6px" onKeyDown={(e) => e.stopPropagation()} display="flex" flexDirection="column">
              <OutlinedInput
                placeholder="Search"
                size={size}
                startAdornment={<TiSearchOutlined sx={{ fontSize: '18px' }} />}
                onChange={(e) => handleSearch(e.target.value)}
                {...searchInputProps}
              />
            </Box>
          )}

          {localOptions.map(({ label, value: optionValue, icon }: IOption, index: number) => (
            <MenuItem
              key={`select-core-component-option-${index}`}
              value={optionValue}
              sx={{
                flexDirection: 'row',
                display: 'flex',
              }}
            >
              {multiple && (
                <Checkbox
                  checked={value?.includes(optionValue)}
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
              )}
              {icon && <ListItemIcon sx={{ minWidth: '15px !important', mr: '6px' }}>{icon}</ListItemIcon>}
              <ListItemText
                sx={{
                  mt: 0,
                  mb: 0,
                }}
                {...optionTextProps}
              >
                {label}
              </ListItemText>
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>

      {Array.isArray(value) && multiple && value.length > 0 && (
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {value.map((chip) => {
            return (
              <Chip
                key={`select-chip-${chip}`}
                label={localOptions.find((item) => item.value === chip)?.label}
                onDelete={() => {}}
              />
            );
          })}
        </Box>
      )}
    </Box>

  // </Box>
  );
};

export default Select;
