/* REACT */
import React from 'react';

/* MUI */
import Box from '../../core/Box';
import Typography from '../../core/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

/* ICONS */
import { FiChevronDown } from 'react-icons/fi';

/* TYPES */
import { ReactSelectProps, IOption } from './ReactSelect.types';

/* REACT SELECT */
import Select, { StylesConfig, GroupBase, components, OptionProps, SingleValueProps } from 'react-select';

const SIZE = {
  small: '30px',
  medium: '36px',
  large: '40px',
};
const ReactSelect: React.FC<ReactSelectProps> = ({
  styles = {},
  size,
  startAdornment,
  endAdornment,
  onChange,
  value,
  error,
  options = [],
  disabled,
  viewModeIsEnabled,
  placeholder,
  ...props
}) => {
  const theme = useTheme();
  const [localValue, setLocalValue] = React.useState<any>({});

  const handleChange = (val: IOption) => {
    onChange && onChange(val.value);
    const newValue = options.find((item: any) => item.value === val.value);
    console.log('newValue', newValue);
    setLocalValue(newValue);
  };

  React.useEffect(() => {
    if (value) {
      setLocalValue(options.find((item: any) => item.value === value));
    }
  }, [value]);

  const customStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
    container: (provided) => ({
      ...provided,
      width: '100%',
      ':focus': {
        border: 'none',
        borderLeftColor: '#000000',
        outline: 'none',
      },
      ...styles?.container,
    }),
    control: (provided, state) => ({
      ...provided,
      height: size ? SIZE[size] : '30px',
      minHeight: size ? SIZE[size] : '30px',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(14),
      background: viewModeIsEnabled ? 'none' : theme.palette.background.paper,
      borderWidth: viewModeIsEnabled ? '0px' : '1px',
      borderColor: error
        ? theme.palette.error.main
        : state.menuIsOpen
          ? theme.palette.primary.main
          : theme.palette.grey[400],
      ':hover': {
        borderColor: error
          ? theme.palette.error.main
          : state.menuIsOpen
            ? theme.palette.primary.main
            : theme.palette.grey[400],
      },
      ':focus': {
        borderColor: '#0099cc',
      },
      ...(theme?.components?.MuiSelect?.styleOverrides?.select as object),
      ...styles?.control,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: viewModeIsEnabled ? theme.palette.text.primary : 'inherit',
      fontWeight: viewModeIsEnabled ? 500 : 'normal',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...styles?.dropdownIndicator,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      height: size ? SIZE[size] : '30px',
      display: viewModeIsEnabled ? 'none' : 'block',
      ...styles?.dropdownIndicator,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      paddingRight: 0,
      ...styles?.valueContainer,
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: theme.typography.pxToRem(14),
      fontFamily: theme.typography.fontFamily,
      padding: '5px 6px',
      borderRadius: '8px',
      boxShadow: '0px -2px 8px -2px rgba(4, 4, 4, 0.06), 0px 6px 12px -2px rgba(4, 4, 4, 0.25)',
      ...styles?.menu,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: theme.typography.pxToRem(14),
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '1px',
      marginBottom: '1px',
      ...styles?.option,
    }),
  };

  return (
    <Select
      styles={customStyles as StylesConfig}
      onChange={handleChange}
      isDisabled={disabled}
      value={localValue}
      options={options}
      isSearchable={false}
      components={{
        // ValueContainer: ({ children, ...props }: ValueContainerProps) => (
        //   <components.ValueContainer {...props}>
        //     {startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>}
        //     {children}
        //   </components.ValueContainer>
        // ),
        SingleValue: ({ children, ...props }: SingleValueProps) => {
          const { icon } = (props?.data as IOption) || {};
          return (
            <components.SingleValue {...props}>
              {(startAdornment && !icon) ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null}
              {icon ? <InputAdornment position="start">{icon}</InputAdornment> : null}
              {children || <Typography color="grey.500">{placeholder}</Typography>}
            </components.SingleValue>
          );
        },
        Option: (props: OptionProps) => {
          const { icon, label, labelProps } = (props.data as IOption) || {};
          return (
            <components.Option {...props}>
              <Box component="span" display="flex" alignItems="center">
                <Box component="span" display="flex" alignItems="center">
                  {icon && (
                    <Box component="span" display="flex" pr="7px">
                      {icon}
                    </Box>
                  )}
                  <Box component="span" display="flex" flex={1}>
                    <Typography {...(labelProps || {})}>{label}</Typography>
                  </Box>
                </Box>
              </Box>
            </components.Option>
          );
        },
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <FiChevronDown />
          </components.DropdownIndicator>
        ),
        IndicatorSeparator: () => null,
      }}
      theme={(selectTheme) => ({
        ...selectTheme,
        borderRadius: 0,
        colors: {
          ...selectTheme.colors,
          primary: theme.palette.primary.light,
          primary75: theme.palette.primary.light,
          primary50: theme.palette.primary.light,
          primary25: theme.palette.grey[200],
          danger: theme.palette.error.main,
        },
      })}
      {...props}
      isMulti={false}
    />
  );
};

export default ReactSelect;
