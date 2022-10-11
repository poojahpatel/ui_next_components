/* REACT */
import React from 'react';

/* MUI */
import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuItemProps } from './Menu.types';

/* TYPES */

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active, sx, ...restProps }) => (
  <MuiMenuItem
    color="inherit"
    sx={{
      bgcolor: active ? 'grey.200' : 'none',
      ...sx,
    }}
    {...restProps}
  >
    {icon && <ListItemIcon sx={{ minWidth: '20px' }}>{icon}</ListItemIcon>}
    <ListItemText
      sx={{
        '& .MuiListItemText-primary': {
          color: 'inherit',
        },
      }}
      primary={label}
    />
  </MuiMenuItem>
);

export default MenuItem;
