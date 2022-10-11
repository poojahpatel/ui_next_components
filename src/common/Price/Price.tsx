/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* TYPES */
import { PriceProps } from './Price.types';

/* CONSTANTS */
import { CURRENCIES } from './Price.constants';

const Price: React.FC<PriceProps> = ({
  containerProps = {},
  price,
  currency,
  priceProps = {},
  currencyProps = {},
  priceContainerProps = {},
  strikeThroughPrice,
  strikeThroughPriceProps = {},
  strikeThroughPriceContainerProps = {},
}) => {
  const { sx: strikeThroughPriceSx, ...restStrikeThroughPriceProps } = strikeThroughPriceProps;

  // get curreny symbol by currency code
  const getCurrencySymbol = (code: string) =>
    CURRENCIES.find((item) => item.abbreviation === code.toUpperCase())?.symbol;

  return (
    <Box display="flex" alignItems="flex-end" {...containerProps}>
      <Box display="flex" {...priceContainerProps}>
        <Typography variant="h4" {...priceProps}>
          <Typography
            component="span"
            variant="inherit"
            {...currencyProps}
            dangerouslySetInnerHTML={{
              __html: `${getCurrencySymbol((currency as string) || 'USD')}`,
            }}
          />
          {price}
        </Typography>
      </Box>
      {strikeThroughPrice && (
        <Box ml="3px" display="flex" {...strikeThroughPriceContainerProps}>
          <Typography
            variant="h5"
            color="grey.800"
            sx={{
              textDecoration: 'line-through',
              ...strikeThroughPriceSx,
            }}
            {...restStrikeThroughPriceProps}
          >
            <Typography
              component="span"
              color="grey.800"
              variant="inherit"
              dangerouslySetInnerHTML={{
                __html: `${getCurrencySymbol((currency as string) || 'USD')}`,
              }}
            />
            {strikeThroughPrice}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Price;
