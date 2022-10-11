/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiList from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

/* TYPES */
import { ListProps, ListItemProps } from './List.types';

/* LOCAL */
import ListItem from './ListItem';

const List: React.FC<ListProps> = ({
  items = [],
  containerProps = {},
  title,
  titleProps = {},
  listItemProps = {},
  disableUnderline,
  linkProps = {},
  ...restProps
}) => {
  const { sx: linkSx, ...restLinkProps } = linkProps;

  const Item = ({ button, onClick, ...props }: ListItemProps) => {
    return button ? (
      <ListItemButton sx={{ py: 0 }} onClick={onClick as any} disableGutters disableRipple>
        <ListItem color="inherit" disablePadding {...props} />
      </ListItemButton>
    ) : (
      <ListItem color="inherit" disablePadding {...props} />
    );
  };
  return (
    <Box display="flex" flexDirection="column" {...containerProps}>
      {title && (
        <Typography variant="h6" {...titleProps}>
          {title}
        </Typography>
      )}
      <MuiList {...restProps}>
        {items.map(({ href, ...restListItemProps }: ListItemProps, index: number) =>
          href ? (
            <Link
              key={`list-item-link-${index}`}
              href={href}
              sx={{
                textDecoration: disableUnderline ? 'none' : 'underline',
                '& :hover': {
                  textDecoration: 'underline',
                },
                ...linkSx,
              }}
              {...restLinkProps}
            >
              <Item {...listItemProps} {...restListItemProps} />
            </Link>
          ) : (
            <Item key={`list-item-${index}`} {...listItemProps} {...restListItemProps} />
          )
        )}
      </MuiList>
    </Box>
  );
};

export default List;
