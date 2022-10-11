import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import ListUi from './List';

export default {
  title: 'Core/List',
  component: ListUi,
  argTypes: {
    items: { control: { type: 'array' } },
    title: { control: { type: 'text' } },
    subheader: { control: { type: 'text' } },
    alignItems: { control: { type: 'select', options: ['center', 'flex-start', 'flex-end'] } },
    divider: { control: { type: 'boolean' } },
    dense: { control: { type: 'boolean' } },
    disablePadding: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <ListUi {...args} />;

export const List = Template.bind({});
List.parameters = {
  controls: { include: ['title', 'items', 'dense', 'disablePadding', 'alignItems', 'divider'] },
};
List.args = {
  title: 'List Title',
  subheader: '',
  alignItems: 'center',
  divider: false,
  dense: false,
  disablePadding: false,
  items: [
    {
      label: 'List item 1',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'List item 2',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'List item 3',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'List item 4',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'List item 5',
      icon: <IoPersonCircleOutline />,
    },
  ],
};
