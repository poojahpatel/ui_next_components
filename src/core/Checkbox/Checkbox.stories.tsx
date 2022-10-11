import React from 'react';
import CheckboxUi from './Checkbox';

export default {
  title: 'Core/Checkbox',
  component: CheckboxUi,
  argTypes: {
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
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
    disabled: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    labelPlacement: {
      control: {
        type: 'select',
        options: ['bottom', 'end', 'start', 'top'],
      },
    },
  },
};

const Template = (args) => <CheckboxUi {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  controls: { include: ['size', 'color', 'disableRipple', 'defaultChecked', 'disabled'] },
};
Basic.args = {
  size: 'medium',
  color: 'primary',
  disabled: false,
  defaultChecked: false,
  disableRipple: false,
};

export const WithLabel = Template.bind({});
WithLabel.parameters = {
  controls: {
    include: ['size', 'color', 'disableRipple', 'label', 'labelPlacement', 'defaultChecked', 'disabled'],
  },
};
WithLabel.args = {
  size: 'medium',
  color: 'primary',
  disabled: false,
  defaultChecked: false,
  disableRipple: false,
  label: 'CheckBox',
  labelPlacement: 'end',
};
