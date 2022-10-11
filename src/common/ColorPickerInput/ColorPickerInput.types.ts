export interface ColorPickerInputProps {
  defaultColors?: Array<string>;
  disabled?: boolean;
  value?: string;
  onChange?: (x: string) => void;
  size?: number;
}
