import React from 'react';
import RatingUi from './Rating';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

export default {
  title: 'Core/Rating',
  component: RatingUi,
  argTypes: {
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    precision: { control: { type: 'number' } },
    readOnly: { control: { type: 'boolean' } },
    max: { control: { type: 'number' } },
    disabled: { control: { type: 'boolean' } },
    highlightSelectedOnly: { control: { type: 'boolean' } },
    value: { control: { type: 'number' } },
  },
};

const Template = (args) => <RatingUi {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  controls: {
    include: ['disabled', 'size', 'readOnly', 'max', 'precision', 'highlightSelectedOnly', 'value'],
  },
};
Basic.args = {
  disabled: false,
  size: 'medium',
  max: 5,
  precision: 1,
  readOnly: false,
  highlightSelectedOnly: false,
  value: '',
};

export const CustomIcon = Template.bind({});
CustomIcon.parameters = {
  controls: {
    include: ['disabled', 'size', 'readOnly', 'max', 'precision', 'highlightSelectedOnly', 'value'],
  },
};
CustomIcon.args = {
  disabled: false,
  size: 'medium',
  max: 5,
  precision: 1,
  readOnly: false,
  icon: <IoHeart />,
  emptyIcon: <IoHeartOutline />,
  highlightSelectedOnly: false,
  value: '',
};
