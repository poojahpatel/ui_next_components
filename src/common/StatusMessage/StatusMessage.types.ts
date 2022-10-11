import { TypographyProps } from '@mui/material/Typography';
import { BoxProps } from '@mui/material/Box';
import { ButtonProps } from '../../core/Button';

export interface StatusMessageProps {
  type: 'success' | 'error' | 'loading';
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  titleProps?: TypographyProps;
  messageProps?: TypographyProps;
  buttonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  icon?: React.ReactNode;
  containerProps?: BoxProps;
  iconSize?: number;
  hideButton?: boolean;
  hideTitle?: boolean;
  hideMessage?: boolean;
}
