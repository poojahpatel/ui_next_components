/* REACT */
import React from 'react';

/* CORE */
import OutlinedInput from '../../core/OutlinedInput';

/* TYPES */
import { MaskedInputProps } from './MaskedInput.types';

/* REACT INPUT MASK */
import InputMask, { Props as RimProps } from 'react-input-mask';

const MaskedInput: React.FC<MaskedInputProps> = ({
  maskChar,
  mask,
  maskPlaceholder,
  alwaysShowMask,
  beforeMaskedStateChange,
  maskType,
  formatChars,
  disabled,
  value,
  ...restProps
}) => {
  const [localMask, setLocalMask] = React.useState<string | Array<(string | RegExp) | undefined> | undefined>(undefined);
  const [localFormatChars, setLocalFormatChars] = React.useState<Record<string, string> | undefined>(undefined);

  const formatTimeChars = {
    // eslint-disable-next-line quote-props
    '1': '[0-1]',
    // eslint-disable-next-line quote-props
    '2': '[0-9]',
    // eslint-disable-next-line quote-props
    '3': '[0-5]',
    // eslint-disable-next-line quote-props
    '4': '[0-9]',
  };

  React.useEffect(() => {
    if (maskType === 'time') {
      setLocalMask('12:34');
      setLocalFormatChars(formatTimeChars);
    } else if (maskType === 'phone') {
      setLocalMask('+1 (999) 999-9999');
    } else if (maskType === 'zipcode') {
      setLocalMask('99999');
    } else if (maskType === 'color') {
      setLocalMask('#******');
    } else if (maskType === 'currency') {
      const str = value?.toString().replace('$', '').length;
      setLocalMask('$ 999,999,99');
    }
  }, [maskType, value]);

  const handleBeforeMaskedStateChange = (newState: any) => {
    const { value } = newState;

    if (maskType === 'time') {
      // Conditional mask for the 2nd digit base on the first digit
      if (value.startsWith('0')) {
        setLocalFormatChars({
          ...formatTimeChars,
          '2': '[0-9]',
        });
        // To block 24, 25, etc.
      } else {
        setLocalFormatChars({
          ...formatTimeChars,
          '2': '[0-2]',
        });
      }
    }

    return { value, selection: newState.selection };
  };

  return (
    <InputMask
      maskChar={maskChar || null}
      // @ts-ignore
      mask={mask || localMask}
      maskPlaceholder={maskPlaceholder}
      alwaysShowMask={alwaysShowMask}
      beforeMaskedStateChange={
        maskType === 'time' || maskType === 'color' ? handleBeforeMaskedStateChange : beforeMaskedStateChange
      }
      formatChars={
        maskType === 'time'
          ? (localFormatChars as any)
          : ({
            '9': '[0-9]',
            a: '[A-Za-z]',
            '*': '[A-Za-z0-9]',
            ...formatChars,
          } as any)
      }
      disabled={disabled}
      onBlur={restProps?.onBlur}
      value={value as any}
      onChange={restProps?.onChange}
      placeholder={restProps?.placeholder}
    >
      {(inputProps: MaskedInputProps): React.ReactNode => (
        <OutlinedInput value={value} disabled={disabled} {...restProps} />
      )}
    </InputMask>
  ) as any;
};

export default MaskedInput;
