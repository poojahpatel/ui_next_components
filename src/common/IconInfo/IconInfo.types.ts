import React from 'react';
import { BoxProps } from '@mui/material/Box';
import { TitleProps } from '../Title';

export interface IconInfoProps {
  containerProps?: BoxProps;
  icon: React.ReactNode;
  iconProps?: any;
  iconContainerProps?: BoxProps;
  contentContainerProps?: BoxProps;
  title?: string;
  summary?: string;
  titleComponentProps?: TitleProps;
}
