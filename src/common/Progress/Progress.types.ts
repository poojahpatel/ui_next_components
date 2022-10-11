import React from 'react';
import { CircularProgressProps } from '../../core/CircularProgress';
import { LinearProgressProps } from '../../core/LinearProgress';

type CircularProps = Omit<CircularProgressProps, 'classes' | 'variant'>;
type LinearProps = Omit<LinearProgressProps, 'classes' | 'variant'>;

export interface ProgressProps extends CircularProps, LinearProps {
  type?: 'linear' | 'circular';
  classes?: object;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
}
