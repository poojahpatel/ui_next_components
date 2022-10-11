import { BoxProps } from '@mui/material/Box';
import { GridProps } from '@mui/material/Grid';
import { ContainerProps } from '@mui/material/Container';
import React from 'react';

import { TitleProps } from '../Title';

export interface SectionProps extends GridProps {
  children?: React.ReactNode;
  wrapperContainerProps?: ContainerProps;
  contentContainerProps?: BoxProps;
  titleComponentProps?: TitleProps;
}
