import React from 'react';
import MuiAvatar from './Avatar';

export default {
  title: 'Core/Avatar',
  component: MuiAvatar,
  argTypes: {
    gender: { control: { type: 'select', options: ['female', 'male'] } },
    title: { control: { type: 'text' } },
    summary: { control: { type: 'text' } },
    src: { control: { type: 'text' } },
    tooltip: { control: { type: 'boolean' } },
    tooltipProps: { control: { type: 'object' } },
    variant: { control: { type: 'select', options: ['circular', 'rounded', 'square'] } },
    size: {
      control: {
        type: 'select',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

const Template = (args) => <MuiAvatar {...args} />;

export const WithSourceUrl = Template.bind({});
WithSourceUrl.parameters = {
  controls: {
    include: ['gender', 'title', 'summary', 'src', 'variant', 'size', 'tooltip', 'tooltipProps'],
  },
};
WithSourceUrl.args = {
  src: 'https://cdn2.taygo.tech/account_1608350502103_mbubz6vl/media/image/media_1659525650303_085y25nk/resize/120x120/w_120.png',
  title: 'Esther Howard',
  summary: 'Loan Officer',
  variant: 'circular',
  size: 'medium',
};

export const Female = Template.bind({});
Female.parameters = {
  controls: {
    include: ['gender', 'title', 'summary', 'variant', 'src', 'size', 'tooltip', 'tooltipProps'],
  },
};
Female.args = {
  gender: 'female',
  title: 'Esther Howard',
  summary: 'Loan Officer',
  variant: 'circular',
  size: 'medium',
};

export const Male = Template.bind({});
Male.parameters = {
  controls: {
    include: ['gender', 'title', 'summary', 'src', 'size', 'variant', 'tooltip', 'tooltipProps'],
  },
};
Male.args = {
  gender: 'male',
  title: 'Robert Fox',
  summary: 'Call Center',
  size: 'medium',
  variant: 'circular',
};

export const WithTooltip = Template.bind({});
WithTooltip.parameters = {
  controls: {
    include: ['gender', 'title', 'summary', 'src', 'size', 'variant', 'tooltip', 'tooltipProps'],
  },
};
WithTooltip.args = {
  gender: 'male',
  title: 'Robert Fox',
  summary: 'Call Center',
  tooltip: true,
  size: 'medium',
  variant: 'circular',
};
