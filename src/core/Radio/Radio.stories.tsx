import React from 'react';
import RadioUi from './Radio';

export default {
  title: 'Core/Radio',
  component: RadioUi,
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info', 'warning'],
      },
    },
  },
};

const Template = (args) => <RadioUi {...args} />;

export const Radio = Template.bind({});
Radio.parameters = {
  controls: { include: ['checked', 'color', 'size', 'disabled', 'disableRipple', 'required'] },
};
Radio.args = {
  checked: false,
  color: 'primary',
  size: 'medium',
  disabled: false,
  disableRipple: false,
  required: false,
};

export const RadioChecked = Template.bind({});
RadioChecked.parameters = {
  controls: { include: ['checked', 'color', 'size', 'disabled', 'disableRipple', 'required'] },
};
RadioChecked.args = {
  checked: true,
  color: 'primary',
  size: 'medium',
  disabled: false,
  disableRipple: false,
  required: false,
};
