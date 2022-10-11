/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import MuiSlider from '@mui/material/Slider';

/* TYPES */
import { SliderProps } from './Slider.types';

function valuetext(value: number) {
  return `${value}°C`;
}

const Slider: React.FC<SliderProps> = ({ label, sx, ...restProps }) => (
  <MuiSlider
    getAriaValueText={valuetext}
    sx={{
      '& .MuiSlider-valueLabel': {
        bgcolor: 'secondary.main',
      },
      ...sx,
    }}
    {...restProps}
  />
);

export default Slider;
