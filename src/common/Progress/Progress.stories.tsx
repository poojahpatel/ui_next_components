import React from 'react';
import ProgressUi from './Progress';

export default {
  title: 'Common/Progress',
  component: ProgressUi,
  argTypes: {
    type: {
      control: {
        type: 'select',
        default: 'linear',
        options: ['linear', 'circular'],
      },
    },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
    variant: {
      control: {
        type: 'select',
        default: '',
        options: ['buffer', 'determinate', 'indeterminate', 'query'],
      },
    },
    value: { control: { type: 'number' } },
    size: { control: { type: 'number' } },
    thickness: { control: { type: 'number' } },
    disableShrink: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <ProgressUi {...args} />;

export const InfiniteLinearProgress = Template.bind({});
InfiniteLinearProgress.parameters = {
  controls: {
    include: ['type', 'color', 'variant', 'value', 'size', 'thickness', 'disableShrink'],
  },
};

export const InfiniteCircularProgress = Template.bind({});
InfiniteCircularProgress.parameters = {
  controls: {
    include: ['type', 'color', 'variant', 'value', 'size', 'thickness', 'disableShrink'],
  },
};
InfiniteCircularProgress.args = {
  type: 'circular',
};

export const LinearProgress = Template.bind({});
LinearProgress.parameters = {
  controls: {
    include: ['type', 'color', 'variant', 'value', 'size', 'thickness', 'disableShrink'],
  },
};
LinearProgress.args = {
  variant: 'determinate',
  value: 25,
};

export const CircularProgress = Template.bind({});
CircularProgress.parameters = {
  controls: {
    include: ['type', 'color', 'variant', 'value', 'size', 'thickness', 'disableShrink'],
  },
};
CircularProgress.args = {
  variant: 'determinate',
  type: 'circular',
  value: 25,
};
