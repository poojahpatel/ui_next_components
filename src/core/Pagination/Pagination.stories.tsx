import React from 'react';
import PaginationUi from './Pagination';

export default {
  title: 'Core/Pagination',
  component: PaginationUi,
  argTypes: {
    count: { control: { type: 'number' } },
    color: {
      control: {
        type: 'select',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'info'],
      },
    },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    shape: { control: { type: 'select', options: ['circular', 'rounded'] } },
    variant: { control: { type: 'select', options: ['outlined', 'text'] } },
    disabled: { control: { type: 'boolean' } },
    boundaryCount: { control: { type: 'number' } },
    siblingCount: { control: { type: 'number' } },
    defaultPage: { control: { type: 'number' } },
    hideNextButton: { control: { type: 'boolean' } },
    hidePrevButton: { control: { type: 'boolean' } },
    page: { control: { type: 'number' } },
  },
};

const Template = (args) => <PaginationUi {...args} />;

export const CircularPagination = Template.bind({});
CircularPagination.parameters = {
  controls: {
    include: ['count', 'variant', 'color', 'size', 'shape', 'disabled', 'boundaryCount', 'page'],
  },
};
CircularPagination.args = {
  count: 100,
  color: 'primary',
  size: 'medium',
  shape: 'circular',
  variant: 'text',
  disabled: false,
  boundaryCount: 1,
  page: '',
};

export const RoundedPagination = Template.bind({});
RoundedPagination.parameters = {
  controls: {
    include: ['count', 'variant', 'color', 'size', 'shape', 'disabled', 'boundaryCount'],
  },
};
RoundedPagination.args = {
  count: 100,
  color: 'primary',
  size: 'medium',
  shape: 'rounded',
  variant: 'text',
  disabled: false,
  boundaryCount: 1,
  page: '',
};
