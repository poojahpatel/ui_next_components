import React from 'react';
import { OutlinedInputProps } from '../../core/OutlinedInput';
import { TFontSizeVariant } from '../TextSizePicker';
import { ReactSelectProps, IOption } from '../ReactSelect';

export interface ColorProps {
  background?: string;
  font?: string;
}

export interface ValueProps {
  title?: string;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  fontSize?: TFontSizeVariant;
  href?: string;
  linkTarget?: '_blank' | 'popup';
  onClickContent?: string;
  icon?: string;
  colors?: ColorProps;
  disabled?: boolean;
}

export interface ConfigButtonProps {
  children?: React.ReactNode;
  onClick?: (x: unknown) => void;
  active?: boolean;
}

export type TTools = 'color' | 'bold' | 'underline' | 'italic' | 'fontSize' | 'link' | 'icon';

export interface ButtonConfigInputProps {
  value?: ValueProps;
  onChange?: (x: ValueProps) => void;
  inputProps?: OutlinedInputProps;
  selectProps?: ReactSelectProps;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  options?: Array<IOption>;
  hideTools?: Array<TTools>;
}
