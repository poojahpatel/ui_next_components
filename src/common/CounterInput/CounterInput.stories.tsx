import React from 'react';
import { IoAddCircleOutline, IoPersonOutline } from 'react-icons/io5';
import CounterInputUi from './CounterInput';

export default {
  title: 'Common/CounterInput',
  component: CounterInputUi,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    startAdornment: { control: { type: 'text' } },
    endAdornment: { control: { type: 'text' } },
    size: { control: { type: 'select', options: ['small', 'medium'] } },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
    },
    disabled: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
  },
};

const Template = (args) => <CounterInputUi {...args} />;

export const CounterInput = Template.bind({});
CounterInput.parameters = {
  controls: {
    include: ['placeholder', 'size', 'variant', 'color', 'disabled', 'fullWidth', 'required'],
  },
};
CounterInput.args = {
  size: 'small',
  variant: 'outlined',
  placeholder: 'First Name',
  disabled: false,
  fullWidth: false,
  color: 'secondary',
  required: false,
};

export const StartAdornment = Template.bind({});
StartAdornment.parameters = {
  controls: {
    include: ['placeholder', 'size', 'variant', 'color', 'fullWidth', 'disabled', 'required'],
  },
};
StartAdornment.args = {
  size: 'small',
  variant: 'outlined',
  placeholder: 'First Name',
  disabled: false,
  fullWidth: false,
  required: false,
  startAdornment: <IoPersonOutline />,
};

export const EndAdornment = Template.bind({});
EndAdornment.parameters = {
  controls: {
    include: ['placeholder', 'size', 'variant', 'color', 'fullWidth', 'disabled', 'required'],
  },
};
EndAdornment.args = {
  size: 'small',
  variant: 'outlined',
  placeholder: 'First Name',
  disabled: false,
  fullWidth: false,
  required: false,
  endAdornment: <IoAddCircleOutline />,
};

export const FullWidth = Template.bind({});
FullWidth.parameters = {
  controls: {
    include: ['placeholder', 'size', 'variant', 'color', 'fullWidth', 'disabled', 'required'],
  },
};
FullWidth.args = {
  size: 'small',
  variant: 'outlined',
  placeholder: 'First Name',
  disabled: false,
  fullWidth: true,
  required: false,
};
