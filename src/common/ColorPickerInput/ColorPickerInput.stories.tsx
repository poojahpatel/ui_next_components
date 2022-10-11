import React from 'react';
import { IoAddCircleOutline, IoPersonOutline } from 'react-icons/io5';
import ColorPickerInputUi from './ColorPickerInput';

export default {
  title: 'Common/ColorPickerInput',
  component: ColorPickerInputUi,
  argTypes: {},
};

const Template = (args) => <ColorPickerInputUi {...args} />;

export const ColorPickerInput = Template.bind({});
