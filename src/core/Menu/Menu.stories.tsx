import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import MenuUi from './Menu';

export default {
  title: 'Core/Menu',
  component: MenuUi,
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

const Template = (args) => <MenuUi {...args} />;

export const Menu = Template.bind({});
Menu.parameters = {
  controls: { include: ['title', 'items', 'dense', 'disablePadding', 'alignItems', 'divider'] },
};
Menu.args = {
  title: 'Menu Title',
  subheader: '',
  alignItems: 'center',
  divider: false,
  dense: false,
  disablePadding: false,
  items: [
    {
      label: 'Menu item 1',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'Menu item 2',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'Menu item 3',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'Menu item 4',
      icon: <IoPersonCircleOutline />,
    },
    {
      label: 'Menu item 5',
      icon: <IoPersonCircleOutline />,
    },
  ],
};
