import React from 'react';
import MuiLink from './index';

export default {
  title: 'Core/Link',
  component: MuiLink,
  argTypes: {
    children: { control: { type: 'text' } },
    variant: {
      control: {
        type: 'select',
        options: [
          'body1',
          'body2',
          'button',
          'caption',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'inherit',
          'overline',
          'subtitle1',
          'subtitle2',
        ],
      },
    },
    align: {
      control: {
        type: 'select',
        default: 'inherit',
        options: ['center', 'inherit', 'justify', 'left', 'right'],
      },
    },
    underline: {
      control: {
        type: 'select',
        default: 'always',
        options: ['always', 'hover', 'none'],
      },
    },
  },
};

const Template = (args) => <MuiLink href="#" {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  controls: { include: ['variant', 'color', 'underline', 'align', 'children'] },
};
Basic.args = {
  color: '#264ae1',
  variant: 'inherit',
  align: 'inherit',
  underline: 'none',
  children: 'Link',
};

export const Underline = Template.bind({});
Underline.parameters = {
  controls: { include: ['variant', 'color', 'align', 'children', 'underline'] },
};
Underline.args = {
  color: '#264ae1',
  variant: 'inherit',
  align: 'inherit',
  underline: 'always',
  children: 'Underline',
};

export const Hover = Template.bind({});
Hover.parameters = {
  controls: { include: ['variant', 'color', 'underline', 'align', 'children'] },
};
Hover.args = {
  color: '#264ae1',
  variant: 'inherit',
  align: 'inherit',
  underline: 'hover',
  children: 'Hover',
};
