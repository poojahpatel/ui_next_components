import React from 'react';
import MuiSkeleton from './index';

export default {
  title: 'Core/Skeleton',
  component: MuiSkeleton,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: {
      control: {
        type: 'select',
        options: ['circular', 'rectangular', 'rounded', 'text'],
      },
    },
    animation: {
      control: {
        type: 'select',
        options: ['pulse', 'wave', false],
      },
    },
    height: { control: { type: 'number' } },
    width: { control: { type: 'number' } },
  },
};

const Template = (args) => <MuiSkeleton {...args} />;

export const Circular = Template.bind({});
Circular.parameters = {
  controls: { include: ['variant', 'animation', 'color', 'height', 'width', 'children'] },
};
Circular.args = {
  variant: 'circular',
  animation: 'pulse',
  height: 100,
  width: 100,
  children: '',
  color: 'primary',
};

export const Rectangular = Template.bind({});
Rectangular.parameters = {
  controls: { include: ['variant', 'animation', 'height', 'width', 'children'] },
};
Rectangular.args = {
  variant: 'rectangular',
  animation: 'pulse',
  height: 100,
  width: 100,
  children: '',
};

export const Rounded = Template.bind({});
Rounded.parameters = {
  controls: { include: ['variant', 'animation', 'height', 'width', 'children'] },
};
Rounded.args = {
  variant: 'rounded',
  animation: 'pulse',
  height: 100,
  width: 100,
  children: '',
};

export const Text = Template.bind({});
Text.parameters = {
  controls: { include: ['variant', 'animation', 'height', 'width', 'children'] },
};
Text.args = {
  variant: 'text',
  animation: 'pulse',
  height: 100,
  width: 100,
  children: '',
};
