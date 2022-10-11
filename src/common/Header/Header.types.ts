import React from 'react';
import { BoxProps } from '../../core/Box';
import { ButtonProps } from '../../core/Button';
import { TypographyProps } from '../../core/Typography';
import { StackProps } from '../../core/Stack';

export interface HeaderProps extends Omit<BoxProps, 'title'> {
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  summary?: string | React.ReactNode;
  buttons?: Array<ButtonProps>;
  titleProps?: TypographyProps;
  summaryProps?: TypographyProps;
  buttonsStackProps?: StackProps;
}
