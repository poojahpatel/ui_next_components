import React from 'react';
import AccordianUi from './Accordian';

export default {
  title: 'Core/Accordian',
  component: AccordianUi,
  argTypes: {
    title: { control: { type: 'text', default: 'Some title' } },
    disabled: { control: { type: 'boolean' } },
    square: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
    variant: {
      control: {
        type: 'select',
        default: 'contained',
        options: ['contained', 'outlined', 'raw'],
      },
    },
  },
};

const Template = (args) => <AccordianUi {...args} />;
export const Accordian = Template.bind({});
Accordian.parameters = {
  controls: { include: ['variant', 'children', 'square', 'clickable', 'disabled', 'label'] },
};
Accordian.args = {
  title: 'Title',
  color: 'primary',
  disabled: false,
  square: false,
  variant: 'outlined',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
};
