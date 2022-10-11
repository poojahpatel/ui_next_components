/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* TYPES */
import { FieldDecoratorProps } from './Form.types';

const FieldItemDecorator: React.FC<FieldDecoratorProps> = (props) => {
  const {
    children,
    startAdornment,
    endAdornment,
    topAdornment,
    bottomAdornment,
    startAdornmentProps,
    endAdornmentProps,
    topAdornmentProps,
    bottomAdornmentProps,
    startAdornmentWrapperProps,
    endAdornmentWrapperProps,
    topAdornmentWrapperProps,
    bottomAdornmentWrapperProps,
    containerProps,
  } = props;

  return (
    <Box
      className="field-item-decorator-container"
      display="flex"
      width="100%"
      alignItems="flex-end"
      {...containerProps}
    >
      {/* prepend the field item */}
      {startAdornment && (
        <Box
          className="field-item-start_adornment"
          display="flex"
          flexDirection="column"
          mr="10px"
          {...startAdornmentWrapperProps}
        >
          {React.isValidElement(startAdornment) ? (
            startAdornment
          ) : (
            <Typography mb="5px" color="grey.700" variant="body1" {...startAdornmentProps}>
              {startAdornment}
            </Typography>
          )}
        </Box>
      )}

      <Box className="field-item-wrapper" display="flex" flex={1} flexDirection="column">
        {/* render above the field item */}
        {topAdornment && (
          <Box
            className="field-item-top_adornment"
            display="flex"
            flexDirection="column"
            mb="4px"
            {...topAdornmentWrapperProps}
          >
            {React.isValidElement(topAdornment) ? (
              topAdornment
            ) : (
              <Typography color="grey.700" variant="body1" {...topAdornmentProps}>
                {topAdornment}
              </Typography>
            )}
          </Box>
        )}

        {/* render the actual field item */}
        {children}

        {/* render beneath the field item */}
        {bottomAdornment && (
          <Box
            className="field-item-bottom_adornment"
            display="flex"
            flexDirection="column"
            mt="4px"
            {...bottomAdornmentWrapperProps}
          >
            {React.isValidElement(bottomAdornment) ? (
              bottomAdornment
            ) : (
              <Typography color="grey.700" variant="body1" {...bottomAdornmentProps}>
                {bottomAdornment}
              </Typography>
            )}
          </Box>
        )}
      </Box>

      {/* append the field item*/}
      {endAdornment && (
        <Box
          className="field-item-end_adornment"
          display="flex"
          flexDirection="column"
          ml="10px"
          {...endAdornmentWrapperProps}
        >
          {React.isValidElement(endAdornment) ? (
            endAdornment
          ) : (
            <Typography mb="5px" color="grey.700" variant="body1" {...endAdornmentProps}>
              {endAdornment}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FieldItemDecorator;
