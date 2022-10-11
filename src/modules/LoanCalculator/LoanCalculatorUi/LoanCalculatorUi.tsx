/* REACT */
import React from 'react';

/* MUI */
import { Theme } from '@mui/material/styles';

/* CORE */
import Box from '../../../core/Box';
import Grid from '../../../core/Grid';
import Typography from '../../../core/Typography';
import Slider from '../../../core/Slider';
import Button from '../../../core/Button';
import LinearProgress from '../../../core/LinearProgress';
import List from '../../../core/List';
import Stack from '../../../core/Stack';

/* COMMON */
import Form from '../../../common/Form';
import IconInfo from '../../../common/IconInfo';
import { useForm } from '../../../common/Form/hooks';
import Title from '../../../common/Title';
import FormDialog from '../../../common/Form/FormDialog';

/* LOCAL */
import GetPreQualified from '../GetPreQualified';

/* TYPES */
import { LoanCalculatorUiProps, IFormInput, IListItem } from './LoanCalculatorUi.types';

const LoanCalculatorV2: React.FC<LoanCalculatorUiProps> = ({ data }) => {
  const [downPaymentOptions, setDownPaymentOptions] = React.useState<Array<IListItem>>([]);
  const [interestRatesOptions, setInterestRatesOptions] = React.useState<Array<IListItem>>([]);
  const [loanRatesOptions, setLoanRatesOptions] = React.useState<Array<IListItem>>([]);
  const [dialogIsOpen, setDialogIsOpen] = React.useState<boolean>(false);

  const formMethods = useForm<IFormInput>({
    defaultValues: {
      asset_value: 500,
      loan_amount: 500,
      down_payment: 20,
      interest_rate: 2.3,
      loan_term: 15,
    },
  });

  const { control, handleSubmit, formState, setValue, getValues } = formMethods;
  const { errors } = formState || {};

  const {
    theme_color,
    calculate_button,
    primary_button,
    secondary_button,
    rates_note,
    disclaimer_note,
    redirect_note,
    down_payments,
    interest_rates,
    loan_terms,
    app_border_color,
    app_border,
    header,
    header_title,
    header_description,
  } = data;

  React.useEffect(() => {
    // update down payment select dropdown options
    if (down_payments) {
      const dpaOptions = down_payments?.split(/\r?\n/);
      const dpaOptionsNoDuplicates = [...dpaOptions].map((item) => ({
        label: item,
        value: item,
      }));
      setDownPaymentOptions(dpaOptionsNoDuplicates);
    } else {
      setDownPaymentOptions([]);
    }

    // update interest rates select dropdown options
    if (interest_rates) {
      const iraOptions = interest_rates?.split(/\r?\n/);
      const iraOptionsNoDuplicates = [...iraOptions].map((item) => ({
        label: item,
        value: item,
      }));
      setInterestRatesOptions(iraOptionsNoDuplicates);
    } else {
      setInterestRatesOptions([]);
    }

    // update loan terms select dropdown options
    if (loan_terms) {
      const ltaOptions = loan_terms?.split(/\r?\n/);
      const ltaOptionsNoDuplicates = [...ltaOptions].map((item) => ({
        label: item,
        value: item,
      }));
      setLoanRatesOptions(ltaOptionsNoDuplicates);
    } else {
      setLoanRatesOptions([]);
    }
  }, [down_payments, interest_rates, loan_terms]);

  React.useEffect(() => {
    console.log('formState', formState);
  }, [formState]);

  const onSubmit = (data: IFormInput) => console.log(data);

  const CustomListItem = ({ label, value }: IListItem) => {
    return (
      <Box display="flex" width="100%" alignItems="center">
        <Box display="flex" flex={1}>
          <Typography variant="h4" color="grey.800">
            {label}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h4" color="grey.900">
            {value}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Grid
      container
      sx={{
        border: app_border ? `1px solid ${app_border_color}` : 'none',
      }}
    >
      {header && (
        <Grid item xs={12}>
          <Box
            sx={{
              borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
            }}
            display="flex"
            flexDirection="column"
            p="30px"
          >
            <Title
              title={header_title || 'Header Title'}
              summary={header_description || 'Fill in some details so we can calculate your payments'}
              titleProps={{
                variant: 'h2',
                fontSize: '24px',
                color: theme_color || 'primary.main',
                mb: '6px',
              }}
              summaryProps={{
                color: 'grey.800',
                variant: 'body1',
              }}
            />
          </Box>
        </Grid>
      )}

      <Grid p="15px" item xs={12}>
        <Grid container>
          <Grid p="15px" item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" width="100%">
              {/* title of widget */}
              <Title
                title="Mortgage Calculator"
                summary="Fill in some details so we can calculate your payments"
                titleProps={{
                  variant: 'h2',
                  fontSize: '22px',
                  color: 'grey.900',
                }}
                summaryProps={{
                  color: 'grey.800',
                  variant: 'body1',
                }}
              />

              {/* slider 1 */}
              <Box mt="32px" display="flex" flex={1} flexDirection="column" width="100%">
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  formMethods={formMethods}
                  gridItems={[
                    {
                      hideDivider: true,
                      fieldsWrapperProps: {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                      fieldItemsList: [
                        {
                          fieldType: 'component',
                          renderComponent: <Typography variant="h5">Home Value</Typography>,
                          xs: 6,
                        },
                        {
                          fieldType: 'mask',
                          fieldProps: {
                            name: 'asset_value',
                            maskType: 'currency',
                            sx: {
                              color: theme_color || 'primary.main',
                              fontSize: '15px',
                              lineHeight: '17.58px',
                              fontWeight: 500,
                              height: '32px',
                            },
                          },
                          xs: 3.5,
                        },
                        {
                          fieldType: 'component',
                          renderComponent: (
                            <Slider
                              min={0}
                              step={100}
                              max={20000000}
                              onChange={(e, newValue) => setValue('asset_value', newValue as number)}
                              sx={{
                                color: theme_color || 'primary.main',
                              }}
                            />
                          ),
                          xs: 12,
                          mt: '10px',
                        },
                      ],
                    },
                    {
                      mt: '48px',
                      hideDivider: true,
                      fieldsWrapperProps: {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                      fieldItemsList: [
                        {
                          fieldType: 'component',
                          renderComponent: <Typography variant="h5">Loan Amount</Typography>,
                          xs: 6,
                        },
                        {
                          fieldType: 'mask',
                          fieldProps: {
                            name: 'loan_amount',
                            maskType: 'currency',
                            sx: {
                              color: theme_color || 'primary.main',
                              fontSize: '15px',
                              lineHeight: '17.58px',
                              fontWeight: 500,
                              height: '32px',
                            },
                          },
                          xs: 3.5,
                        },
                        {
                          fieldType: 'component',
                          renderComponent: (
                            <Slider
                              min={0}
                              step={100}
                              max={20000000}
                              onChange={(e, newValue) => setValue('loan_amount', newValue as number)}
                              sx={{
                                color: theme_color || 'primary.main',
                              }}
                            />
                          ),
                          xs: 12,
                          mt: '10px',
                        },
                      ],
                    },
                    {
                      mt: '48px',
                      hideDivider: true,
                      fieldsWrapperProps: {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        columnSpacing: '20px',
                        rowSpacing: '20px',
                      },
                      fieldItemsList: [
                        {
                          fieldType: 'react_select',
                          fieldProps: {
                            name: 'down_payment',
                            label: 'Down Payment %',
                            options:
                              downPaymentOptions.length > 0
                                ? downPaymentOptions
                                : [
                                  {
                                    label: '20%',
                                    value: 20,
                                  },
                                  {
                                    label: '15%',
                                    value: 15,
                                  },
                                  {
                                    label: '10%',
                                    value: 10,
                                  },
                                  {
                                    label: '5%',
                                    value: 5,
                                  },
                                ],
                            sx: {
                              width: '100%',
                            },
                          },
                          xs: 12,
                          sm: 4,
                        },
                        {
                          fieldType: 'react_select',
                          fieldProps: {
                            name: 'interest_rate',
                            label: 'Interest Rate',
                            options:
                              interestRatesOptions.length > 0
                                ? interestRatesOptions
                                : [
                                  {
                                    label: '2.3%',
                                    value: 2.3,
                                  },
                                  {
                                    label: '2.45%',
                                    value: 2.45,
                                  },
                                  {
                                    label: '2.75%',
                                    value: 2.75,
                                  },
                                  {
                                    label: '3.25%',
                                    value: 3.25,
                                  },
                                ],
                          },
                          xs: 6,
                          sm: 4,
                        },
                        {
                          fieldType: 'react_select',
                          fieldProps: {
                            name: 'loan_term',
                            label: 'Loan Term',
                            options:
                              loanRatesOptions.length > 0
                                ? loanRatesOptions
                                : [
                                  {
                                    label: '30 Years',
                                    value: 30,
                                  },
                                  {
                                    label: '15 Years',
                                    value: 15,
                                  },
                                ],
                          },
                          xs: 6,
                          sm: 4,
                        },
                      ],
                    },
                  ]}
                />
              </Box>

              {/* submit button */}
              <Box
                mt="40px"
                display="flex"
                flexDirection="column"
                width="100%"
                mb={{
                  xs: 3,
                  md: 0,
                }}
              >
                <Button
                  title={calculate_button?.title || 'Calculate Payment'}
                  fullWidth
                  sx={{
                    height: '50px',
                    bgcolor: calculate_button?.colors?.background || theme_color || 'primary.main',
                    color: calculate_button?.colors?.font || 'white',
                    fontWeight: calculate_button?.bold ? 500 : 400,
                    textDecoration: calculate_button?.underline ? 'underline' : 'none',
                    fontStyle: calculate_button?.italic ? 'italic' : 'normal',
                    '&:hover': {
                      bgcolor: calculate_button?.colors?.background || theme_color || 'primary.main',
                      color: calculate_button?.colors?.font || 'white',
                      opacity: 0.85,
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
          {/* display calculations */}
          <Grid p="15px" item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" width="100%">
              <Box display="flex">
                <Typography variant="h1" fontSize="24px" color="grey.900">
                  Your Monthly Loan EMI :
                  <Typography sx={{ color: theme_color || 'primary.main' }} component="span" variant="inherit">
                    &nbsp;$1,986
                  </Typography>
                </Typography>
              </Box>
              <Box mt="18px" display="flex" flexDirection="column" width="100%">
                <LinearProgress
                  value={50}
                  variant="determinate"
                  sx={{
                    height: '8px',
                    borderRadius: '2px',
                    bgcolor: 'success.main',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: theme_color || 'primary.main',
                    },
                  }}
                />
                <Stack mt="16px" direction="row" spacing="20px">
                  <IconInfo
                    icon={<Box bgcolor={theme_color || 'primary.main'} width="12px" height="12px" borderRadius="2px" />}
                    titleComponentProps={{
                      titleProps: {
                        variant: 'body1',
                      },
                    }}
                    title="Principal"
                  />
                  <IconInfo
                    icon={<Box bgcolor={'success.main'} width="12px" height="12px" borderRadius="2px" />}
                    titleComponentProps={{
                      titleProps: {
                        variant: 'body1',
                      },
                    }}
                    title="Interest"
                  />
                </Stack>
              </Box>
              <Box mt="40px" display="flex" flexDirection="column" width="100%">
                <List
                  sx={{
                    '& .MuiListItem-root': {
                      mb: '18px',
                    },
                  }}
                  items={[
                    {
                      label: <CustomListItem label="Principal" value="$54,890" />,
                    },
                    {
                      label: <CustomListItem label="Interest" value="$4,670.98" />,
                    },
                    {
                      label: <CustomListItem label="Total Amount" value="$59,000.98" />,
                    },
                    {
                      label: <CustomListItem label="Interest Rate" value="3.5%" />,
                    },
                    {
                      label: <CustomListItem label="Loan Term" value="20 Years" />,
                    },
                  ]}
                />
              </Box>

              {rates_note && (
                <Box mt="2px" display="flex" flexDirection="column" width="100%">
                  <Typography whiteSpace="pre-line" color="grey.800" variant="body2">
                    {rates_note}
                  </Typography>
                </Box>
              )}

              {/* submit button */}
              <Box mt="40px" display="flex" flexDirection="column" width="100%">
                <Stack direction="row" spacing="8px">
                  {!primary_button?.disabled && (
                    <Button
                      title={primary_button?.title || 'Get Prequalified'}
                      fullWidth
                      sx={{
                        height: '50px',
                        bgcolor: primary_button?.colors?.background || theme_color,
                        color: primary_button?.colors?.font || 'white',
                        fontWeight: primary_button?.bold ? 500 : 400,
                        textDecoration: primary_button?.underline ? 'underline' : 'none',
                        fontStyle: primary_button?.italic ? 'italic' : 'normal',
                        '&:hover': {
                          bgcolor: primary_button?.colors?.background || theme_color,
                          color: primary_button?.colors?.font || 'white',
                          opacity: 0.85,
                        },
                      }}
                      onClick={primary_button?.title === 'Get Pre-qualified' ? () => setDialogIsOpen(true) : () => {}}
                    />
                  )}
                  {!secondary_button?.disabled && (
                    <Button
                      title={secondary_button?.title || 'Apply Now'}
                      fullWidth
                      sx={{
                        height: '50px',
                        bgcolor: secondary_button?.colors?.background || theme_color || 'primary.main',
                        color: secondary_button?.colors?.font || 'white',
                        fontWeight: secondary_button?.bold ? 500 : 400,
                        textDecoration: secondary_button?.underline ? 'underline' : 'none',
                        fontStyle: secondary_button?.italic ? 'italic' : 'normal',
                        '&:hover': {
                          bgcolor: secondary_button?.colors?.background || theme_color || 'primary.main',
                          color: secondary_button?.colors?.font || 'white',
                          opacity: 0.85,
                        },
                      }}
                      onClick={
                        secondary_button?.onClickContent
                          ? () => `${secondary_button?.onClickContent}`
                          : secondary_button?.linkTarget === 'popup'
                            ? () =>
                              window.open(
                                secondary_button?.href,
                                '_parent',
                                'location=yes,popup=true,height=570,width=520,scrollbars=yes,status=yes'
                              )
                            : () => window.open(secondary_button?.href)
                      }
                      // href={secondary_button?.href && !secondary_button?.onClickContent && secondary_button?.href}
                      // onClick={secondary_button?.linkTarget==='popup' ? () => `MyWindow=window.open('${secondary_button?.href}','MyWindow','width=600,height=300'); return false;` : () => {}}
                    />
                  )}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {disclaimer_note && (
          <Box p="30px" display="flex" flexDirection="column">
            <Typography whiteSpace="pre-line" textAlign="center" color="grey.800" variant="body2">
              {disclaimer_note}
            </Typography>
          </Box>
        )}
      </Grid>

      <FormDialog
        open={dialogIsOpen}
        maxWidth="560px"
        onClose={() => setDialogIsOpen(false)}
        fullWidth
        headerProps={{
          title: 'Request to Get Prequalified',
          px: '30px',
          borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
          height: '90px',
        }}
        formWrapperProps={{
          sx: {
            maskImage: 'unset',
            p: 0,
            pt: '30px',
          },
        }}
        disableFooter={true}
      >
        <GetPreQualified theme_color={theme_color} />
      </FormDialog>
    </Grid>
  );
};

export default LoanCalculatorV2;
