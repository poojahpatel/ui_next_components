/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* TYPES */
import Typography from '@mui/material/Typography';
import { TitleProps } from './Title.types';

const Title: React.FC<TitleProps> = ({
  containerProps = {},
  icon,
  iconContainerProps,
  contentContainerProps = {},
  title,
  titleProps,
  titleContainerProps,
  summary,
  summaryProps,
  summaryContainerProps,
}) => (
  <Box display="flex" flexDirection="column" width="100%" {...containerProps}>
    <Box display="flex" flexDirection="column" width="100%" {...contentContainerProps}>
      {icon && (
        <Box display="flex" {...iconContainerProps}>
          {icon}
        </Box>
      )}
      {title && (
        <Box display="flex" {...titleContainerProps}>
          <Typography variant="h2" {...titleProps}>
            {title}
          </Typography>
        </Box>
      )}

      {summary && (
        <Box mt="8px" display="flex" {...summaryContainerProps}>
          {React.isValidElement(summary) ? (
            summary
          ) : (
            <Typography paragraph variant="body1" mb="0px" {...summaryProps}>
              {summary}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  </Box>
);

export default Title;
