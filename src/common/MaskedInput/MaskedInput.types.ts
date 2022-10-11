import { OutlinedInputProps } from '../../core/OutlinedInput';
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask';

export interface MaskedInputProps extends OutlinedInputProps {
  maskChar?: string;
  mask?: string | Array<string | RegExp>;
  maskPlaceholder?: string | null | undefined;
  alwaysShowMask?: boolean | undefined;
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
  maskType?: 'time' | 'phone' | 'zipcode' | 'color' | 'currency';
  formatChars?: Record<string, string>;
}
