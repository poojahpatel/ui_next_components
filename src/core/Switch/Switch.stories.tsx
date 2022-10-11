import React from 'react';
import SwitchUi from './Switch';
import { IoHappy, IoSad } from 'react-icons/io5';

export default {
  title: 'Core/Switch',
  component: SwitchUi,
  argTypes: {
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
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
    edge: { control: { type: 'select', options: ['end', 'start', false] } },
    disableRipple: { control: { type: 'boolean' } },
    checkedIcon: { control: { type: 'boolean' } },
    icon: { control: { type: 'boolean' } },
    label: { control: { type: 'boolean' } },
    labelPlacement: { control: { type: 'select', options: ['end', 'start', 'bottom', 'top'] } },
  },
};

const Template = (args) => <SwitchUi {...args} />;

export const BasicSwitch = Template.bind({});
BasicSwitch.parameters = {
  controls: { include: ['color', 'disabled', 'edge', 'disableRipple', 'size'] },
};
BasicSwitch.args = {
  color: 'primary',
  size: 'meduim',
  disabled: false,
  edge: false,
};

export const WithLabel = Template.bind({});
WithLabel.parameters = {
  controls: { include: ['color', 'disabled', 'edge', 'labelPlacement', 'disableRipple', 'size'] },
};
WithLabel.args = {
  color: 'primary',
  size: 'meduim',
  disabled: false,
  edge: false,
  label: 'Label',
  labelPlacement: 'end',
};

export const WithIcon = Template.bind({});
WithIcon.parameters = {
  controls: { include: ['color', 'disabled', 'edge', 'disableRipple', 'size'] },
};
WithIcon.args = {
  color: 'primary',
  size: 'meduim',
  disabled: false,
  edge: false,
  icon: <IoSad size={20} />,
  checkedIcon: <IoHappy size={20} />,
};
