/* REACT */
import React from 'react';

/* MUI */
import MuiIconButton from '@mui/material/IconButton';

/* TYPES */
import { IconButtonProps } from './IconButton.types';

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { sx, children, ...restProps } = props;
  return (
    <MuiIconButton
      sx={{
        bgcolor: 'none',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey.300',
        color: 'text.primary',
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
