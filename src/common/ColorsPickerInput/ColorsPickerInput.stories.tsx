import React from 'react';
import { IoAddCircleOutline, IoPersonOutline } from 'react-icons/io5';
import ColorsPickerInputUi from './ColorsPickerInput';

export default {
  title: 'Common/ColorsPickerInput',
  component: ColorsPickerInputUi,
  argTypes: {},
};

const Template = (args) => <ColorsPickerInputUi {...args} />;

export const ColorsPickerInput = Template.bind({});
