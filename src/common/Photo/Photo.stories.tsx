import React from 'react';
import PhotoUi from './Photo';

export default {
  title: 'Common/Photo',
  component: PhotoUi,
  argTypes: {
    width: { control: { type: 'number', default: 200 } },
    src: { control: { type: 'text' } },
  },
};

const Template = (args) => <PhotoUi {...args} />;

export const Photo = Template.bind({});
Photo.args = {
  src: 'https://images.unsplash.com/photo-1660463973069-9815c8d27e8f',
};
Photo.parameters = { controls: { include: ['width', 'src'] } };
