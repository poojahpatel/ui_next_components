import React from 'react';

import { CardProps as MuiCardProps } from '@mui/material/Card';
import { CardContentProps } from '@mui/material/CardContent';

export interface CardProps extends MuiCardProps {
  cardContentProps?: CardContentProps;
}
