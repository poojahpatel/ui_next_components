import React from 'react';
import RadioGroupUi from './CheckboxGroup';

export default {
  title: 'Core/RadioGroup',
  component: RadioGroupUi,
  argTypes: {
    labelPlacement: { control: { type: 'select', options: ['bottom', 'end', 'start', 'top'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    disabled: { control: { type: 'boolean' } },
    disableTypography: { control: { type: 'boolean' } },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
  },
};

const Template = (args) => <RadioGroupUi {...args} />;

export const RadioGroup = Template.bind({});
RadioGroup.parameters = {
  controls: { include: ['labelPlacement', 'color', 'disabled', 'size', 'disableTypography'] },
};
RadioGroup.args = {
  labelPlacement: 'end',
  disabled: false,
  size: 'medium',
  color: 'primary',
};
