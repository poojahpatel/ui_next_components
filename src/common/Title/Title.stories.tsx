import React from 'react';
import TitleUi from './Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Title',
  component: TitleUi,
  argTypes: {
    title: { control: { type: 'text' } },
    summary: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TitleUi {...args} />;

export const Title = Template.bind({});
Title.parameters = { controls: { include: ['title', 'summary'] } };
Title.args = {
  title: 'Neque porro quisquam est qui dolorem ipsum quia.',
  summary: `Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged.`,
};
