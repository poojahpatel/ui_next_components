/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

/* COMMON COMPONENTS */
import Title from '../Title';

/* TYPES */
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = ({
  children,
  sx: containerSxProps,
  contentContainerProps,
  wrapperContainerProps,
  titleComponentProps,
  ...restContainerProps
}) => {
  const { sx: contentContainerSxProps, ...restContentContainerProps } = contentContainerProps || {};
  const { title, titleContainerProps, titleProps, summaryContainerProps, summaryProps, ...restTitleComponentProps } =
    titleComponentProps || {};
  return (
    <Grid
      container
      flexDirection="column"
      px={3}
      py={8}
      sx={{ width: '100%', ...containerSxProps }}
      {...restContainerProps}
    >
      <Grid item xs={12}>
        <Container maxWidth="xl" disableGutters {...wrapperContainerProps}>
          {title && (
            <Title
              title={title}
              titleContainerProps={{
                justifyContent: 'center',
                ...titleContainerProps,
              }}
              titleProps={{ textAlign: 'center', ...titleProps }}
              summaryContainerProps={{
                justifyContent: 'center',
                ...summaryContainerProps,
              }}
              summaryProps={{
                textAlign: 'center',
                fontSize: '1.1rem',
                ...summaryProps,
              }}
              {...restTitleComponentProps}
            />
          )}
          <Box
            mt={title ? 6 : '0px'}
            flexDirection="column"
            sx={{ width: '100%', ...contentContainerSxProps }}
            {...restContentContainerProps}
          >
            {children}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Section;
