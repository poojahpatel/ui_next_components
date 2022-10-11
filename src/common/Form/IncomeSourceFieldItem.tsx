/* REACT */
import React from 'react';

/* FORM */
import Form from './Form';
import Field from './Field';
import { useFormContext } from 'react-hook-form';

import {
  TiBriefcaseOutlined,
  TiBuildingsMarkerOutlined,
  TiCalendarEmptyOutlined,
  TiGlobeMarkerOutlined,
  TiHomeDollarOutlined,
  TiMapMarkerOutlined,
  TiPhoneOutlined,
  TiZipcodeOutlined,
} from '../../icons';

interface Props {
  name?: string;
  onRemove?: () => void;
  viewModeIsEnabled?: boolean;
  index?: number;
  columnSpacing?: number | string;
  rowSpacing?: number | string;
  errors?: any;
}

const IncomeSourceFieldItem: React.FC<Props> = ({
  name,
  onRemove,
  viewModeIsEnabled,
  index = 0,
  columnSpacing,
  rowSpacing,
  errors,
}) => {
  const formMethods = useFormContext();

  const { control } = formMethods;

  return (
    <Form
      formMethods={formMethods}
      viewModeIsEnabled={viewModeIsEnabled}
      fieldSize="small"
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      errors={errors}
      id="manish"
      gridItems={[
        {
          title: `Income Source ${index + 1}`,
          fieldItemsList: [
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.employer_name`,
                placeholder: 'Employer Name',
                label: 'Employer Name',
                startAdornment: <TiBriefcaseOutlined sx={{ fontSize: '18px' }} />,
              },
              fieldRules: {
                required: {
                  value: true,
                  message: 'Required',
                },
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.job_title`,
                placeholder: 'Job Title',
                label: 'Job Title',
                startAdornment: <TiBriefcaseOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.employer_phone`,
                placeholder: 'Employer Phone',
                label: 'Employer Phone',
                startAdornment: <TiPhoneOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.address_street_1`,
                placeholder: 'Street 1',
                label: 'Street 1',
                startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.address_street_2`,
                placeholder: 'Street 2',
                label: 'Street 2',
                startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'react_select',
              fieldProps: {
                name: `${name}.address_state`,
                placeholder: 'State',
                label: 'State',
                defaultValue: 'california',
                startAdornment: <TiGlobeMarkerOutlined sx={{ fontSize: '18px' }} />,
                options: [
                  {
                    label: 'California',
                    value: 'california',
                  },
                  {
                    label: 'Texas',
                    value: 'texas',
                  },
                  {
                    label: 'Alaska',
                    value: 'alaska',
                  },
                  {
                    label: 'Florida',
                    value: 'florida',
                  },
                  {
                    label: 'Virginia',
                    value: 'virginia',
                  },
                ],
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.address_city`,
                placeholder: 'City',
                label: 'City',
                startAdornment: <TiBuildingsMarkerOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'mask',
              fieldProps: {
                name: `${name}.address_zipcode`,
                placeholder: 'Zip',
                label: 'Zip',
                startAdornment: <TiZipcodeOutlined sx={{ fontSize: '18px' }} />,
                maskType: 'zipcode',
              },
              xs: 3,
            },
            {
              fieldType: 'date',
              fieldProps: {
                name: `${name}.start_date`,
                placeholder: 'Start Date',
                label: 'Start Date',
                startAdornment: <TiCalendarEmptyOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'date',
              fieldProps: {
                name: `${name}.end_date`,
                placeholder: 'End Date',
                label: 'End Date',
                startAdornment: <TiCalendarEmptyOutlined sx={{ fontSize: '18px' }} />,
              },
              xs: 6,
            },
            {
              fieldType: 'text',
              fieldProps: {
                name: `${name}.income_amount_value`,
                placeholder: 'Income Amount',
                label: 'Income Amount',
                startAdornment: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
              },
              fieldDecoratorProps: {
                // endAdornmentWrapperProps:{
                //   id:'manish'
                // },
                endAdornment: (
                  <Field
                    fieldType="react_select"
                    fieldProps={{
                      size: 'small',
                      name: `${name}.income_amount_period`,
                      placeholder: 'wewew',
                      startAdornment: <TiCalendarEmptyOutlined sx={{ fontSize: '18px' }} />,
                      options: [
                        {
                          label: 'Month(s)',
                          value: 'month',
                        },
                        {
                          label: 'Year(s)',
                          value: 'year',
                        },
                        {
                          label: 'Week(s)',
                          value: 'week',
                        },
                      ],
                      menuPortalTarget: document.getElementById('manish'),
                      menuPosition: 'absolute',
                    }}
                    control={control}
                    viewModeIsEnabled={viewModeIsEnabled}
                  />
                ),
                endAdornmentWrapperProps: {
                  flex: 1,
                  ml: '10px',
                },
              },
              xs: 6,
            },
          ],
        },
      ]}
    />
  );
};

export default IncomeSourceFieldItem;
