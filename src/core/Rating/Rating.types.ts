import { RatingProps as MuiRatingProps } from '@mui/material/Rating';
import { BoxProps } from '@mui/material/Box';

export interface RatingProps extends MuiRatingProps {
  containerProps?: BoxProps;
  reviewCount?: number;
  hideText?: boolean;
}
