import React from 'react';
import MuiBadge from './index';
import MailIcon from '@mui/icons-material/Mail';

export default {
  title: 'Core/Badge',
  component: MuiBadge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        default: 'dot',
        options: ['dot', 'standard'],
      },
    },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info', 'error'],
      },
    },
    max: { control: { type: 'number' } },
    invisible: { control: { type: 'boolean' } },
    badgeContent: { control: { type: 'text' } },
  },
};

const Template = (args) => (
  <MuiBadge badgeContent={111} color="primary" {...args}>
    <MailIcon color="success" />
  </MuiBadge>
);

export const Dot = Template.bind({});
Dot.parameters = { controls: { include: ['variant', 'color', 'invisible'] } };
Dot.args = {
  color: 'error',
  variant: 'dot',
  invisible: false,
};

export const Standard = Template.bind({});
Standard.parameters = { controls: { include: ['variant', 'max', 'color', 'invisible'] } };
Standard.args = {
  color: 'error',
  variant: 'standard',
  max: 99,
  invisible: false,
};

export const WithContent = Template.bind({});
WithContent.parameters = {
  controls: { include: ['variant', 'badgeContent', 'color', 'invisible'] },
};
WithContent.args = {
  color: 'error',
  variant: 'standard',
  invisible: false,
  badgeContent: 'A',
};
