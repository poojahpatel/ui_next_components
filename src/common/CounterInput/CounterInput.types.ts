import { OutlinedInputProps } from '../../core/OutlinedInput';
export interface CounterInputProps extends Omit<OutlinedInputProps, 'onChange'> {
  stepSize?: number;
  max?: number;
  min?: number;
  onChange?: (x: number) => void;
}
