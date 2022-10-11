import { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { BoxProps } from '@mui/material/Box';
import { LinkProps } from '@mui/material/Link';
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export interface MenuItemProps extends MuiMenuItemProps {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  active?: boolean;
}

export interface MenuProps extends MuiMenuProps {
  items: Array<MenuItemProps>;
  menuItemProps?: MenuItemProps;
}
