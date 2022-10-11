import { ControlCamera } from '@mui/icons-material';
import React from 'react';
import ChipUi from './Autocomplete';
import { IoPerson } from 'react-icons/io5';

export default {
  title: 'Core/Chip',
  component: ChipUi,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        default: 'filled',
        options: ['filled', 'outlined'],
      },
    },
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
    clickable: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    Icon: { control: { type: 'text' } },
  },
};

const Template = (args) => <ChipUi {...args} />;

export const Chip = Template.bind({});
Chip.parameters = {
  controls: { include: ['variant', 'color', 'size', 'clickable', 'disabled', 'label'] },
};
Chip.args = {
  color: 'primary',
  label: 'Chip',
  variant: 'filled',
};

export const ChipWithIcon = Template.bind({});
ChipWithIcon.parameters = {
  controls: { include: ['variant', 'color', 'size', 'clickable', 'disabled', 'label'] },
};
ChipWithIcon.args = {
  color: 'primary',
  variant: 'filled',
  label: 'With Icon',
  icon: <IoPerson />,
};
