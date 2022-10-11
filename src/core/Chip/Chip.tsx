/* REACT */
import React from 'react';

/* MUI */
import MuiChip from '@mui/material/Chip';

/* ICONS */
import { BiX } from 'react-icons/bi';
/* TYPES */
import { ChipProps } from './Chip.types';

const Chip: React.FC<ChipProps> = (props) => <MuiChip size="small" deleteIcon={<BiX />} {...props} />;

export default Chip;
