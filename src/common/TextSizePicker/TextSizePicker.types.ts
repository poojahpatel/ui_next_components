import { OutlinedInputProps } from '../../core/OutlinedInput';
import { IconButtonProps } from '../../core/IconButton';

export type TFontSizeVariant = 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface TextSizePickerProps extends Omit<IconButtonProps, 'onChange'> {
  value?: TFontSizeVariant;
  active?: boolean;
  onChange?: (x?: TFontSizeVariant) => void;
}
