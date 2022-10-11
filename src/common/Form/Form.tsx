/* REACT */
import React from 'react';

/* MUI */
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* CORE COMPONENTS */
import Divider from '../../core/Divider';

/* TYPES */
import { FormProps, GridItemProps, FieldItemProps, FieldTypes } from './Form.types';

/* FORM COMPONENTS */
import FieldItemDecorator from './FieldItemDecorator';
import Field from './Field';

/* CORE */
import Switch from '../../core/Switch';
import { FormProvider } from 'react-hook-form';

const Form: React.FC<FormProps> = ({
  children,
  gridItems = [],
  gridItemsWrapperProps = {},
  onSubmit,
  formMethods,
  contextIsEnabled,
  viewModeIsEnabled,
  fieldSize = 'medium',
  columnSpacing,
  rowSpacing,
  height,
  headerProps,
  errors,
  ...restProps
}) => {
  const { title, summary, buttons = [], titleProps = {}, summaryProps = {}, ...restHeaderProps } = headerProps || {};

  const { control, handleSubmit, formState, setValue } = formMethods;

  const { errors: formStateErrors } = formState || {};

  const FormComponent = (
    <Box
      component={onSubmit ? 'form' : 'div'}
      onSubmit={onSubmit ? handleSubmit(onSubmit) : () => {}}
      height={height}
      showTopSeparatorOnScroll
      {...restProps}
    >
      <Grid container className="form-grid-container" {...gridItemsWrapperProps}>
        {/* render list of grid items */}
        {gridItems.map((gridItemProps: GridItemProps, index: number) => {
          if (!gridItemProps) {
            return;
          }
          const {
            title,
            titleContainerProps,
            titleProps = {},
            fieldsWrapperProps = {},
            fieldItemsList = [],
            hideDivider,
            onToggleFieldItems,
            hideFieldItems,
            ...restGridItemProps
          } = gridItemProps || {};

          return (
            <Grid key={`grid-item-${index}`} className="form-grid-item" item xs={12} {...restGridItemProps}>
              {/* wrap form fields inside a container */}
              <Grid
                className="form-fields-wrapper-container"
                container
                columnSpacing={columnSpacing}
                rowSpacing={rowSpacing}
                {...fieldsWrapperProps}
              >
                {/* grid item title */}
                {title && (
                  <Grid item xs={12} className="form-grid-item-title" mb="2px" {...titleContainerProps}>
                    <Box display="flex" width="100%" alignItems="center">
                      <Box display="flex" flex={1}>
                        {React.isValidElement(title) ? (
                          title
                        ) : (
                          <Typography variant="h3" color="grey.900" {...titleProps}>
                            {title}
                          </Typography>
                        )}
                      </Box>

                      {onToggleFieldItems && <Switch checked={!hideFieldItems} onChange={onToggleFieldItems} />}
                    </Box>
                  </Grid>
                )}

                {/* render list of form fields */}
                {!hideFieldItems &&
                  fieldItemsList.map(
                    (
                      fieldItemsProps: FieldItemProps<FieldTypes> | undefined,
                      index: number
                    ) => {
                      const {
                        fieldType,
                        fieldArrayItems,
                        fieldRules,
                        fieldProps = {},
                        isDraggable,
                        onDragEnd,
                        appendLabelWithOptional,
                        fieldDecoratorProps = {},
                        fieldItemDecoratorProps = {},
                        onToggleField,
                        renderComponent,
                        ...restFieldGridItemProps
                      } = fieldItemsProps || {};

                      return (
                        <Grid
                          key={`field-item-${index}`}
                          item
                          xs={12}
                          className="field-grid-item"
                          {...restFieldGridItemProps}
                        >
                          <FieldItemDecorator {...fieldItemDecoratorProps}>
                            {fieldType === 'component' ? (
                              renderComponent
                            ) : (
                              <Field
                                fieldType={fieldType}
                                fieldProps={{
                                  size: fieldSize,
                                  ...fieldProps,
                                }}
                                control={control}
                                fieldRules={fieldRules}
                                fieldArrayItems={fieldArrayItems}
                                renderComponent={renderComponent}
                                isDraggable={isDraggable}
                                onDragEnd={onDragEnd}
                                viewModeIsEnabled={viewModeIsEnabled}
                                appendLabelWithOptional={appendLabelWithOptional}
                                fieldDecoratorProps={fieldDecoratorProps}
                                fieldErrors={errors || formStateErrors}
                                onToggleField={onToggleField}
                              />
                            )}
                          </FieldItemDecorator>
                        </Grid>
                      );
                    }
                  )}

                {/* divider */}
                {!hideDivider && (
                  <Grid item xs={12}>
                    <Divider sx={{ mt: '2px', mb: '24px' }} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return contextIsEnabled ? <FormProvider {...formMethods}>{FormComponent}</FormProvider> : FormComponent;
};

export default Form;
