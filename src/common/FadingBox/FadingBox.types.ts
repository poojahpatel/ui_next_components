import React from 'react';
import { BoxProps } from '@mui/material/Box';

export interface FadingBoxProps extends BoxProps {
  scrollContainerProps?: BoxProps & { ref?: React.RefObject<HTMLInputElement> };
  header?: React.ReactNode;
  showTopSeparatorOnScroll?: boolean;
  headerContainerProps?: BoxProps;
  footer?: React.ReactNode;
  footerContainerProps?: BoxProps;
}
