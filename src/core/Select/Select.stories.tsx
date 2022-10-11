import React from 'react';
import SelectUi from './Select';

export default {
  title: 'Core/Select',
  component: SelectUi,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        default: 'outlined',
        options: ['filled', 'outlined', 'standard'],
      },
    },
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium'],
      },
    },
    disabled: { control: { type: 'boolean' } },
    multiple: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    native: { control: { type: 'boolean' } },
    autoWidth: { control: { type: 'boolean' } },
    displayEmpty: { control: { type: 'boolean' } },
    open: { control: { type: 'boolean' } },
    defaultOpen: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <SelectUi {...args} />;

export const Select = Template.bind({});
Select.args = {
  variant: 'outlined',
  size: 'medium',
  autoWidth: 'false',
  disabled: 'false',
  label: '',
  children: '',
};
