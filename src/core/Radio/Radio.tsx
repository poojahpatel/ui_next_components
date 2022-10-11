/* REACT */
import React from 'react';

/* ICONS */
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

/* MUI */
import MuiRadio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

/* TYPES */
import { RadioProps } from './Radio.types';

const Radio: React.FC<RadioProps> = ({ formControlLabelProps, label, size = 'medium', ...restProps }) => {
  const getSize = {
    small: 24,
    medium: 28,
    large: 32,
  };

  return (
    <FormControlLabel
      control={
        <MuiRadio
          icon={<MdOutlineRadioButtonUnchecked fontSize={size} />}
          checkedIcon={<MdOutlineRadioButtonChecked fontSize={size} />}
          {...restProps}
        />
      }
      label={label}
      {...formControlLabelProps}
    />
  );
};

export default Radio;
