/* REACT */
import React from 'react';

/* MUI */
import MuiTextareaAutosize from '@mui/material/TextareaAutosize';

/* TYPES */
import { TextareaAutosizeProps } from './TextareaAutosize.types';

const TextareaAutosize: React.FC<TextareaAutosizeProps> = ({
  viewModeIsEnabled,
  disabled,
  placeholder,
  value,
  ...restProps
}) => (
  <MuiTextareaAutosize
    disabled={viewModeIsEnabled || disabled}
    value={value}
    placeholder={viewModeIsEnabled ? '' : placeholder}
    minRows={5}
    style={{
      width: '93%',
      border: '1px solid #D2D7D6',
      borderRadius: '6px',
      padding: '10px',
      maxWidth: '100%',
      outlineColor: '#018270',
      lineHeight: '22px',
      fontFamily: [
        'AktivGrotesk',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }}
    {...restProps}
  />
);

export default TextareaAutosize;
