import React from 'react';
import CardUi from './Card';

export default {
  title: 'Core/Card',
  component: CardUi,
  argTypes: {
    children: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    variant: { control: { type: 'select', options: ['outlined', 'elevation'] } },
    elevation: { control: { type: 'number' } },
    square: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <CardUi {...args} />;

export const Card = Template.bind({});
Card.args = {
  children: 'Content',
  title: 'Title',
  variant: 'outlined',
  elevation: 5,
  square: false,
};
