import { ListProps as MuiListProps } from '@mui/material/List';
import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { BoxProps } from '@mui/material/Box';
import { LinkProps } from '@mui/material/Link';
import { TypographyProps } from '@mui/material/Typography';
import React from 'react';

export interface ListItemProps extends MuiListItemProps {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  button?: boolean;
  active?: boolean;
}

export interface ListProps extends MuiListProps {
  items: Array<ListItemProps>;
  containerProps?: BoxProps;
  title?: string;
  titleProps?: TypographyProps;
  listItemProps?: ListItemProps;
  disableUnderline?: boolean;
  linkProps?: LinkProps;
}
