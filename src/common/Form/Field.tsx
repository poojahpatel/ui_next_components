/* REACT */
import React, { Attributes, Suspense } from 'react';

/* MUI */
import FormHelperText from '@mui/material/FormHelperText';

/* CORE COMPONENTS */
import Box from '../../core/Box';
// import OutlinedInput from '../../core/OutlinedInput';
// import SelectInput from '../../core/Select';
// import Checkbox from '../../core/Checkbox';
// import Radio from '../../core/Radio';
// import RadioGroup from '../../core/RadioGroup';
// import DatePicker from '../../core/DatePicker';
// import Autocomplete from '../../core/Autocomplete';
// import TextareaAutosize from '../../core/TextareaAutosize';

const OutlinedInput = React.lazy(() => import('../../core/OutlinedInput'));
const SelectInput = React.lazy(() => import('../../core/Select'));
const Checkbox = React.lazy(() => import('../../core/Checkbox'));
const Radio = React.lazy(() => import('../../core/Radio'));
const RadioGroup = React.lazy(() => import('../../core/RadioGroup'));
const DatePicker = React.lazy(() => import('../../core/DatePicker'));
const Autocomplete = React.lazy(() => import('../../core/Autocomplete'));
const TextareaAutosize = React.lazy(() => import('../../core/TextareaAutosize'));

/* COMMON COMPONENTS */
// import CheckboxGroup from '../CheckboxGroup';
// import WeekDaySelecter from '../WeekDaySelecter';
// import DraggableList from '../DraggableList';
// import CounterInput from '../CounterInput';
// import MaskedInput from '../MaskedInput';
// import ColorPickerInput from '../ColorPickerInput';
// import ButtonConfigInput from '../ButtonConfigInput';

const CheckboxGroup = React.lazy(() => import('../CheckboxGroup'));
const WeekDaySelecter = React.lazy(() => import('../WeekDaySelecter'));
const DraggableList = React.lazy(() => import('../DraggableList'));
const CounterInput = React.lazy(() => import('../CounterInput'));
const MaskedInput = React.lazy(() => import('../MaskedInput'));
const ColorPickerInput = React.lazy(() => import('../ColorPickerInput'));
const ButtonConfigInput = React.lazy(() => import('../ButtonConfigInput'));
const ReactSelect = React.lazy(() => import('../ReactSelect'));

/* FORM COMPONENTS */
import FieldDecorator from './FieldDecorator';

/* TYPES */
import { FieldItemProps, FieldTypes } from './Form.types';

/* REACT HOOK FORM */
import { Controller, Control } from 'react-hook-form';

const Field: React.FC<FieldItemProps<FieldTypes>> = ({
  fieldType = 'text',
  fieldProps = {},
  control,
  fieldRules = {},
  fieldArrayItems = [],
  renderComponent,
  isDraggable,
  onDragEnd = () => {},
  viewModeIsEnabled,
  appendLabelWithOptional,
  fieldDecoratorProps = {},
  fieldErrors = {},
  onToggleField,
}) => {
  const { name, label, disabled }: Record<string, any> = fieldProps;
  const { labelProps, ...restFieldDecoratorProps } = fieldDecoratorProps || {};
  const component: Record<FieldTypes, any> = {
    text: OutlinedInput,
    select: SelectInput,
    checkbox: Checkbox,
    radio: Radio,
    radio_group: RadioGroup,
    checkbox_group: CheckboxGroup,
    week_day_selecter: WeekDaySelecter,
    date: DatePicker,
    counter: CounterInput,
    mask: MaskedInput,
    color: ColorPickerInput,
    autocomplete: Autocomplete,
    button_config: ButtonConfigInput,
    textarea: TextareaAutosize,
    react_select: ReactSelect,
    array: null,
    component: null
  };

  return (
    <FieldDecorator
      label={label}
      labelProps={{
        variant: viewModeIsEnabled ? 'h6' : 'h5',
        textTransform: viewModeIsEnabled ? 'uppercase' : 'none',
        color: viewModeIsEnabled ? 'grey.500' : 'grey.900',
        ...labelProps,
      }}
      optional={appendLabelWithOptional}
      onToggleField={onToggleField}
      fieldIsDisabled={disabled}
      {...restFieldDecoratorProps}
    >
      <Controller
        name={name}
        control={control as Control}
        rules={{ ...fieldRules }}
        // @ts-ignore:next-line
        render={({ field }) => {
          const errorProps = {
            error: name && fieldErrors?.[name.substr(name.lastIndexOf('.') + 1)] ? true : false,
          };

          return fieldType === 'array' ? (
            isDraggable ? (
              <Suspense fallback="Loading...">
                <DraggableList
                  items={fieldArrayItems.map((field: any, index: number) => ({
                    id: field.id,
                    // @ts-ignore:next-line
                    content: renderComponent(field, index),
                  }))}
                  onDragEnd={onDragEnd}
                />
              </Suspense>
            ) : (
              fieldArrayItems.map(renderComponent as (value: any, index: number, array: any[]) => void)
            )
          ) : (
            <div>
              <Suspense fallback="Loading...">
                {React.createElement(component[fieldType], {
                  viewModeIsEnabled,
                  ...fieldProps,
                  ...field,
                  ...errorProps,
                } as Attributes)}
              </Suspense>
              {name && fieldErrors?.[name.substr(name.lastIndexOf('.') + 1)]?.message && (
                <FormHelperText sx={{ color: 'error.main', fontSize: '10px', position: 'absolute' }}>
                  {fieldErrors?.[name.substr(name.lastIndexOf('.') + 1)].message}
                </FormHelperText>
              )}
            </div>
          );
        }}
      />
    </FieldDecorator>
  );
};

export default Field;
