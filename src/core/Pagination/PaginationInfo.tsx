/* REACT */
import React from 'react';

/* MUI */
import Typography from '@mui/material/Typography';

/* TYPES */
import { PaginationInfoTextProps } from './Pagination.types';

const PaginationInfoText: React.FC<PaginationInfoTextProps> = ({ count, ...restProps }) => (
  <Typography variant="subtitle2" {...restProps}>
    Showing {count} total results
  </Typography>
);

export default PaginationInfoText;
