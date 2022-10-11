/* REACT */
import React from 'react';

/* MUI */
import MuiCard from '@mui/material/Card';
// eslint-disable-next-line import/named
import { Theme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/* TYPES */
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ title, children, cardContentProps = {}, sx = {}, ...restProps }) => {
  const { sx: cardContentPropsSx, ...restCardContentProps } = cardContentProps;
  return (
    <MuiCard
      sx={{
        width: '100%',
        border: (theme: Theme) => `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 2,
        '& .MuiCardContent-root:last-child': {
          pb: 2.5,
        },
        ...sx,
      }}
      {...restProps}
    >
      <Typography variant="h2" sx={{ p: 2.5 }}>
        {title}
      </Typography>
      <CardContent sx={{ p: 2.5, ...cardContentPropsSx }} {...restCardContentProps}>
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
