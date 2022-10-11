import React from 'react';
import LoanCalculatorUi from './LoanCalculator';

export default {
  title: 'Modules/LoanCalculator',
  component: LoanCalculatorUi,
  argTypes: {
    width: { control: { type: 'number', default: 200 } },
    src: { control: { type: 'text' } },
  },
};

const Template = (args) => <LoanCalculatorUi {...args} />;

export const LoanCalculator = Template.bind({});
LoanCalculator.args = {};
