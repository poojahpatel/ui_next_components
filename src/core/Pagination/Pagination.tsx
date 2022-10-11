/* REACT */
import React from 'react';

/* MUI */
import MuiPagination from '@mui/material/Pagination';

/* TYPES */
import { PaginationProps } from './Pagination.types';

const Pagination: React.FC<PaginationProps> = (props) => <MuiPagination color="primary" {...props} />;

export default Pagination;
