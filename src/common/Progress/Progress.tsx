/* REACT */
import React from 'react';

/* MUI */
import LinearProgress from '../../core/LinearProgress';
import CircularProgress from '../../core/CircularProgress';

/* TYPES */
import { ProgressProps } from './Progress.types';

const Progress: React.FC<ProgressProps> = ({ type = 'linear', ...rest }) => {
  if (type === 'circular') {
    const variant = rest.variant === 'determinate' ? 'determinate' : 'indeterminate';
    return <CircularProgress {...rest} variant={variant} />;
  }
  return <LinearProgress {...rest} />;
};

export default Progress;
