import React from 'react';
import Button from './Button';
import { IoSend } from 'react-icons/io5';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        default: 'contained',
        options: ['contained', 'outlined', 'text'],
      },
    },
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
        options: ['small', 'medium', 'large'],
      },
    },
    loading: { control: { type: 'boolean' } },
    sx: { control: { type: 'object' } },
    disabled: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    href: { control: { type: 'string' } },
    startIcon: { control: { type: 'text' } },
    endIcon: { control: { type: 'text' } },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
Primary.args = {
  color: 'primary',
  variant: 'contained',
  title: 'Primary',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
PrimaryOutlined.args = {
  color: 'primary',
  variant: 'outlined',
  title: 'Primary',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
PrimaryLoading.args = {
  color: 'primary',
  variant: 'contained',
  title: 'Primary',
  loading: true,
};

export const Secondary = Template.bind({});
Secondary.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
  title: 'Secondary',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
SecondaryOutlined.args = {
  color: 'secondary',
  variant: 'outlined',
  title: 'Secondary',
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
SecondaryLoading.args = {
  color: 'secondary',
  variant: 'contained',
  title: 'Secondary',
  loading: true,
};

export const Custom = Template.bind({});
Custom.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'sx', 'fullWidth'] },
};
Custom.args = {
  sx: {
    backgroundColor: '#7f00ff',
  },
  variant: 'contained',
  title: 'Custom',
};

export const CustomLoading = Template.bind({});
CustomLoading.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'sx', 'fullWidth'] },
};
CustomLoading.args = {
  sx: {
    backgroundColor: '#7f00ff',
  },
  variant: 'contained',
  title: 'Custom',
  loading: true,
};

export const Error = Template.bind({});
Error.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
Error.args = {
  color: 'error',
  variant: 'contained',
  title: 'Button',
};

export const Success = Template.bind({});
Success.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
Success.args = {
  color: 'success',
  variant: 'contained',
  title: 'Button',
};

export const Warning = Template.bind({});
Warning.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
Warning.args = {
  color: 'warning',
  variant: 'contained',
  title: 'Button',
};

export const endIcon = Template.bind({});
endIcon.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
endIcon.args = {
  color: 'primary',
  variant: 'contained',
  title: 'SEND',
  size: 'large',
  endIcon: <IoSend />,
};

export const startIcon = Template.bind({});
startIcon.parameters = {
  controls: { include: ['variant', 'color', 'disabled', 'size', 'loading', 'fullWidth'] },
};
startIcon.args = {
  color: 'primary',
  variant: 'contained',
  title: 'SEND',
  size: 'large',
  startIcon: <IoSend />,
};
