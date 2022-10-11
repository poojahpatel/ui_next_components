import React from 'react';
import { BoxProps } from '@mui/material/Box';
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export interface DrawerHeaderProps extends Omit<BoxProps, 'title'> {
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  summary?: string | React.ReactNode;
}
export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  drawerWidth: number;
  drawerShrinkWidth?: number;
  children: React.ReactNode;
  contentProps?: BoxProps;
  drawerProps?: DrawerProps;
  headerProps?: DrawerHeaderProps;
  showHandle?: boolean;
}
