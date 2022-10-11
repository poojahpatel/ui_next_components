import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import FadingBoxUi from './FadingBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/FadingBox',
  component: FadingBoxUi,
  argTypes: {
    height: { control: { type: 'number' } },
    children: { control: { type: 'text' } },
    header: { control: { type: 'text' } },
    showTopSeparatorOnScroll: { control: { type: 'boolean' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FadingBoxUi {...args} />;

export const WithoutHeader = Template.bind({});
WithoutHeader.parameters = { controls: { include: ['height', 'children'] } };
WithoutHeader.args = {
  height: '200px',
  children: `Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  `,
};

export const WithHeader = Template.bind({});
WithHeader.parameters = {
  controls: {
    include: ['height', 'children', 'header', 'showTopSeparatorOnScroll'],
  },
};
WithHeader.args = {
  height: '200px',
  header: (
    <Box display="flex" height="40px" alignItems="center">
      <Typography variant="h3">Header Title</Typography>
    </Box>
  ),
  showTopSeparatorOnScroll: true,
  children: `Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
  Lorem Ipsum has been the industry's standard 
  dummy text ever since the 1500s, 
  when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with 
  the release of Letraset sheets 
  containing Lorem Ipsum passages, 
  and more recently with desktop publishing 
  software like Aldus 
  PageMaker including versions of Lorem Ipsum.
  `,
};
