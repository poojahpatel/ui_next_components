/* REACT */
import React from 'react';

/* ICONS */
import { FiBold, FiUnderline, FiItalic, FiLink, FiBook } from 'react-icons/fi';

/* CORE */
import Box from '../../core/Box';
import OutlinedInput from '../../core/OutlinedInput';
import Stack from '../../core/Stack';
import IconButton from '../../core/IconButton';
import Divider from '../../core/Divider';
import Popover from '../../core/Popover';
import RadioGroup from '../../core/RadioGroup';

/* COMMON */
import TextSizePicker, { TFontSizeVariant } from '../TextSizePicker';
import ColorsPickerInput from '../ColorsPickerInput';
import ReactSelect, { IOption } from '../ReactSelect';

/* TYPES */
import { ButtonConfigInputProps, ConfigButtonProps } from './ButtonConfigInput.types';
import { Typography } from '@mui/material';

const ButtonConfigInput: React.FC<ButtonConfigInputProps> = ({
  value = {},
  onChange,
  size = 'small',
  inputProps = {},
  disabled,
  options = [],
  selectProps = {},
  hideTools = [],
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

  const IconBtn = ({ children, onClick, active }: ConfigButtonProps) => {
    return (
      <IconButton
        size={size}
        disableRipple
        disabled={disabled}
        sx={{
          border: 'none',
          color: 'grey.700',
          bgcolor: active ? 'grey.200' : 'none',
        }}
        onClick={onClick}
      >
        {children}
      </IconButton>
    );
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      {options.length > 0 ? (
        <ReactSelect
          size={size as 'small' | 'medium'}
          value={value?.title}
          disabled={disabled}
          onChange={(val) => onChange && onChange({ ...value, title: val })}
          {...selectProps}
          options={options}
        />
      ) : (
        <OutlinedInput
          onChange={(e) => onChange && onChange({ ...value, title: e.target.value })}
          size={size as 'small' | 'medium'}
          value={value?.title}
          disabled={disabled}
        />
      )}
      <Stack mt="4px" alignItems="center" direction="row" spacing="6px">
        {!hideTools.includes('color') && (
          <ColorsPickerInput
            onChange={(colors) => onChange && onChange({ ...value, colors: colors })}
            value={
              value?.colors || {
                background: '#0099cc',
                font: '#333333',
              }
            }
            disabled={disabled}
          />
        )}

        {!hideTools.includes('bold') && (
          <IconBtn onClick={(e) => onChange && onChange({ ...value, bold: !value?.bold })} active={value?.bold}>
            <FiBold color="inherit" />
          </IconBtn>
        )}

        {!hideTools.includes('underline') && (
          <IconBtn onClick={(e) => onChange && onChange({ ...value, underline: !value?.underline })} active={value?.underline}>
            <FiUnderline />
          </IconBtn>
        )}
        {!hideTools.includes('italic') && (
          <IconBtn onClick={(e) => onChange && onChange({ ...value, italic: !value?.italic })} active={value?.italic}>
            <FiItalic />
          </IconBtn>
        )}
        {!hideTools.includes('fontSize') && (
          <TextSizePicker
            onChange={(val) => onChange && onChange({ ...value, fontSize: val })}
            active={!!value?.fontSize && value?.fontSize !== 'body1'}
            value={value?.fontSize || 'body1'}
            disabled={disabled}
          />
        )}
        <Divider orientation="vertical" sx={{ height: '20px' }} />
        {!hideTools.includes('link') && (
          <IconButton
            size={size}
            disableRipple
            sx={{
              border: 'none',
              color: 'grey.700',
              bgcolor: open ? 'grey.200' : 'none',
            }}
            onClick={handleClick}
            disabled={disabled}
          >
            <FiLink />
          </IconButton>
        )}
        {!hideTools.includes('icon') && (
          <IconBtn>
            <FiBook />
          </IconBtn>
        )}
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p="12px" display="flex" flexDirection="column">
          <Box display="flex" width="100%" flexDirection="column">
            <Typography mb="6px" variant="h5">
              Link
            </Typography>
            <OutlinedInput
              placeholder="Link"
              size="small"
              startAdornment={<FiLink />}
              onChange={(e) => onChange && onChange({ ...value, href: e.target.value })}
              value={value?.href}
            />
          </Box>

          <Box mt="20px" display="flex" width="100%" flexDirection="column">
            <Typography mb="6px" variant="h5">
              On Click Hook
            </Typography>
            <OutlinedInput
              multiline
              sx={{
                height: '76px',
              }}
              value={value?.onClickContent}
              onChange={(e) => onChange && onChange({ ...value, onClickContent: e.target.value })}
            />
          </Box>
          <Box mt="20px" display="flex" width="100%" flexDirection="column">
            <Typography mb="6px" variant="h5">
              Open As
            </Typography>
            <RadioGroup
              onChange={(e) => onChange && onChange({ ...value, linkTarget: e.target.value as '_blank' | 'popup' })}
              value={value?.linkTarget}
              options={[
                {
                  label: 'Separate Tab',
                  value: '_blank',
                },
                {
                  label: 'Pop-up',
                  value: 'popup',
                },
              ]}
              row
              sx={{
                mt: '-8px',
              }}
            />
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default ButtonConfigInput;
