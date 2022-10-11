/* REACT */
import React from 'react';

/* MUI */
import { Theme } from '@mui/material/styles';

/* ICONS */
import { TiPersonOutlined, TiEmailOutlined, TiMobileOutlined } from '../../../icons';

/* CORE */
import Button from '../../../core/Button';
import Box from '../../../core/Box';

/* COMMON */
import Form, { FormFooter } from '../../../common/Form';
import { useForm } from '../../../common/Form/hooks';

/* TYPES */
import { GetPreQualifiedProps, IFormInput } from './GetPreQualified.types';

const GetPreQualified: React.FC<GetPreQualifiedProps> = ({ theme_color }) => {
  const formMethods = useForm<IFormInput>();

  const { control, handleSubmit, formState, setValue, getValues } = formMethods;
  const { errors } = formState || {};

  React.useEffect(() => {
    console.log('formState', formState);
  }, [formState]);

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Box display="flex" flexDirection="column">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        formMethods={formMethods}
        gridItems={[
          {
            hideDivider: true,
            fieldsWrapperProps: {
              justifyContent: 'space-between',
              alignItems: 'center',
              rowSpacing: '28px',
            },
            px: '30px',
            fieldItemsList: [
              {
                fieldType: 'text',
                fieldProps: {
                  name: 'firstname',
                  label: 'First Name',
                  placeholder: 'First Name',
                  startAdornment: <TiPersonOutlined sx={{ fontSize: '14px' }} />,
                },
                fieldRules: {
                  required: {
                    value: true,
                    message: 'Required',
                  },
                },
                xs: 12,
              },
              {
                fieldType: 'text',
                fieldProps: {
                  name: 'lastname',
                  label: 'Last Name',
                  placeholder: 'Last Name',
                  startAdornment: <TiPersonOutlined sx={{ fontSize: '14px' }} />,
                },
                xs: 12,
              },
              {
                fieldType: 'text',
                fieldProps: {
                  name: 'email',
                  label: 'Email',
                  placeholder: 'name@company.com',
                  startAdornment: <TiEmailOutlined sx={{ fontSize: '14px' }} />,
                },
                fieldRules: {
                  required: {
                    value: true,
                    message: 'Required',
                  },
                },
                xs: 12,
              },
              {
                fieldType: 'mask',
                fieldProps: {
                  name: 'mobile',
                  label: 'Mobile',
                  maskType: 'phone',
                  placeholder: '(000) 000 0000',
                  startAdornment: <TiMobileOutlined sx={{ fontSize: '14px' }} />,
                },
                xs: 12,
              },
            ],
          },
        ]}
      />
      <FormFooter
        mt="30px"
        sx={{
          borderTop: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
        }}
        alignItems="center"
        height="110px"
        px="30px"
      >
        <Button
          onClick={handleSubmit(onSubmit)}
          title="Submit"
          fullWidth
          sx={{
            height: '50px',
            bgcolor: theme_color || 'primary.main',
          }}
        />
      </FormFooter>
    </Box>
  );
};

export default GetPreQualified;
