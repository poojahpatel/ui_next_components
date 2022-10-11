import React from 'react';
import { BoxProps } from '@mui/material/Box';

export interface NotificationProps extends Omit<BoxProps, 'title'> {
  visible?: boolean;
  type: 'error' | 'success' | 'loading';
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDuration?: number;
  message?: string | React.ReactNode;
}
