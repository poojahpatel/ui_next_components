/* REACT */
import React from 'react';

/* MUI */
import MuiMenu from '@mui/material/Menu';

/* TYPES */
import { MenuProps, MenuItemProps } from './Menu.types';

/* LOCAL */
import MenuItem from './MenuItem';

const Menu: React.FC<MenuProps> = ({ items = [], menuItemProps = {}, ...restProps }) => {
  return (
    <MuiMenu {...restProps}>
      {items.map(({ href, ...restMenuItemProps }: MenuItemProps, index: number) => (
        <MenuItem key={`list-item-${index}`} {...menuItemProps} {...restMenuItemProps} />
      ))}
    </MuiMenu>
  );
};

export default Menu;
