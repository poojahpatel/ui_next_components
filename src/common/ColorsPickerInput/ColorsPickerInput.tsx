/* REACT */
import React from 'react';

/* ICONS */
import { TbColorPicker } from 'react-icons/tb';

/* CORE */
import Tabs from '../../core/Tabs';
import Box from '../../core/Box';
import List from '../../core/List';
import IconButton from '../../core/IconButton';
import Popover from '../../core/Popover';

/* TYPES */
import { ColorsPickerInputProps, DefaultColorProps, ValueProps } from './ColorsPickerInput.types';

/* REACT INPUT MASK */
import { HexColorPicker } from 'react-colorful';

const ColorsPickerInput: React.FC<ColorsPickerInputProps> = ({
  value = {},
  defaultColors = [
    {
      label: 'Primary',
      value: '#018370',
    },
    {
      label: 'Secondary',
      value: '#FF8F27',
    },
    {
      label: 'Tertiary',
      value: '#FBA372',
    },
    {
      label: 'Quaternary',
      value: '#F2F3F3',
    },
  ],
  disableInput = true,
  onChange,
  iconButtonProps = {},
  size = 20,
  disabled,
  ...restProps
}) => {
  const [activeTab, setActiveTab] = React.useState<'background' | 'font'>('background');

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<HTMLLIElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover2' : undefined;

  const handleColor = React.useCallback(
    (newColor?: string) => {
      if (activeTab === 'background') {
        onChange && onChange({
          ...value,
          background: newColor,
        });
      } else {
        onChange && onChange({
          ...value,
          font: newColor,
        });
      }
    },
    [activeTab, value]
  );

  return (
    <>
      <IconButton
        size="small"
        sx={{
          p: '3px',
          width: 'auto',
          height: 'auto',
          borderColor: 'grey.400',
        }}
        onClick={handleClick}
        disableRipple
        disabled={disabled}
        {...iconButtonProps}
      >
        <Box
          sx={{
            width: size,
            height: size,
            borderRadius: '4px',
            bgcolor: activeTab === 'font' ? value?.font : value?.background,
            opacity: disabled ? 0.5 : 1,
          }}
        />
      </IconButton>

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
            minWidth: '220px',
          },
        }}
      >
        <Tabs
          handleTabChange={(newTab) => setActiveTab(newTab as 'background' | 'font')}
          activeTab={activeTab}
          tabBarProps={{
            sx: {
              height: '20px',
            },
          }}
          sx={{
            px: 2,
          }}
          tabItems={[
            {
              label: 'Background',
              value: 'background',
            },
            {
              label: 'Font',
              value: 'font',
            },
          ]}
        />

        <List
          listItemProps={{
            sx: {
              px: 1.5,
              py: 0.5,
            },
            button: true,
          }}
          items={[
            ...defaultColors.map((item: DefaultColorProps) => ({
              icon: <Box sx={{ bgcolor: item.value }} width="14px" height="14px" borderRadius="2px" />,
              label: item.label,
              onClick: () => handleColor(item.value),
              active: activeTab === 'background' ? item.value === value.background : item.value === value.font,
            })),
            {
              icon: <TbColorPicker />,
              label: 'Color Picker',
              onClick: handleClick2,
              active:
                !!(activeTab === 'background' ? value?.background && value?.background !== defaultColors.find((color) => color?.value === value?.background)?.value
                  : value?.font && value?.font !== defaultColors.find((color) => color?.value === value?.font)?.value),
            },
          ]}
        />
      </Popover>

      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          top: '150px',
          left: '100px',
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
        <HexColorPicker color={activeTab === 'font' ? value?.font : value?.background} onChange={handleColor} />
      </Popover>
    </>
  );
};

export default ColorsPickerInput;
