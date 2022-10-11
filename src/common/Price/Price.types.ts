import { TypographyProps } from '@mui/material/Typography';
import { BoxProps } from '@mui/material/Box';

export type TCurrency = 'usd' | 'inr';

export interface PriceProps {
  containerProps?: BoxProps;
  price?: string;
  currency?: TCurrency;
  priceProps?: TypographyProps;
  currencyProps?: TypographyProps;
  priceContainerProps?: BoxProps;
  strikeThroughPrice?: string;
  strikeThroughPriceProps?: TypographyProps;
  strikeThroughPriceContainerProps?: BoxProps;
}
