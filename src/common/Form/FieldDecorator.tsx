/* REACT */
import React, { Suspense } from 'react';

/* MUI */
import Box from '../../core/Box';
import Typography from '../../core/Typography';

/* CORE */
const Switch = React.lazy(() => import('../../core/Switch'));

/* TYPES */
import { FieldDecoratorProps } from './Form.types';

const FieldDecorator: React.FC<FieldDecoratorProps> = (props) => {
  const {
    children,
    label,
    labelProps,
    optional,
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
    fieldWrapperProps,
    containerProps,
    labelWrapperProps,
    onToggleField,
    fieldIsDisabled,
  } = props;

  return (
    <Box
      className="form-field-decorator-container"
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      {...containerProps}
    >
      {/* LABEL WRAPPER */}
      {React.isValidElement(label)
        ? label
        : label && (
          <Box
            className="form-field-label-wrapper"
            display="flex"
            width="100%"
            justifyContent="space-between"
            {...labelWrapperProps}
          >
            <Typography className="field-label" variant="h5" mb="6px" color="grey.900" {...labelProps}>
              {label}
              {optional && (
                <Typography variant="inherit" component="span" color="grey.700">
                  {' '}
                    (Optional)
                </Typography>
              )}
            </Typography>
            {onToggleField && (
              <Suspense fallback="Loading...">
                <Switch checked={!fieldIsDisabled} onChange={onToggleField} />
              </Suspense>
            )}
          </Box>
        )}

      {/* FIELD WRAPPER */}
      <Box className="form-field-wrapper" display="flex" width="100%" alignItems="center" {...fieldWrapperProps}>
        {/* prepend the field */}
        {startAdornment && (
          <Box
            className="form-field-start_adornment"
            display="flex"
            flexDirection="column"
            mr="4px"
            overflow="hidden"
            {...startAdornmentWrapperProps}
          >
            {React.isValidElement(startAdornment) ? (
              startAdornment
            ) : (
              <Typography color="grey.700" variant="body1" {...startAdornmentProps}>
                {startAdornment}
              </Typography>
            )}
          </Box>
        )}
        <Box className="form-field-wrapper-secondary" display="flex" flex={1} flexDirection="column">
          {/* render above the field and below the label */}
          {topAdornment && (
            <Box
              className="form-field-top_adornment"
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

          {/* render the actual field */}
          {children}

          {/* render beneath the field */}
          {bottomAdornment && (
            <Box
              className="form-field-bottom_adornment"
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

        {/* append the field */}
        {endAdornment && (
          <Box
            className="form-field-end_adornment"
            display="flex"
            flexDirection="column"
            ml="4px"
            overflow="hidden"
            {...endAdornmentWrapperProps}
          >
            {React.isValidElement(endAdornment) ? (
              endAdornment
            ) : (
              <Typography color="grey.700" variant="body1" {...endAdornmentProps}>
                {endAdornment}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FieldDecorator;
