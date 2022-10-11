import React from 'react';
import FormLabelUi from './FormLabel';

export default {
  title: 'Core/FormLabel',
  component: FormLabelUi,
  argTypes: {
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: { control: { type: 'boolean' } },
    disableRipple: { control: { type: 'boolean' } },
    edge: {
      control: {
        type: 'select',
        default: 'false',
        options: ['end', 'start', 'false'],
      },
    },
  },
};

const Template = (args) => <FormLabelUi {...args} />;

export const FormLabel = Template.bind({});
FormLabel.parameters = {
  controls: { include: ['color', 'disabled', 'disableRipple', 'edge', 'size'] },
};
FormLabel.args = {
  color: 'primary',
};
