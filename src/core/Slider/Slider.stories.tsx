import React from 'react';
import SliderUi from './Slider';

export default {
  title: 'Core/Slider',
  component: SliderUi,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        default: 'contained',
        options: ['contained', 'outlined', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium'],
      },
    },
    disabled: { control: { type: 'boolean' } },
    orientation: {
      control: {
        type: 'select',
        default: 'horizontal',
        options: ['horizontal', 'vertical'],
      },
    },
    mark: { control: { type: 'boolean' } },
    track: {
      control: { type: 'select', default: 'normal', options: ['inverted', 'normal', false] },
    },
    defaultValue: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    valueLabelDisplay: {
      control: { type: 'select', default: 'off', options: ['auto', 'off', 'on'] },
    },
  },
};

const Template = (args) => <SliderUi {...args} />;

export const ContinuousSlider = Template.bind({});
ContinuousSlider.parameters = {
  controls: {
    include: ['color', 'disabled', 'size', 'orientation', 'defaultValue', 'valueLabelDisplay'],
  },
};
ContinuousSlider.args = {
  color: 'primary',
  variant: 'contained',
  title: 'Primary',
  orientation: 'horizontal',
  defaultValue: 0,
  valueLabelDisplay: 'off',
};

export const DiscreteSlider = Template.bind({});
DiscreteSlider.parameters = {
  controls: {
    include: ['color', 'disabled', 'size', 'max', 'min', 'step', 'orientation', 'defaultValue', 'valueLabelDisplay'],
  },
};
DiscreteSlider.args = {
  color: 'primary',
  variant: 'contained',
  title: 'Primary',
  orientation: 'horizontal',
  defaultValue: 0,
  valueLabelDisplay: 'off',
  max: 100,
  min: 0,
  step: 10,
};

export const VerticalSlider = Template.bind({});
VerticalSlider.parameters = {
  controls: {
    include: ['color', 'disabled', 'size', 'max', 'min', 'step', 'orientation', 'defaultValue', 'valueLabelDisplay'],
  },
};
VerticalSlider.args = {
  color: 'primary',
  variant: 'contained',
  title: 'Primary',
  orientation: 'vertical',
  defaultValue: 0,
  valueLabelDisplay: 'off',
  max: 100,
  min: 0,
  step: 10,
};
