import React from 'react';
import MuiTypography from './index';

export default {
  title: 'Core/Typography',
  component: MuiTypography,
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
    color: {
      control: {
        type: 'select',
        default: 'secondary',
        options: ['primary', 'secondary', 'success', 'info', 'error'],
      },
    },
    align: {
      control: {
        type: 'select',
        default: 'inherit',
        options: ['center', 'inherit', 'justify', 'left', 'right'],
      },
    },
    noWrap: { control: { type: 'boolean' } },
    gutterBottom: { control: { type: 'boolean' } },
    paragraph: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <MuiTypography {...args} />;

export const Header = Template.bind({});
Header.parameters = {
  controls: {
    include: ['variant', 'color', 'noWrap', 'align', 'children', 'gutterBottom', 'paragraph'],
  },
};
Header.args = {
  color: 'secondary',
  variant: 'h1',
  align: 'inherit',
  noWrap: false,
  children: 'Header',
};

export const Body = Template.bind({});
Body.parameters = {
  controls: {
    include: ['variant', 'color', 'noWrap', 'align', 'children', 'gutterBottom', 'paragraph'],
  },
};
Body.args = {
  color: 'secondary',
  variant: 'body1',
  align: 'inherit',
  noWrap: false,
  children:
    'Body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
};

export const Subtitles = Template.bind({});
Subtitles.parameters = {
  controls: {
    include: ['variant', 'color', 'noWrap', 'align', 'children', 'gutterBottom', 'paragraph'],
  },
};
Subtitles.args = {
  color: 'secondary',
  variant: 'subtitle1',
  align: 'inherit',
  noWrap: false,
  children: 'Subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export const Inherit = Template.bind({});
Inherit.parameters = {
  controls: {
    include: ['variant', 'color', 'noWrap', 'align', 'children', 'gutterBottom', 'paragraph'],
  },
};
Inherit.args = {
  color: 'secondary',
  variant: 'inherit',
  align: 'inherit',
  noWrap: false,
  children: 'Inherit',
};
