import React from 'react';
import { CheckboxProps } from '../../core/Checkbox';

export interface IOption extends Omit<CheckboxProps, 'label' | 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface CheckboxGroupProps {
  name?: string;
  options: Array<IOption>;
  size?: 'small' | 'medium' | 'large';
  value?: Array<string | number>;
  onChange?: (x: Array<string | number>) => void;
  direction?: 'row' | 'column';
  spacing?: string | number;
}
