import React from 'react';
import StatusMessageUi from './StatusMessage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/StatusMessage',
  component: StatusMessageUi,
  argTypes: {
    type: {
      control: { type: 'select', options: ['loading', 'success', 'error'] },
    },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StatusMessageUi {...args} />;

export const Loading = Template.bind({});
Loading.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Loading.args = {
  type: 'loading',
  title: 'Submitting the request',
  message: 'Saving is in progress...',
};

export const Success = Template.bind({});
Success.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Success.args = {
  type: 'success',
  title: 'Request submitted successfully',
  message: 'Your changes have been successfully saved!',
};

export const Error = Template.bind({});
Error.parameters = {
  controls: { include: ['visible', 'type', 'title', 'message'] },
};
Error.args = {
  type: 'error',
  title: 'Error submitting your request',
  message: 'Saving failed. Please try again or contact support.',
};
