import React from 'react';
import StackUi from './index';
import Paper from '@mui/material/Paper';

export default {
  title: 'Core/Stack',
  component: StackUi,
  argTypes: {
    spacing: { control: { type: 'number' } },
    direction: {
      control: {
        type: 'select',
        default: 'row',
        options: ['column-reverse', 'column', 'row-reverse', 'row'],
      },
    },
    justifyContent: {
      control: {
        type: 'select',
        default: 'elevation',
        options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        default: 'flex-start',
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      },
    },
  },
};

const Template = (args) => (
  <StackUi {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </StackUi>
);

export const Stack = Template.bind({});
Stack.parameters = {
  controls: { include: ['direction', 'justifyContent', 'alignItems', 'spacing'] },
};
Stack.args = {
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  spacing: 2,
};
