import React from 'react';
import FormDemoContactFields from './FormDemoContactFields';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Form',
  component: FormDemoContactFields,
  argTypes: {
    viewModeIsEnabled: { control: { type: 'boolean' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FormDemoContactFields {...args} />;

export const Form = Template.bind({});
