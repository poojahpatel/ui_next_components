import React from 'react';
import PriceUi from './Price';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Price',
  component: PriceUi,
  argTypes: {
    price: { control: { type: 'text' } },
    strikeThroughPrice: { control: { type: 'text' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PriceUi {...args} />;

export const Price = Template.bind({});
Price.parameters = { controls: { include: ['price', 'strikeThroughPrice'] } };

Price.args = {
  price: '199',
  strikeThroughPrice: '249',
};
