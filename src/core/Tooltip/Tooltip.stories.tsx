import React from 'react';
import MuiTooltip from './index';

export default {
  title: 'Core/Tooltip',
  component: MuiTooltip,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        default: 'top',
        options: ['top-end', 'top-start', 'top', 'bottom-end', 'bottom-start', 'bottom', 'left', 'right'],
      },
    },
    arrow: {
      control: { type: 'radio', default: true, options: [true, false] },
    },
    enterDelay: { control: { type: 'number' } },
    followCursor: { control: { type: 'boolean' } },
    open: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <MuiTooltip {...args}>
    <span>Tooltip</span>
  </MuiTooltip>
);

export const Tooltip = Template.bind({});
Tooltip.parameters = {
  controls: { include: ['placement', 'followCursor', 'open', 'enterDelay'] },
};
Tooltip.args = {
  placement: 'top',
  title: 'This is tooltip',
};
