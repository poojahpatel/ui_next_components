/* REACT */
import React from 'react';

/* CORE */
import IconButton from '../../core/IconButton';
import Popover from '../../core/Popover';
import Box from '../../core/Box';
import Stack from '../../core/Stack';

/* ICONS */
import { TbColorPicker } from 'react-icons/tb';

/* TYPES */
import { ColorPickerInputProps } from './ColorPickerInput.types';

/* REACT INPUT MASK */
import { HexColorPicker } from 'react-colorful';

const ColorPickerInput: React.FC<ColorPickerInputProps> = ({
  defaultColors = ['#018370', '#FF8F27', '#FBA372', '#F2F3F3'],
  value,
  size = 20,
  disabled,
  onChange,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Stack direction="row" spacing="8px">
        {defaultColors.map((color) => {
          return (
            <IconButton
              key={`color-block-${color}`}
              size="small"
              disableRipple
              sx={{
                p: '3px',
                width: 'auto',
                height: 'auto',
                borderColor: value === color ? 'primary.main' : 'grey.400',
              }}
              onClick={() => onChange && onChange(color)}
              disabled={disabled}
            >
              <Box
                sx={{
                  width: typeof size === 'number' ? size : 20,
                  height: typeof size === 'number' ? size : 20,
                  borderRadius: '4px',
                  bgcolor: color,
                  opacity: disabled ? 0.5 : 1,
                }}
              />
            </IconButton>
          );
        })}
        <IconButton
          size="small"
          disableRipple
          sx={{
            p: '3px',
            width: 'auto',
            height: 'auto',
            color: 'grey.700',
          }}
          onClick={handleClick}
          disabled={disabled}
        >
          {value && !defaultColors.includes(value) ? (
            <Box
              sx={{
                width: typeof size === 'number' ? size : 20,
                height: typeof size === 'number' ? size : 20,
                borderRadius: '4px',
                bgcolor: defaultColors.includes(value) ? 'none' : value,
                opacity: disabled ? 0.5 : 1,
              }}
            />
          ) : (
            <TbColorPicker color="inherit" />
          )}
        </IconButton>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            overflow: 'visible',
          },
          '& .react-colorful__hue-pointer': {
            width: '18px',
            height: '18px',
          },
          '& .react-colorful__pointer': {
            width: '18px',
            height: '18px',
          },
        }}
      >
        <HexColorPicker color={value} onChange={onChange} />
      </Popover>
    </>
  );
};

export default ColorPickerInput;
