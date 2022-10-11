/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* TYPES */
import { PhotoProps } from './Photo.types';

/* ASSETS */
import DefaultPhoto from '../../assets/placeholder.jpeg';

const Photo: React.FC<PhotoProps> = ({ src, sx, ...restProps }) => (
  <Box
    component="img"
    src={(src as string) || DefaultPhoto}
    maxWidth="100%"
    sx={{
      borderRadius: 2,
      ...sx,
    }}
    {...restProps}
  />
);

export default Photo;
