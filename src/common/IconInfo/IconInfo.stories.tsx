import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import IconInfoUi from './IconInfo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/IconInfo',
  component: IconInfoUi,
  argTypes: {
    icon: { control: { type: 'text', disable: true } },
    title: { control: { type: 'text' } },
    summary: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconInfoUi {...args} />;

export const IconInfo = Template.bind({});
IconInfo.parameters = { controls: { include: ['icon', 'title', 'summary'] } };
IconInfo.args = {
  icon: <IoPersonCircleOutline size={40} />,
  title: 'Total Users',
  summary: '22',
};
