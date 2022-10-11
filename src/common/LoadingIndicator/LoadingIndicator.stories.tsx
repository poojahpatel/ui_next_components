import React from 'react';
import LoadingIndicatorUi from './LoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/LoadingIndicator',
  component: LoadingIndicatorUi,
  argTypes: {
    size: { control: { type: 'number', default: 50 } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LoadingIndicatorUi {...args} />;

export const LoadingIndicator = Template.bind({});
LoadingIndicator.parameters = { controls: { include: ['size'] } };
