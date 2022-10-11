import React from 'react';
import ReactSelectUi from './ReactSelect';

export default {
  title: 'Common/ReactSelect',
  component: ReactSelectUi,
  argTypes: {
    width: { control: { type: 'number', default: 200 } },
    src: { control: { type: 'text' } },
  },
};

const Template = (args) => <ReactSelectUi {...args} />;

export const ReactSelect = Template.bind({});
ReactSelect.args = {
  src: 'https://images.unsplash.com/photo-1660463973069-9815c8d27e8f',
};
ReactSelect.parameters = { controls: { include: ['width', 'src'] } };
