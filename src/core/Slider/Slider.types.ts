import React from 'react';
import { SliderProps as MuiSliderProps } from '@mui/material/Slider';

export interface SliderProps extends MuiSliderProps {
  label?: string | React.ReactNode;
}
