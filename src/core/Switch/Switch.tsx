/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiSwitch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

/* TYPES */
import { SwitchProps } from './Switch.types';

const SIZE = 16;
const IOSSwitch = styled((props: SwitchProps) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 28,
  height: SIZE,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: SIZE - 4,
    height: SIZE - 4,
  },
  '& .MuiSwitch-track': {
    borderRadius: SIZE / 2,
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Switch: React.FC<SwitchProps> = ({ formControlLabelProps, label, ...restProps }) => {
  const { sx, ...rest } = formControlLabelProps || {};
  return (
    <FormControlLabel
      control={<IOSSwitch label={label} {...restProps} />}
      label={label}
      sx={{
        mr: 0,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Switch;
