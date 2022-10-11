/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* FORM */
import Form, { useForm, useWatch } from '../../../common/Form';

import { AppConfigProps, IFormInput } from './AppConfig.types';

const AppConfig: React.FC<AppConfigProps> = ({ onChange, initialValues }) => {
  const formMethods = useForm<IFormInput>({
    defaultValues: initialValues || {},
    mode: 'all',
  });

  const { control, handleSubmit, formState, setValue, watch } = formMethods;
  const { errors } = formState || {};

  const watchForm = useWatch({ control });
  const watchSecondaryButton = useWatch({ control, name: 'primary_button' });
  const watchTertiaryButton = useWatch({ control, name: 'secondary_button' });
  const watchAppBorder = useWatch({ control, name: 'app_border' });

  React.useEffect(() => {
    if (onChange) {
      console.log('watchForm', watchForm);
      onChange(watchForm);
    }
  }, [watchForm]);

  const onSubmit = (data: IFormInput) => console.log(data);

  const [hideButtons, setHideButtons] = React.useState<boolean>(false);

  return (
    <Box display="flex">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        contextIsEnabled={true}
        formMethods={formMethods}
        fieldSize="small"
        columnSpacing="12px"
        rowSpacing="22px"
        // height={'calc(100vh - 60px)'}
        headerProps={{
          height: 50,
          title: 'App Configuration',
        }}
        gridItems={[
          {
            title: 'Loan Settings',
            titleProps: {
              textTransform: 'uppercase',
              variant: 'h6',
              color: 'primary.main',
            },
            fieldItemsList: [
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'down_payments',
                  placeholder: 'Down Payment',
                  label: 'Down Payment',
                  size: 'small',
                },
                fieldRules: {
                  validate: (dp: string) => {
                    const arr = dp?.split(/\r?\n/);
                    if (new Set(arr).size !== arr.length) {
                      return 'Duplicate value found';
                    }
                    return true;
                  },
                },
                xs: 12,
              },
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'interest_rates',
                  placeholder: 'Interest Rate',
                  label: 'Interest Rate',
                  size: 'small',
                },
                fieldRules: {
                  validate: (dp: string) => {
                    const arr = dp?.split(/\r?\n/);
                    if (new Set(arr).size !== arr.length) {
                      return 'Duplicate value found';
                    }
                    return true;
                  },
                },
                xs: 12,
              },
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'loan_terms',
                  placeholder: 'Loan Term',
                  label: 'Loan Term',
                  size: 'small',
                },
                fieldRules: {
                  validate: (dp: string) => {
                    const arr = dp?.split(/\r?\n/);
                    if (new Set(arr).size !== arr.length) {
                      return 'Duplicate value found';
                    }
                    return true;
                  },
                },
                xs: 12,
              },
            ],
          },
          {
            title: 'Style',
            titleProps: {
              textTransform: 'uppercase',
              variant: 'h6',
              color: 'primary.main',
            },
            fieldItemsList: [
              {
                fieldType: 'text',
                fieldProps: {
                  name: 'header',
                  label: 'Header',
                  disabled: !watchForm.header,
                  sx: {
                    display: 'none',
                  },
                },
                onToggleField: (e, x: boolean) => setValue('header', x),
                fieldDecoratorProps: {
                  labelProps: {
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    variant: 'h6',
                  },
                },
                xs: 12,
              },
              {
                fieldType: 'color',
                fieldProps: {
                  name: 'app_border_color',
                  label: 'App Border',
                  disabled: !watchAppBorder,
                },
                onToggleField: (e, x: boolean) => setValue('app_border', x),
                fieldDecoratorProps: {
                  labelProps: {
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    variant: 'h6',
                  },
                },
                xs: 12,
              },
            ],
          },
          {
            title: 'Buttons',
            // onToggleFieldItems: (e: any, x: boolean) => setHideButtons(!x),
            hideFieldItems: hideButtons,
            titleProps: {
              textTransform: 'uppercase',
              variant: 'h6',
              color: 'primary.main',
            },
            fieldItemsList: [
              {
                fieldType: 'button_config',
                fieldProps: {
                  name: 'calculate_button',
                  placeholder: 'Calculate Button',
                  label: 'Calculate Button',
                  size: 'small',
                  hideTools: ['link'],
                },
                xs: 12,
              },
              {
                fieldType: 'button_config',
                fieldProps: {
                  name: 'primary_button',
                  placeholder: 'Primary Button',
                  label: 'Primary Button',
                  size: 'small',
                  disabled: watchSecondaryButton?.disabled,
                  hideTools: ['link'],
                  selectProps: {
                    placeholder: 'Select Type',
                  },
                  options: [
                    {
                      label: 'Get Pre-qualified',
                      value: 'Get Pre-qualified',
                    },
                    {
                      label: 'Chatbot ',
                      value: 'Chatbot ',
                    },
                    {
                      label: 'Auto Scheduler',
                      value: 'Auto Scheduler',
                    },
                    {
                      label: 'Link Button',
                      value: 'Link Button',
                    },
                  ],
                },
                onToggleField: (e, x: boolean) =>
                  setValue('primary_button', {
                    ...watchSecondaryButton,
                    disabled: !x,
                  }),
                xs: 12,
              },
              {
                fieldType: 'button_config',
                fieldProps: {
                  name: 'secondary_button',
                  placeholder: 'Secondary Button',
                  label: 'Secondary Button',
                  size: 'small',
                  disabled: watchTertiaryButton?.disabled,
                },
                onToggleField: (e, x: boolean) =>
                  setValue('secondary_button', {
                    ...watchTertiaryButton,
                    disabled: !x,
                  }),
                xs: 12,
              },
            ],
          },
          {
            title: 'Terms & Disclaimer',
            titleProps: {
              textTransform: 'uppercase',
              variant: 'h6',
              color: 'primary.main',
            },
            fieldItemsList: [
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'rates_note',
                  placeholder: 'Rates Note',
                  label: 'Rates Note',
                  size: 'small',
                },
                xs: 12,
              },
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'disclaimer_note',
                  placeholder: 'Disclaimer Note',
                  label: 'Disclaimer Note',
                  size: 'small',
                },
                xs: 12,
              },
              {
                fieldType: 'textarea',
                fieldProps: {
                  name: 'redirect_note',
                  placeholder: 'Redirect Note',
                  label: 'Redirect Note',
                  size: 'small',
                },
                xs: 12,
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default AppConfig;
