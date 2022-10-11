/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* TYPES */
import { FormLabelProps } from './FormLabel.types';

const FormLabel: React.FC<FormLabelProps> = (props) => {
  const { children, label, optional, ...restProps } = props;
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {label && (
        <Typography variant="h5" mb="6px" color="grey.900" {...restProps}>
          {label}
          {optional && (
            <Typography component="span" color="grey.700">
              {' '}
              (Optional)
            </Typography>
          )}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default FormLabel;
