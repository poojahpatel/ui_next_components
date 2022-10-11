import React from 'react';
import MuiPaper from './index';

export default {
  title: 'Core/Paper',
  component: MuiPaper,
  argTypes: {
    children: { control: { type: 'text' } },
    elevation: { control: { type: 'number' } },
    square: { control: { type: 'boolean' } },
    variant: {
      control: {
        type: 'select',
        default: 'elevation',
        options: ['elevation', 'outlined'],
      },
    },
  },
};

const Template = (args) => <MuiPaper {...args} />;

export const Paper = Template.bind({});
Paper.parameters = {
  controls: { include: ['variant', 'square', 'elevation', 'children'] },
};
Paper.args = {
  variant: 'elevation',
  square: false,
  elevation: 1,
  children: '',
};
