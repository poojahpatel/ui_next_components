import { TypographyProps } from '@mui/material/Typography';
import { GridProps } from '@mui/material/Grid';
import { BoxProps } from '@mui/material/Box';
import React, { ReactNode } from 'react';

/* CORE COMPONENTS TYPES */
import { OutlinedInputProps } from '../../core/OutlinedInput';
import { AutocompleteProps } from '../../core/Autocomplete';
import { SelectProps } from '../../core/Select';
import { CheckboxProps } from '../../core/Checkbox';
import { RadioProps } from '../../core/Radio';
import { RadioGroupProps } from '../../core/RadioGroup';
import { DatePickerProps } from '../../core/DatePicker';
import { TextareaAutosizeProps } from '../../core/TextareaAutosize';
import { StackProps } from '../../core/Stack';
import { DropResult } from 'react-beautiful-dnd';
import { ButtonProps } from '../../core/Button';
import { DialogProps } from '../../core/Dialog';
import { ModalProps } from '../../core/Modal';

/* COMMON COMPONENTS TYPES */
import { CheckboxGroupProps } from '../CheckboxGroup';
import { CounterInputProps } from '../CounterInput';
import { WeekDaySelecterProps } from '../WeekDaySelecter';
import { MaskedInputProps } from '../MaskedInput';
import { ColorPickerInputProps } from '../ColorPickerInput';
import { NotificationProps } from '../Notification';
import { StatusMessageProps } from '../StatusMessage';
import { ButtonConfigInputProps } from '../ButtonConfigInput';
import { ReactSelectProps } from '../ReactSelect';

/* REACT HOOK FORM */
import { RegisterOptions } from 'react-hook-form';

/* FIELD WRAPPER COMPONENT TYPES */
export interface FieldDecoratorProps {
  label?: string | React.ReactNode;
  labelProps?: TypographyProps;
  optional?: boolean;
  startAdornment?: string | React.ReactNode;
  startAdornmentProps?: TypographyProps;
  startAdornmentWrapperProps?: BoxProps;
  endAdornment?: string | React.ReactNode;
  endAdornmentProps?: TypographyProps;
  endAdornmentWrapperProps?: BoxProps;
  topAdornment?: string | React.ReactNode;
  topAdornmentProps?: TypographyProps;
  topAdornmentWrapperProps?: BoxProps;
  bottomAdornment?: string | React.ReactNode;
  bottomAdornmentProps?: TypographyProps;
  bottomAdornmentWrapperProps?: BoxProps;
  fieldWrapperProps?: BoxProps;
  containerProps?: BoxProps;
  labelWrapperProps?: BoxProps;
  onToggleField?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  fieldIsDisabled?: boolean;
  children?: any;
}

/* FIELD ITEM WRAPPER COMPONENT TYPES */
export interface FieldItemDecoratorProps {
  startAdornment?: string | React.ReactNode;
  startAdornmentProps?: TypographyProps;
  startAdornmentWrapperProps?: BoxProps;
  endAdornment?: string | React.ReactNode;
  endAdornmentProps?: TypographyProps;
  endAdornmentWrapperProps?: BoxProps;
  topAdornment?: string | React.ReactNode;
  topAdornmentProps?: TypographyProps;
  topAdornmentWrapperProps?: BoxProps;
  bottomAdornment?: string | React.ReactNode;
  bottomAdornmentProps?: TypographyProps;
  bottomAdornmentWrapperProps?: BoxProps;
  containerProps?: BoxProps;
}

export type { DropResult as FieldItemDropResult };

export type FieldTypes =
  | 'text'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'radio_group'
  | 'checkbox_group'
  | 'week_day_selecter'
  | 'array'
  | 'component'
  | 'date'
  | 'counter'
  | 'mask'
  | 'color'
  | 'autocomplete'
  | 'button_config'
  | 'textarea'
  | 'react_select';

export type ParameterMap = {
  text: OutlinedInputProps;
  select: SelectProps;
  checkbox: CheckboxProps;
  radio: RadioProps;
  radio_group: RadioGroupProps;
  checkbox_group: CheckboxGroupProps;
  week_day_selecter: WeekDaySelecterProps;
  array: any;
  component: any;
  date: DatePickerProps;
  counter: CounterInputProps;
  mask: MaskedInputProps;
  color: ColorPickerInputProps;
  autocomplete: AutocompleteProps;
  button_config: ButtonConfigInputProps;
  textarea: TextareaAutosizeProps;
  react_select: ReactSelectProps;
};

export type ObjectType = keyof ParameterMap;

export interface FieldItemProps<T extends ObjectType> extends GridProps {
  fieldType?: T;
  fieldProps?: ParameterMap[T];
  fieldRules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  renderComponent?: React.ReactNode | ((value: any, index: number, array: any[]) => void) | null;
  control?: any;
  fieldArrayItems?: Array<any>;
  fieldIsComponent?: boolean;
  isDraggable?: boolean; // works only field items when fieldType = array
  onDragEnd?: (result: Partial<DropResult>) => void;
  viewModeIsEnabled?: boolean;
  appendLabelWithOptional?: boolean;
  fieldDecoratorProps?: FieldDecoratorProps;
  fieldItemDecoratorProps?: FieldItemDecoratorProps;
  fieldErrors?: any;
  onToggleField?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  fieldIsDisabled?: boolean;
}

export interface GridItemProps extends Omit<GridProps, 'title'> {
  title?: string | React.ReactNode;
  titleProps?: TypographyProps;
  titleContainerProps?: GridProps;
  fieldsWrapperProps?: GridProps;
  fieldItemsList: Array<FieldItemProps<FieldTypes> | undefined>;
  hideDivider?: boolean;
  onToggleFieldItems?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  hideFieldItems?: boolean;
}

export interface FormHeaderProps extends Omit<BoxProps, 'title'> {
  title?: string | ReactNode;
  summary?: string | ReactNode;
  buttons?: Array<ButtonProps>;
  titleProps?: TypographyProps;
  summaryProps?: TypographyProps;
}

export interface FormNotificationProps extends NotificationProps, StatusMessageProps {
  displayType?: 'drop_in' | 'dialog';
  dialogProps?: Partial<DialogProps>;
}

export interface FormProps extends BoxProps {
  children?: React.ReactNode;
  gridItemsWrapperProps?: GridProps;
  gridItems: Array<GridItemProps>;
  onSubmit?: () => void;
  formMethods: any;
  contextIsEnabled?: boolean;
  viewModeIsEnabled?: boolean;
  fieldSize?: 'small' | 'medium' | 'large';
  columnSpacing?: number | string;
  rowSpacing?: number | string;
  height?: number | string;
  headerProps?: FormHeaderProps;
  scrollContainerProps?: BoxProps & { ref?: React.RefObject<HTMLInputElement> };
  errors?: any;
}

export interface FormHeaderProps extends Omit<BoxProps, 'title'> {
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  summary?: string | React.ReactNode;
  buttons?: Array<ButtonProps>;
  titleProps?: TypographyProps;
  summaryProps?: TypographyProps;
  buttonsStackProps?: StackProps;
  notificationProps?: Partial<FormNotificationProps>;
  onClose?: ModalProps['onClose'];
}

export interface FormFooterProps extends Omit<BoxProps, 'title'> {
  title?: string | React.ReactNode;
  buttons?: Array<ButtonProps>;
  titleProps?: TypographyProps;
  onOkay?: () => void;
  onCancel?: () => void;
  canelButtonProps?: ButtonProps;
  okayButtonProps?: ButtonProps;
  buttonsStackProps?: StackProps;
}

export interface FormDialogProps extends Omit<DialogProps, 'title' | 'maxWidth'> {
  title?: string | React.ReactNode;
  headerProps?: FormHeaderProps;
  footerProps?: FormFooterProps;
  disablePadding?: boolean;
  formWrapperProps?: BoxProps & { ref?: React.RefObject<HTMLInputElement> };
  disableHeader?: boolean;
  disableFooter?: boolean;
  maxWidth?: string;
}
