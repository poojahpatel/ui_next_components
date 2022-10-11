// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from 'react';

/* MUI */
import Box, { BoxProps } from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

/* TYPES */
import { TabsProps } from './Tabs.types';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TABS_CONTAINER_HEIGHT = 46;

const Tabs: React.FC<TabsProps> = ({
  children,
  tabItems = [],
  handleTabChange,
  tabBarProps,
  containerProps,
  activeTab,
  tabPanelProps,
  ...tabsProps
}) => {
  // tab change handler
  const handleChange = (event: React.SyntheticEvent, newValue: string | number) => {
    handleTabChange(newValue);
  };

  const { sx: tabsPropsSx, ...tabsPropsRest } = tabsProps || {};
  const { sx: tabBarPropsSx, ...tabBarPropsRest } = tabBarProps || {};

  return (
    <Box display="flex" width="100%" flexDirection="column" {...containerProps}>
      <Box
        {...tabBarPropsRest}
        sx={{
          height: TABS_CONTAINER_HEIGHT,
          ...tabBarPropsSx,
        }}
      >
        <MuiTabs
          value={activeTab}
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            '& .MuiTabs-indicator': {
              height: '3px',
              borderTopRightRadius: '2px',
              borderTopLeftRadius: '2px',
            },
            ...tabsPropsSx,
            borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey[400]}`,
          }}
          {...tabsPropsRest}
        >
          {tabItems.map((item, index) => (
            <Tab
              key={`tab-${index}`}
              sx={{
                textTransform: 'none',
                fontWeight: activeTab === item.value ? 500 : 400,
                minWidth: '30px',
                color: (theme: Theme) =>
                  activeTab === item.value ? `${theme.palette.primary.main} !important` : theme.palette.text.primary,
                pl: 0,
                pr: 0,
                mr: '1.5rem',
              }}
              label={item.label}
              value={item.value}
              {...a11yProps(index + 1)}
            />
          ))}
        </MuiTabs>
      </Box>

      <Box display="flex" width="100%" mt="24px" flexDirection="column" {...tabPanelProps}>
        {children}
      </Box>
    </Box>
  );
};
export default Tabs;
