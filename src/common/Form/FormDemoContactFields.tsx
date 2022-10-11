/* REACT */
import React from 'react';

/* MUI */
import Box from '@mui/material/Box';

/* ICONS */
import {
  TiAdsPaidOutlined,
  TiBuildingsMarkerOutlined,
  TiBuildingsOutlined,
  TiCalendar15Outlined,
  TiCalendar30Outlined,
  TiCalendarEmptyOutlined,
  TiCategoryOutlined,
  TiCodeBlocksOutlined,
  TiCondominiumMultiUnitOutlined,
  TiCondominiumOutlined,
  TiEmailOutlined,
  TiFarmOutlined,
  TiFhaOutlined,
  TiFileTaxOutlined,
  TiFormPersonOutlined,
  TiFriendsOutlined,
  TiGlobeMarkerOutlined,
  TiHomeAltOutlined,
  TiHomeDollarOutlined,
  TiHomeRefreshOutlined,
  TiKidsOutlined,
  TiMapMarkerOutlined,
  TiMobileOutlined,
  TiMoneyOutlined,
  TiMoneyTransferOutlined,
  TiMouseClickOutlined,
  TiNetworkOutlined,
  TiNotesOutlined,
  TiPeopleDollarOutlined,
  TiPeopleOutlined,
  TiPersonOutlined,
  TiPersonRefreshOutlined,
  TiPhoneOutlined,
  TiPurchaseOutlined,
  TiReplyOutlined,
  TiSearchOutlined,
  TiSocialMediaOutlined,
  TiSpeedometerOutlined,
  TiSsnOutlined,
  TiStackOutlined,
  TiUsdaOutlined,
  TiWalletRateOutlined,
  TiWebOutlined,
  TiZipcodeOutlined,
} from '../../icons';

/* FORM */
import Form from './Form';
import Field from './Field';
import { useForm, useFieldArray, FieldValues } from 'react-hook-form';

/* REACT HOOK FORM */
import Button from '../../core/Button';

import IncomeSourceFieldItem from './IncomeSourceFieldItem';
import Avatar from '../../core/Avatar';
import FadingBox from '../FadingBox';
import FormDialog from './FormDialog';

interface IFormInput {
  firstname: string;
  middlename: string;
  lastname: string;
  marital_status: string;
  dob: string;
  ssn: string;
  phone_work: string;
  phone_home: string;
  mobile_1: string;
  mobile_2: string;
  email_1: string;
  email_2: string;
  associations: string;
  associated_with: string;
  estimated_fico: string;
  lead_source_type: string;
  lead_source: string;
  current_loan_purpose: string;
  current_loan_type: string;
  current_loan_rate: number;
  current_loan_mi: number;
  current_loan_term: string;
  current_loan_property_value: string;
  current_loan_down_payment: string;
  current_loan_term_remaining_value: string;
  current_loan_term_remaining_period: string;
  current_loan_benefit_notes: string;
  income_source: any;
  stage: string;
  tags: Array<string>;
}

export interface FormDemoProps {
  viewModeIsEnabled?: boolean;
  title?: string | React.ReactNode;
  action?: 'update' | 'create';
}

const FormDemo: React.FC<FormDemoProps> = ({ viewModeIsEnabled }) => {
  const formMethods = useForm<IFormInput>({
    defaultValues: {
      firstname: 'Robert',
      middlename: 'John',
      lastname: 'Fox',
      marital_status: 'unmarried',
      dob: '09-17-1991',
      ssn: '1234567',
      phone_work: '8387087222',
      phone_home: '7387087221',
      mobile_1: '6387087221',
      mobile_2: '9387087221',
      email_1: 'test@example.com',
      email_2: 'taygo@example.com',
      associations: 'self',
      associated_with: '1',
      estimated_fico: '12345',
      lead_source_type: 'referral',
      lead_source: 'Unknown',
      current_loan_purpose: 'refinance',
      current_loan_type: 'usda',
      current_loan_rate: 2.2,
      current_loan_mi: 0.2,
      current_loan_term: '15_years',
      current_loan_property_value: '5400000',
      current_loan_down_payment: '140000',
      current_loan_term_remaining_value: '2 Months',
      current_loan_term_remaining_period: 'month',
      current_loan_benefit_notes: 'Some notes',
      tags: [],
      stage: 'lead',
    },
  });

  const { control, handleSubmit, formState, watch } = formMethods;
  const { errors } = formState || {};

  const watchFirstName = watch('firstname');

  React.useEffect(() => {
    console.log('formState', formState?.errors);
  }, [formState]);

  // field array
  const {
    fields: incomeSourceFields,
    append: incomeSourceAppend,
    remove: incomeSourceRemove,
    move: incomeSourceMove,
  } = useFieldArray({
    control,
    name: 'income_source',
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Box display="flex" justifyContent="stretch">
      <FormDialog
        open={true}
        headerProps={{
          title: 'Contact Form',
          notificationProps: {
            visible: true,
            message: 'some message',
          },
        }}
        onClose={() => {}}
        footerProps={{
          onOkay: handleSubmit(onSubmit),
        }}
      >
        {/* <FadingBox header={watchFirstName && 'hello'}> */}
        <Form
          onSubmit={handleSubmit(onSubmit)}
          contextIsEnabled={true}
          viewModeIsEnabled={viewModeIsEnabled}
          formMethods={formMethods}
          fieldSize="small"
          columnSpacing="12px"
          rowSpacing="22px"
          height={'calc(100vh - 60px)'}
          headerProps={{
            height: 50,
            title: 'Create Contact',
            buttons: !viewModeIsEnabled
              ? [
                {
                  title: 'Submit',
                  type: 'submit',
                  size: 'small',
                },
              ]
              : [],
          }}
          // notificationProps={{
          //   visible:true,
          //   displayType:'dialog',
          //   dialogProps:{
          //     maxWidth:'xs'
          //   }
          // }}
          gridItems={[
            {
              title: 'Personal Information',
              fieldItemsList: [
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'firstname',
                    placeholder: 'First Name',
                    label: 'First Name',
                    startAdornment: <TiPersonOutlined sx={{ fontSize: '18px' }} />,
                    size: 'small',
                  },
                  fieldRules: {
                    required: {
                      value: true,
                      message: 'Required',
                    },
                    // validate: (x: unknown) => {
                    //   if (x === '20') {
                    //     return true;
                    //   } else {
                    //     return 'Value can be 20 only';
                    //   }
                    // },
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'middlename',
                    placeholder: 'Middle Name',
                    label: 'Middle Name',
                    startAdornment: <TiPersonOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'lastname',
                    placeholder: 'Last Name',
                    label: 'Last Name',
                    startAdornment: <TiPersonOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'marital_status',
                    placeholder: 'Marital Status',
                    label: 'Marital Status',
                    startAdornment: <TiPersonOutlined sx={{ fontSize: '18px' }} />,
                    options: [
                      {
                        label: 'Unmarried',
                        value: 'unmarried',
                      },
                      {
                        label: 'Married',
                        value: 'married',
                      },
                      {
                        label: 'Separated',
                        value: 'separated',
                      },
                    ],
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
                  fieldType: 'date',
                  fieldProps: {
                    name: 'dob',
                    placeholder: 'DOB',
                    label: 'DOB',
                  },
                  appendLabelWithOptional: true,
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'ssn',
                    placeholder: 'SSN',
                    label: 'SSN',
                    startAdornment: <TiSsnOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'phone_work',
                    placeholder: 'Phone - Work',
                    label: 'Phone - Work',
                    startAdornment: <TiPhoneOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'phone',
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
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'phone_home',
                    placeholder: 'Phone - Home',
                    label: 'Phone - Home',
                    startAdornment: <TiPhoneOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'phone',
                  },
                  xs: 6,
                },
                {
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'mobile_1',
                    placeholder: 'Mobile Phone 1',
                    label: 'Mobile Phone 1',
                    startAdornment: <TiMobileOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'phone',
                  },
                  xs: 6,
                },
                {
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'mobile_2',
                    placeholder: 'Mobile Phone 2',
                    label: 'Mobile Phone 2',
                    startAdornment: <TiMobileOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'phone',
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'email_1',
                    placeholder: 'Email 1',
                    label: 'Email 1',
                    startAdornment: <TiEmailOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'email_2',
                    placeholder: 'Email 2',
                    label: 'Email 2',
                    startAdornment: <TiEmailOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'Associations',
                    placeholder: 'Association(s)',
                    label: 'Association(s)',
                    defaultValue: 'self',
                    options: [
                      {
                        label: 'Self',
                        value: 'self',
                        icon: <TiPersonRefreshOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Spouse',
                        value: 'spouse',
                        icon: <TiPeopleOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Child',
                        value: 'child',
                        icon: <TiKidsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Siblings',
                        value: 'siblings',
                        icon: <TiKidsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Friends',
                        value: 'friends',
                        icon: <TiFriendsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Co-Investor',
                        value: 'co-investor',
                        icon: <TiPeopleDollarOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Other',
                        value: 'other',
                        icon: <TiCategoryOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'associated_with',
                    placeholder: 'Associated with',
                    label: 'Associated with',
                    defaultValue: '1',
                    searchIsEnabled: true,
                    searchInputProps: {
                      placeholder: 'Search Users',
                    },
                    options: [
                      {
                        label: 'Savannah Nguyen',
                        value: '1',
                        icon: <Avatar gender="female" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Bessie Cooper',
                        value: '2',
                        icon: <Avatar gender="female" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Cameron Williamson',
                        value: '3',
                        icon: <Avatar gender="female" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Robert Fox',
                        value: '4',
                        icon: <Avatar gender="male" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Savannah Nguyen',
                        value: '5',
                        icon: <Avatar gender="female" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Devon Lane',
                        value: '6',
                        icon: <Avatar gender="male" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                      {
                        label: 'Annette Black',
                        value: '7',
                        icon: <Avatar gender="male" size={18} avatarContainerProps={{ mr: 0 }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'estimated_fico',
                    placeholder: 'Estimated FICO',
                    label: 'Estimated FICO',
                    startAdornment: <TiSpeedometerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  appendLabelWithOptional: true,
                  xs: 6,
                },
              ],
            },
            {
              title: 'Lead Section',
              fieldItemsList: [
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'lead_source_type',
                    placeholder: 'Lead Source Type',
                    label: 'Lead Source Type',
                    defaultValue: 'website',
                    options: [
                      {
                        label: 'Referral',
                        value: 'referral',
                        icon: <TiReplyOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Website',
                        value: 'website',
                        icon: <TiWebOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Lead Form',
                        value: 'load_form',
                        icon: <TiFormPersonOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Lead APIs',
                        value: 'lead_apis',
                        icon: <TiCodeBlocksOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Social Media',
                        value: 'social_media',
                        icon: <TiSocialMediaOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Search Engine',
                        value: 'search_engine',
                        icon: <TiSearchOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Paid Ads',
                        value: 'paid_ads',
                        icon: <TiAdsPaidOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Other',
                        value: 'other',
                        icon: <TiCategoryOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'lead_source',
                    placeholder: 'Lead Source',
                    label: 'Lead Source',
                    startAdornment: <TiNetworkOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
              ],
            },
            {
              title: 'Current Loan',
              fieldItemsList: [
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'current_loan_purpose',
                    placeholder: 'Loan Purpose',
                    label: 'Loan Purpose',
                    defaultValue: 'refinance',
                    options: [
                      {
                        label: 'Cash-Out',
                        value: 'cash-out',
                        icon: <TiMoneyTransferOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Purchase',
                        value: 'purchase',
                        icon: <TiPurchaseOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Refinance',
                        value: 'refinance',
                        icon: <TiHomeRefreshOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'current_loan_type',
                    placeholder: 'Loan Type',
                    label: 'Loan Type',
                    defaultValue: 'usda',
                    options: [
                      {
                        label: 'Conforming ',
                        value: 'conforming ',
                        icon: <TiMouseClickOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Conventional',
                        value: 'conventional',
                        icon: <TiHomeAltOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'FHA',
                        value: 'fha',
                        icon: <TiFhaOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Jumbo',
                        value: 'jumbo',
                        icon: <TiBuildingsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'USDA',
                        value: 'usda',
                        icon: <TiUsdaOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'VA',
                        value: 'va',
                        icon: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'current_loan_amount',
                    placeholder: 'Loan Amount',
                    label: 'Loan Amount',
                    startAdornment: <TiMoneyOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'counter',
                  fieldProps: {
                    name: 'current_loan_rate',
                    placeholder: 'Loan Rate',
                    label: 'Loan Rate',
                    startAdornment: <TiWalletRateOutlined sx={{ fontSize: '18px' }} />,
                    stepSize: 0.1,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: '%',
                  } : undefined,
                  xs: 3,
                },
                {
                  fieldType: 'counter',
                  fieldProps: {
                    name: 'current_loan_mi',
                    placeholder: 'MI',
                    label: 'MI',
                    startAdornment: <TiWalletRateOutlined sx={{ fontSize: '18px' }} />,
                    stepSize: 0.1,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: '%',
                  } : undefined,
                  xs: 3,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'current_loan_term',
                    placeholder: 'Loan Term',
                    label: 'Loan Term',
                    defaultValue: '15_years',
                    options: [
                      {
                        label: '15 Years',
                        value: '15_years',
                        icon: <TiCalendar15Outlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: '30 Years',
                        value: '30_years',
                        icon: <TiCalendar30Outlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'current_loan_property_value',
                    placeholder: 'Property Value',
                    label: 'Property Value',
                    startAdornment: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'current_loan_down_payment',
                    placeholder: 'Down Payment',
                    label: 'Down Payment',
                    startAdornment: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'current_loan_term_remaining_value',
                    placeholder: 'Loan Remaining Term',
                    label: 'Loan Remaining Term',
                    startAdornment: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: (
                      <Field
                        fieldType="select"
                        fieldProps={{
                          size: 'small',
                          name: 'current_loan_term_remaining_period',
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
                        }}
                        control={control}
                        viewModeIsEnabled={viewModeIsEnabled}
                      />
                    ),
                    endAdornmentWrapperProps: {
                      flex: 1,
                      ml: '10px',
                    },
                  } : undefined,
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'current_loan_benefit_notes',
                    placeholder: 'Benefit (Notes)',
                    label: 'Benefit (Notes)',
                    startAdornment: <TiNotesOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 12,
                },
              ],
            },
            {
              title: 'Desired Loan',
              fieldItemsList: [
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'desired_loan_purpose',
                    placeholder: 'Loan Purpose',
                    label: 'Loan Purpose',
                    defaultValue: 'refinance',
                    options: [
                      {
                        label: 'Cash-Out',
                        value: 'cash-out',
                        icon: <TiMoneyTransferOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Purchase',
                        value: 'purchase',
                        icon: <TiPurchaseOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Refinance',
                        value: 'refinance',
                        icon: <TiHomeRefreshOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'desired_loan_type',
                    placeholder: 'Loan Type',
                    label: 'Loan Type',
                    defaultValue: 'usda',
                    options: [
                      {
                        label: 'Conforming ',
                        value: 'conforming ',
                        icon: <TiMouseClickOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Conventional',
                        value: 'conventional',
                        icon: <TiHomeAltOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'FHA',
                        value: 'fha',
                        icon: <TiFhaOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Jumbo',
                        value: 'jumbo',
                        icon: <TiBuildingsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'USDA',
                        value: 'usda',
                        icon: <TiUsdaOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'VA',
                        value: 'va',
                        icon: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'desired_loan_amount',
                    placeholder: 'Loan Amount',
                    label: 'Loan Amount',
                    startAdornment: <TiMoneyOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'desired_loan_term',
                    placeholder: 'Loan Term',
                    label: 'Loan Term',
                    defaultValue: '15_years',
                    options: [
                      {
                        label: '15 Years',
                        value: '15_years',
                        icon: <TiCalendar15Outlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: '30 Years',
                        value: '30_years',
                        icon: <TiCalendar30Outlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'desired_loan_benefit_notes',
                    placeholder: 'Benefit (Notes)',
                    label: 'Benefit (Notes)',
                    startAdornment: <TiNotesOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'counter',
                  fieldProps: {
                    name: 'desired_loan_rate',
                    placeholder: 'Loan Rate',
                    label: 'Loan Rate',
                    startAdornment: <TiWalletRateOutlined sx={{ fontSize: '18px' }} />,
                    stepSize: 0.1,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: '%',
                  } : undefined,
                  xs: 3,
                },
                {
                  fieldType: 'counter',
                  fieldProps: {
                    name: 'desired_loan_mi',
                    placeholder: 'MI',
                    label: 'MI',
                    startAdornment: <TiWalletRateOutlined sx={{ fontSize: '18px' }} />,
                    stepSize: 0.1,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: '%',
                  } : undefined,
                  xs: 3,
                },
              ],
            },
            {
              title: 'Primary Residence Address',
              fieldItemsList: [
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'address_street_1',
                    placeholder: 'Street 1',
                    label: 'Street 1',
                    startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'address_street_2',
                    placeholder: 'Street 2',
                    label: 'Street 2',
                    startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'address_state',
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
                    name: 'address_city',
                    placeholder: 'City',
                    label: 'City',
                    startAdornment: <TiBuildingsMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'address_zipcode',
                    placeholder: 'Zip',
                    label: 'Zip',
                    startAdornment: <TiZipcodeOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'zipcode',
                  },
                  xs: 3,
                },
              ],
            },
            {
              title: 'Subject Property',
              fieldItemsList: [
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'subject_property_address_street_1',
                    placeholder: 'Street 1',
                    label: 'Street 1',
                    startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'subject_property_address_street_2',
                    placeholder: 'Street 2',
                    label: 'Street 2',
                    startAdornment: <TiMapMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'subject_property_address_state',
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
                    name: 'subject_property_address_city',
                    placeholder: 'City',
                    label: 'City',
                    startAdornment: <TiBuildingsMarkerOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'mask',
                  fieldProps: {
                    name: 'subject_property_address_zipcode',
                    placeholder: 'Zip',
                    label: 'Zip',
                    startAdornment: <TiZipcodeOutlined sx={{ fontSize: '18px' }} />,
                    maskType: 'zipcode',
                  },
                  xs: 3,
                },
                {
                  fieldType: 'component',
                  xs: 9,
                },
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'subject_property_type',
                    placeholder: 'Property Type',
                    label: 'Property Type',
                    defaultValue: 'Condominium (Detached)',
                    options: [
                      {
                        label: 'Single Family Residence',
                        value: 'Single Family Residence',
                        icon: <TiHomeAltOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Condominium (Attached)',
                        value: 'Condominium (Attached)',
                        icon: <TiCondominiumOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Condominium (Detached)',
                        value: 'Condominium (Detached)',
                        icon: <TiBuildingsOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Manufactured (Single)',
                        value: 'Manufactured (Single)',
                        icon: <TiHomeAltOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Manufactured (Multi)',
                        value: 'Manufactured (Multi)',
                        icon: <TiHomeAltOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Multi-Unit',
                        value: 'Multi-Unit',
                        icon: <TiCondominiumMultiUnitOutlined sx={{ fontSize: '18px' }} />,
                      },
                      {
                        label: 'Farm',
                        value: 'Farm',
                        icon: <TiFarmOutlined sx={{ fontSize: '18px' }} />,
                      },
                    ],
                  },
                  xs: 6,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'subject_property_units',
                    placeholder: 'Units',
                    label: 'Units',
                    startAdornment: <TiStackOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 3,
                },
                {
                  fieldType: 'text',
                  fieldProps: {
                    name: 'subject_property_estimated_value',
                    placeholder: 'Estimated Value',
                    label: 'Estimated Value',
                    startAdornment: <TiHomeDollarOutlined sx={{ fontSize: '18px' }} />,
                  },
                  xs: 6,
                },
                {
                  fieldType: 'counter',
                  fieldProps: {
                    name: 'subject_property_taxes',
                    placeholder: 'Taxes',
                    label: 'Taxes',
                    startAdornment: <TiFileTaxOutlined sx={{ fontSize: '18px' }} />,
                  },
                  fieldDecoratorProps: !viewModeIsEnabled ? {
                    endAdornment: '%',
                    endAdornmentProps: {
                      variant: 'h2',
                    },
                  } : undefined,
                  xs: 3.25,
                },
              ],
            },
            !viewModeIsEnabled ? {
              fieldItemsList: [
                {
                  fieldType: 'array',
                  fieldArrayItems: incomeSourceFields,
                  renderComponent: (field: FieldValues, index: number) => (
                    <IncomeSourceFieldItem
                      key={field.id}
                      name={`income_source.[${index}]`}
                      onRemove={() => incomeSourceRemove(index)}
                      viewModeIsEnabled={viewModeIsEnabled}
                      index={index}
                      columnSpacing="12px"
                      rowSpacing="22px"
                      // @ts-ignore
                      errors={errors?.income_source?.[index]}
                    />
                  ),
                  fieldProps: {
                    name: 'income_source',
                  },
                  hidden: incomeSourceFields.length === 0,
                  xs: 12,
                },
                {
                  fieldType: 'component',
                  renderComponent: (
                    <Button
                      title="Add Income Source"
                      variant="text"
                      size="small"
                      sx={{ width: '155px', px: 0 }}
                      startIcon="+"
                      onClick={() =>
                        incomeSourceAppend({
                          address_street_1: '',
                        })
                      }
                    />
                  ),
                },
              ],
            } : {
              fieldItemsList: []
            },
          ]}
        />
      </FormDialog>

      <Box display="flex" width="300px" flexDirection="column" bgcolor="grey.200" px={2}>
        <Form
          contextIsEnabled={true}
          viewModeIsEnabled={viewModeIsEnabled}
          formMethods={formMethods}
          fieldSize="small"
          columnSpacing="12px"
          rowSpacing="22px"
          gridItems={[
            {
              fieldItemsList: [
                {
                  fieldType: 'react_select',
                  fieldProps: {
                    name: 'stage',
                    placeholder: 'Status',
                    label: 'Status',
                    options: [
                      {
                        label: 'Application',
                        value: 'application',
                      },
                      {
                        label: 'Closed',
                        value: 'closed',
                      },
                      {
                        label: 'Lead',
                        value: 'lead',
                      },
                      {
                        label: 'Qualified',
                        value: 'qualified',
                      },
                      {
                        label: 'Visitor',
                        value: 'visitor',
                      },
                    ],
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
                  fieldType: 'autocomplete',
                  fieldProps: {
                    name: 'tags',
                    placeholder: 'Search Tags',
                    label: 'Tags',
                    multiple: true,
                    options: [
                      {
                        label: 'Partner',
                        value: 'partner',
                      },
                      {
                        label: 'Closed',
                        value: 'closed',
                      },
                      {
                        label: 'Lead',
                        value: 'lead',
                      },
                      {
                        label: 'Qualified',
                        value: 'qualified',
                      },
                      {
                        label: 'Visitor',
                        value: 'visitor',
                      },
                    ],
                  },
                  fieldRules: {
                    required: {
                      value: true,
                      message: 'Required',
                    },
                  },
                  xs: 12,
                },
              ],
              hideDivider: true,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default FormDemo;
