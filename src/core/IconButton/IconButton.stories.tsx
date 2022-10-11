import React from 'react';
import IconButtonUi from './IconButton';

export default {
  title: 'Core/IconButton',
  component: IconButtonUi,
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

const Template = (args) => <IconButtonUi {...args} />;

export const IconButton = Template.bind({});
IconButton.parameters = {
  controls: { include: ['color', 'disabled', 'disableRipple', 'edge', 'size'] },
};
IconButton.args = {
  color: 'primary',
};
