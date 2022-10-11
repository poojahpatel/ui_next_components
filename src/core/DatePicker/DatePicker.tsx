// React
import * as React from 'react';

// MUI-V5
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// ICONS
import { TiCalendarOutlined } from '../../icons';

// CORE
import OutlinedInput from '../OutlinedInput';

// Types
import { DatePickerProps } from './DatePicker.types';

// FC
const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { startAdornment, value, textFieldProps, ...restProps } = props;

  const [openPicker, setOpenPicker] = React.useState<boolean>(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={value || null}
        inputFormat={restProps?.viewModeIsEnabled ? 'MMM dd, yyyy' : 'MM-dd-yyyy'}
        disabled={restProps?.viewModeIsEnabled || restProps?.disabled}
        {...restProps}
        renderInput={(inputProps: any) => {
          return (
            <OutlinedInput
              startAdornment={<TiCalendarOutlined fontSize="inherit" />}
              onClick={restProps?.disabled || restProps?.viewModeIsEnabled ? () => {} : (e) => setOpenPicker(true)}
              {...inputProps}
              {...restProps}
            />
          );
        }}
        onOpen={() => setOpenPicker(true)}
        onClose={() => setOpenPicker(false)}
        open={openPicker}
        components={{
          OpenPickerIcon: () => null,
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
