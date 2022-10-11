/* REACT */
import React from 'react';

/* MUI */
import Box from '../../core/Box';
import Stack from '../../core/Stack';
import Typography from '../../core/Typography';
import Button, { ButtonProps } from '../../core/Button';

/* TYPES */
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({
  title,
  titleProps = {},
  icon,
  summary,
  summaryProps = {},
  buttons = [],
  buttonsStackProps = {},
  ...restProps
}) => {
  return (
    <Box display="flex" alignItems="center" {...restProps}>
      <Box display="flex" flex={1}>
        {React.isValidElement(title) ? (
          title
        ) : (
          <Typography variant="h2" {...titleProps}>
            {title}
          </Typography>
        )}
      </Box>
      {buttons.length > 0 && (
        <Stack direction="row" spacing="10px" {...buttonsStackProps}>
          {buttons.map((button: ButtonProps, index: number) => (
            <Button key={`common-header-button-${index}`} {...button} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Header;
