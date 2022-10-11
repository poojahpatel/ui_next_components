import React from 'react';
import ButtonConfigInputUi from './ButtonConfigInput';

export default {
  title: 'Common/ButtonConfigInput',
  component: ButtonConfigInputUi,
  argTypes: {},
};

const Template = (args) => <ButtonConfigInputUi {...args} />;

export const ButtonConfigInput = Template.bind({});
