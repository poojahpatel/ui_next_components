/* REACT */
import React from 'react';

/* MUI */
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material';

/* TYPES */
import { LoadingIndicatorProps } from './LoadingIndicator.types';

/* ICONS */
import IconLoading from './assets/loading_indicator.svg';

const Spinner = styled((boxProps: BoxProps) => <Box src={IconLoading} component="img" {...boxProps} />)({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'spin 2s linear infinite',
  position: 'absolute',
});

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ size, children, ...restProps }) => (
  <Box
    display="flex"
    width={size || 40}
    height={size || 40}
    position="relative"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner width={size || 40} height={size || 40} {...restProps} />
    {children}
  </Box>
);

export default LoadingIndicator;
