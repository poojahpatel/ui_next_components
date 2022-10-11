import { IconButtonProps } from '../../core/IconButton';

export interface DefaultColorProps {
  label: string;
  value: string;
}

export interface ValueProps {
  background?: string;
  font?: string;
}

export interface ColorsPickerInputProps {
  defaultColors?: Array<DefaultColorProps>;
  disableInput?: boolean;
  value?: ValueProps;
  onChange?: (x: ValueProps) => void;
  iconButtonProps?: IconButtonProps;
  size?: number;
  disabled?: boolean;
}
