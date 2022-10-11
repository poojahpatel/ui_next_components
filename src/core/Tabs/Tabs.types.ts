import React from 'react';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { BoxProps } from '@mui/material/Box';

export interface ITabItem {
  label: string;
  value: string | number;
}

export interface TabsProps extends MuiTabsProps {
  children?: React.ReactNode;
  handleTabChange: (value: string | number) => void;
  tabBarProps?: BoxProps;
  containerProps?: BoxProps;
  tabPanelProps?: BoxProps;
  tabItems: Array<ITabItem>;
  activeTab: string | number;
}
