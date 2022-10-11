import React from 'react';
import TabsUi from './Tabs';

export default {
  title: 'Core/Tabs',
  component: TabsUi,
  argTypes: {
    children: { control: { type: 'text', default: 'some content' } },
    activeTab: { control: { type: 'text' } },
    textColor: { control: { type: 'select', options: ['inherit', 'primary', 'secondary'] } },
    scrollButtons: { control: { type: 'select', options: ['auto', false, true] } },
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    variant: { control: { type: 'select', options: ['fullWidth', 'standard', 'scrollable'] } },
    label: { control: { type: 'text' } },
    visibleScrollbar: { control: { type: 'boolean' } },
    centered: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <TabsUi {...args} />;

export const Tabs = Template.bind({});
Tabs.parameters = {
  controls: {
    include: ['children', 'visibleScrollbar', 'variant', 'disabled', 'textColor', 'orientation', 'centered', 'label'],
  },
};
Tabs.args = {
  disabled: false,
  children: 'some content',
};
