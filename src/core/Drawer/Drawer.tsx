import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import IconCloseOutlined from '@mui/icons-material/CloseOutlined';
import Typography from '@mui/material/Typography';
import { DrawerProps } from './Drawer.types';

/* ICONS */
import { BiRightIndent } from 'react-icons/bi';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer: React.FC<DrawerProps> = ({
  headerProps = {},
  open,
  onClose,
  drawerWidth,
  drawerShrinkWidth,
  contentProps = {},
  children,
  sx: drawerPropsSx,
  ...restProps
}) => {
  const { title, icon, summary, sx: headerSx = {}, ...restHeaderProps } = headerProps || {};

  return (
    <MuiDrawer
      sx={{
        width: open ? drawerWidth : drawerShrinkWidth,
        transition: (theme) =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        flexShrink: 0,
        '& .MuiDrawer-root': {},
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : drawerShrinkWidth,
          boxSizing: 'border-box',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        },
        ...drawerPropsSx,
        paddingTop: '64px',
      }}
      variant="temporary"
      anchor="right"
      open={open}
      transitionDuration={200}
      onClose={onClose}
      {...restProps}
    >
      <DrawerHeader>
        <Box
          pl={2.5}
          pr={1.5}
          width="100%"
          height="64px"
          display="flex"
          alignItems="center"
          sx={{
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'grey.200',
            zIndex: (theme) => theme.zIndex.drawer + 3,
            ...headerSx,
          }}
          {...restHeaderProps}
        >
          <Box display="flex" flex={1} position="relative" flexDirection="column">
            {/* <IconButton
              sx={{ width: 30, height: 30,
                left:'-25px',
                position:'absolute',
                zIndex:(theme) => theme.zIndex.drawer + 3,
                boxShadow:(theme) => theme.shadows[1]
              }}
              onClick={onClose as React.MouseEventHandler<HTMLButtonElement>}
            >
              <BiRightIndent />
            </IconButton> */}
            {(title || icon) && (
              <Box display="flex" alignItems="center">
                {icon && (
                  <Box mr="10px" display="flex">
                    {icon}
                  </Box>
                )}
                {title && <Typography variant="h2">{title}</Typography>}
              </Box>
            )}
            {summary && (
              <Box mt="12px" display="flex" flex={1}>
                <Typography color="grey.800" variant="body1">
                  {summary}
                </Typography>
              </Box>
            )}
          </Box>
          <Box display="flex">
            <IconButton sx={{ width: 30, height: 30 }} onClick={onClose as React.MouseEventHandler<HTMLButtonElement>}>
              <IconCloseOutlined fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </DrawerHeader>

      {/* sidebar navigation list items */}
      <Box
        flex={1}
        pl={2.5}
        pr={2.5}
        display="flex"
        flexDirection="column"
        sx={{ overflowY: 'auto' }}
        pt={2.5}
        {...contentProps}
      >
        {children}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
