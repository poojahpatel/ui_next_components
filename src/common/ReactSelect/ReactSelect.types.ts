import { Props } from 'react-select';
import { TypographyProps } from '@mui/material/Typography';

export interface IOption {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  value: string;
  labelProps?: TypographyProps;
}

export interface ReactSelectProps extends Omit<Props, 'onChange'> {
  viewModeIsEnabled?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (x: string) => void;
  error?: boolean;
}
