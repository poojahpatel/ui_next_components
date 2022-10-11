/* REACT */
import React from 'react';

/* ICONS */
import { AiOutlineFontSize } from 'react-icons/ai';

/* CORE */
import IconButton from '../../core/IconButton';
import Menu from '../../core/Menu';

/* TYPES */
import { TextSizePickerProps } from './TextSizePicker.types';

const TextSizePicker: React.FC<TextSizePickerProps> = ({ value, onChange, active, ...restProps }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    console.log('value', value);
  }, [value]);

  return (
    <>
      <IconButton
        size="small"
        id="text-size-picker-button"
        disableRipple
        sx={{
          border: 'none',
          color: 'grey.700',
          bgcolor: active ? 'grey.200' : 'none',
        }}
        aria-controls={open ? 'text-size-picker-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        {...restProps}
      >
        {<AiOutlineFontSize color="inherit" />}
      </IconButton>
      <Menu
        id="text-size-picker-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'text-size-picker-button',
        }}
        items={[
          {
            label: 'Plain Text',
            value: 'body1',
            onClick: () => onChange && onChange('body1'),
            active: value === 'body1',
          },
          {
            label: 'Heading 3',
            value: 'h3',
            onClick: () => onChange && onChange('h3'),
            active: value === 'h3',
          },
          {
            label: 'Heading 2',
            value: 'h2',
            onClick: () => onChange && onChange('h2'),
            active: value === 'h2',
          },
          {
            label: 'Heading 1',
            value: 'h1',
            onClick: () => onChange && onChange('h1'),
            active: value === 'h1',
          },
        ]}
      />
    </>
  );
};

export default TextSizePicker;
