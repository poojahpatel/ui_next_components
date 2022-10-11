import React from 'react';
import Box from '@mui/material/Box';
import MuiDivider from './index';

export default {
  title: 'Core/Divider',
  component: MuiDivider,
  argTypes: {
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    light: { control: { type: 'boolean' } },
    variant: {
      control: {
        type: 'select',
        options: ['fullWidth', 'inset', 'middle', 'string'],
      },
    },
  },
};

const Template = (args) => (
  <Box sx={{ height: 250 }}>
    <MuiDivider {...args} />
  </Box>
);

export const Horizontal = Template.bind({});
Horizontal.parameters = {
  controls: { include: ['variant', 'light', 'orientation'] },
};
Horizontal.args = {
  variant: 'fullWidth',
  orientation: 'horizontal',
  light: false,
};

export const Vertical = Template.bind({});
Vertical.parameters = {
  controls: { include: ['variant', 'light', 'orientation'] },
};
Vertical.args = {
  variant: 'middle',
  orientation: 'vertical',
  light: false,
};
