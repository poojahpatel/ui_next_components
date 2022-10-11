/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* TYPES */
import { FieldItemProps, FieldTypes } from './Form.types';

/* ICONS */
import { IoSend } from 'react-icons/io5';

/* FORM */
import Form from './Form';
import { useFormContext } from 'react-hook-form';

/* REACT HOOK FORM */
import Button from '../../core/Button';

interface Props {
  name?: string;
  onRemove?: () => void;
  viewModeIsEnabled?: boolean;
}

const FormDemo: React.FC<Props> = ({ name, onRemove, viewModeIsEnabled }) => {
  const formMethods = useFormContext();

  return (
    <Form
      formMethods={formMethods}
      viewModeIsEnabled={viewModeIsEnabled}
      gridItems={[
        {
          fieldsWrapperProps: { spacing: 1 },
          fieldItemsList: [
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.value`,
                variant: 'outlined',
                placeholder: 'hello',
              },
              fieldRules: {
                required: {
                  value: true,
                  message: 'Required',
                },
                validate: (x: unknown) => {
                  if (x === '20') {
                    return true;
                  } else {
                    return 'Value can be 20 only';
                  }
                },
              },
              xs: 3,
            },
            {
              fieldType: 'select',
              fieldProps: {
                name: `${name}.select1`,
                variant: 'outlined',
                placeholder: 'hello',
                options: [
                  {
                    label: 'Option 1',
                    value: 1,
                  },
                  {
                    label: 'Option 2',
                    value: 2,
                  },
                ],
              },
              xs: 3,
            },
            {
              fieldType: 'select',
              fieldProps: {
                name: `${name}.select2`,
                variant: 'outlined',
                placeholder: 'hello',
                options: [
                  {
                    label: 'Option 1',
                    value: 1,
                  },
                  {
                    label: 'Option 2',
                    value: 2,
                  },
                ],
              },
              xs: 3,
            },
            {
              fieldType: 'component',
              renderComponent: <Button fullWidth title="Remove" onClick={onRemove ? () => onRemove() : () => {}} />,
              xs: 3,
            },
          ],
        },
      ]}
    />
  );
};

export default FormDemo;
