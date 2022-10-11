import React from 'react';
import NotificationUi from './Notification';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Notification',
  component: NotificationUi,
  argTypes: {
    visible: { control: { type: 'boolean' } },
    type: {
      control: { type: 'select', options: ['loading', 'success', 'error'] },
    },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NotificationUi {...args} />;

export const Loading = Template.bind({});
Loading.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Loading.args = {
  visible: true,
  type: 'loading',
};

export const Success = Template.bind({});
Success.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Success.args = {
  visible: true,
  type: 'success',
};

export const Error = Template.bind({});
Error.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Error.args = {
  visible: true,
  type: 'error',
};
