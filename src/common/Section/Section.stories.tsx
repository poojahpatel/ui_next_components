import React from 'react';
import SectionUi from './Section';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Section',
  component: SectionUi,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SectionUi {...args} />;

export const Section = Template.bind({});
