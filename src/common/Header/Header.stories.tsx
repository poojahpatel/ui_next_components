import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import HeaderUi from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Header',
  component: HeaderUi,
  argTypes: {
    icon: { control: { type: 'text', disable: true } },
    title: { control: { type: 'text' } },
    summary: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderUi {...args} />;

export const Header = Template.bind({});
Header.parameters = { controls: { include: ['icon', 'title', 'summary'] } };
Header.args = {
  icon: <IoPersonCircleOutline size={40} />,
  title: 'Total Users',
  summary: '22',
};
