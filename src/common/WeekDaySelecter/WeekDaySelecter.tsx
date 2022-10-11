// React
import * as React from 'react';

// MuiV5
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Local
import Checkbox from '../../core/Checkbox';
import CheckboxGroup from '../CheckboxGroup';

// Constants
import { WeekDaySelecterProps } from './WeekDaySelecter.types';

export enum WEEK_DAYS {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
}

const FormWeekDaySelecterField: React.FC<WeekDaySelecterProps> = (props) => {
  const { label, value = [], onChange: setDays, ...default_props } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedDays = [...value];
    if (event.target.checked) {
      updatedDays.push(event.target.name as WEEK_DAYS);
    } else {
      const index = updatedDays.indexOf(event.target.name as WEEK_DAYS);
      if (index >= 0) {
        updatedDays.splice(index, 1);
      }
    }
    if (setDays) {
      setDays(updatedDays);
    }
  };

  const getIcon = (name: string, isDefault: boolean) => (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      width="28px"
      height="28px"
      bgcolor={isDefault ? 'grey.200' : 'primary.main'}
      color={isDefault ? 'grey.900' : 'common.white'}
      borderRadius="6px"
    >
      <Typography fontWeight={500} variant="body1" color="inherit">
        {name}
      </Typography>
    </Box>
  );

  return (
    <CheckboxGroup
      options={Object.keys(WEEK_DAYS).map((key) => ({
        name: key,
        checkedIcon: getIcon(key.charAt(0).toUpperCase(), false),
        icon: getIcon(key.charAt(0).toUpperCase(), true),
        sx: { p: 0 },
        value: key,
      }))}
      direction="row"
      spacing={0.5}
    />
  );
};

export default FormWeekDaySelecterField;
