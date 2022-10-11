/* REACT */
import React from 'react';

/* MUI */
import MuiListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemProps } from './List.types';

/* TYPES */

const ListItem: React.FC<ListItemProps> = ({ icon, sx, active, label, button, ...restProps }) => (
  <MuiListItem
    sx={{
      bgcolor: active ? 'grey.200' : 'none',
      color: 'inherit',
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
  </MuiListItem>
);

export default ListItem;
