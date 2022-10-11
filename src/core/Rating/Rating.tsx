/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiRating from '@mui/material/Rating';
import { Theme } from '@mui/material/styles';

/* TYPES */
import { RatingProps } from './Rating.types';

const Rating: React.FC<RatingProps> = ({ containerProps, value, reviewCount, hideText, ...restProps }) => (
  <Box display="flex" {...containerProps}>
    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
      {!hideText && (
        <Typography color="error.main" variant="body1">
          {value}
        </Typography>
      )}

      <MuiRating
        size="small"
        readOnly
        value={value}
        precision={0.5}
        sx={{
          '& .MuiRating-iconEmpty': {
            color: containerProps?.color || undefined,
          },
          '& .MuiRating-icon': {
            color: (theme: Theme) => theme.palette.error.main,
          },
        }}
        {...restProps}
      />

      {reviewCount && (
        <Typography color="inherit" variant="body1">
          ({reviewCount})
        </Typography>
      )}
    </Stack>
  </Box>
);

export default Rating;
