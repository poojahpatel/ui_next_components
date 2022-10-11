/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* TYPES */
import { IconInfoProps } from './IconInfo.types';
import Title from '../Title';

const IconInfo: React.FC<IconInfoProps> = ({
  containerProps,
  icon,
  iconContainerProps,
  title,
  contentContainerProps,
  titleComponentProps,
  summary,
}) => {
  const { titleProps, summaryProps, summaryContainerProps, ...restTitleComponentProps } = titleComponentProps || {};
  return (
    <Box display="flex" alignItems="center" {...containerProps}>
      <Box display="flex" mr="5px" {...iconContainerProps}>
        {icon}
      </Box>
      <Box display="flex" flexDirection="column" {...contentContainerProps}>
        <Title
          title={title as string}
          summary={summary}
          titleProps={{
            variant: 'h5',
            ...titleProps,
          }}
          summaryProps={{
            variant: 'body2',
            ...summaryProps,
          }}
          summaryContainerProps={{
            mt: '0px',
            ...summaryContainerProps,
          }}
          {...restTitleComponentProps}
        />
      </Box>
    </Box>
  );
};

export default IconInfo;
